import { Request, Response, NextFunction } from "express"
import jwt, { JwtPayload } from 'jsonwebtoken'
import { redis } from "../utils/redis"
import ErrorHandler from "../utils/ErrorHandler"
import { CatchAsyncErrors } from "./catchAsyncErrors"
import { Iuser } from "../models/user.model"

//is Authenticated user
export const isAuthincated = CatchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    const access_token = req.cookies.access_token || (req.headers.authorization as string)?.split(' ')[1];

    if (!access_token) {
        return next(new ErrorHandler('Please login to access this resource', 401));
    }

    try {
        const decoded = jwt.verify(access_token, process.env.ACCESS_TOKEN as string) as JwtPayload & { id: string };
        console.log("Decoded token:", decoded);

        const user = await redis.get(decoded.id);
        console.log("User from Redis:", user);

        if (!user) {
            return next(new ErrorHandler('User not found', 404));
        }

        req.user = JSON.parse(user);
        console.log("Attached user to req.user:", req.user);
        next();
    } catch (error: any) {
        console.error("Authentication middleware error:", error);
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
             return next(new ErrorHandler('Access token is not valid or expired', 401));
        } else {
            return next(new ErrorHandler('Authentication failed', 500));
        }
    }
});

//VALIDATE USER ROLE
export const authorizeRoles = (...roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user || !roles.includes((req.user as Iuser).role)) {
            return next(new ErrorHandler(`Role: ${(req.user as Iuser)?.role || 'unknown'} is not authorized to access this resource`, 403));
        }
        next();
    };
};