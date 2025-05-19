import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken'
import { redis } from "../utils/redis"

//is Authenticated user
export const isAuthincated = (req: Request, res: Response, next: NextFunction) => {
    const access_token = req.cookies.access_token;
    if (!access_token) {
        return next(new Error('Please login to access this resource'));
    }
    const decoded = jwt.verify(access_token, process.env.ACCESS_TOKEN as string);
    if (!decoded) {
        return next(new Error('Access token is not valid'));
    }

    const user = redis.get(decoded.id.toString());
    if (!user) {
        return next(new Error('User not found'));
    }
    req.user = JSON.parse(user);
    next();

}