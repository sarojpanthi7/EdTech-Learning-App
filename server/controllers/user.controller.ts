import { Request, Response, NextFunction } from "express";
import userModel, { Iuser } from "../models/user.model";
import ErrorHandler from "../utils/ErrorHandler";
import { CatchAsyncErrors } from "../middlewares/catchAsyncErrors";
import jwt, { JwtPayload } from "jsonwebtoken";
import ejs from "ejs";
import path from "path";
import sendEmail from "../utils/SendMail";
import { sendToken } from "../utils/jwt";
import { access } from "fs";
import { redis } from "../utils/redis";
require('dotenv').config();

// Register user
interface IregistrationBody {
    name: string;
    email: string;
    password: string;
    avatar?: string;
}

export const registrationUser = CatchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email, password, avatar }: IregistrationBody = req.body;

        const isEmailExist = await userModel.findOne({ email });

        if (isEmailExist) {
            return next(new ErrorHandler('Email already exist', 400));
        }

        const user: any = {
            name,
            email,
            password,
        };

        const activationToken = createActivationToken(user);
        const activationCode = activationToken.activationCode;

        const data = {
            user: { name: user.name },
            activationCode
        };

        const html = await ejs.renderFile(path.join(__dirname, '../mails/activation-mail.ejs'), data);

        try {
            await sendEmail({
                email: user.email,
                subject: 'Activate your account',
                template: 'activation-mail.ejs',
                data
            });

            res.status(201).json({
                success: true,
                message: 'User registered successfully',
                activationToken: activationToken.token,
            });

        } catch (error: any) {
            console.error(error);
            return next(new ErrorHandler(error.message, 500));
        }

    } catch (error: any) {
        return next(new ErrorHandler(error.message, 400));
    }
});

interface IActivationToken {
    token: string;
    activationCode: string;
}

export const createActivationToken = (user: Iuser): IActivationToken => {
    const activationCode = Math.floor(1000 + Math.random() * 9000).toString();

    const token = jwt.sign({
        user, activationCode
    }, process.env.ACTIVATION_SECRET as string, {
        expiresIn: '5m'
    });

    return { token, activationCode };
};

//activate user
interface IActivationRequest {
    activation_code: string;
    activation_token: string;
}

export const activateUser = CatchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { activation_code, activation_token } = req.body as IActivationRequest;
        const newUser = jwt.verify(activation_token, process.env.ACTIVATION_SECRET as string) as JwtPayload & { user: Iuser, activationCode: string };
        
        if (newUser.activationCode !== activation_code) {
            return next(new ErrorHandler('Invalid activation code', 400));
        }
        
        const { name, email, password } = newUser.user;
        const existUser = await userModel.findOne({ email });

        if (existUser) {
            return next(new ErrorHandler('User already exist', 400));
        }
        
        const user = await userModel.create({ name, email, password });
        
        res.status(201).json({
            success: true,
            message: 'User activated successfully',
            user
        });
    } catch (error: any) {
        return next(new ErrorHandler(error.message, 400));
    }
});

//login user

interface ILoginUser {
    email: string;
    password: string;
};

export const loginUser = CatchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password }: ILoginUser = req.body;
        if (!email || !password) {
            return next(new ErrorHandler('Please enter email and password', 400));
        }
        const user = await userModel.findOne({ email }).select('+password');
        if (!user) {
            return next(new ErrorHandler('Invalid email or password', 401));
        }
        const isPasswordMatched = await user.comparePassword(password);
        if (!isPasswordMatched) {
            return next(new ErrorHandler('Invalid email or password', 401));
        }
        sendToken(user, 200, res);
    } catch (error: any) {
        return next(new ErrorHandler(error.message, 400));
    }
});

//log out user
export const logOutUser = CatchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const access_token = req.cookies.access_token || (req.headers.authorization as string)?.split(' ')[1];

        if (!access_token) {
            return res.status(200).json({
                success: true,
                message: 'User already logged out'
            });
        }

        try {
            const decoded = jwt.verify(access_token, process.env.ACCESS_TOKEN as string) as JwtPayload & { id: string };
            await redis.del(decoded.id);
        } catch (error: any) {
            console.log("Token verification error during logout:", error.message);
        }

        res.cookie('access_token', "", { maxAge: 1 });
        res.cookie('refresh_token', "", { maxAge: 1 });

        res.status(200).json({
            success: true,
            message: 'User logged out successfully'
        });
    } catch (error: any) {
        return next(new ErrorHandler(error.message, 400));
    }
});

// get user info
export const getUserInfo = CatchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user as Iuser;

        if (!user) {
            return next(new ErrorHandler('User not found', 404));
        }

        res.status(200).json({
            success: true,
            user,
        });
    } catch (error: any) {
        console.error("Error in getUserInfo controller:", error);
        return next(new ErrorHandler(error.message || 'Internal Server Error', 500));
    }
});
