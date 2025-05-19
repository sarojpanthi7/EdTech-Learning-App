import { NextFunction, Request, Response } from "express";
import ErrorHandler from "utils/ErrorHandler";
export const ErrorMiddleware = ((err: any, req: Request, res: Response, next: NextFunction) => {
    err.statusCode = error.statusCode || 500;
    err.message = err.message || 'Internal server Error';

    //wrong mongodb id error
    if (err.name === 'CastError') {
        const message = `Resource not found. Invalid ${err.path}`;
        err = new ErrorHandler(message, 400)
    }

    //dublicate key error
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
        err = new ErrorHandler(message, 400)
    }

    //wrong jwt error
    if (err.name === 'JsonWebTokenError') {
        const message = `Json Web token is error, please try again`;
        err = new ErrorHandler(message, 400);
    }

    //Jwt expire Error
    if (err.name === 'TokenExpiredError') {
        const message = 'Token expired please login again.'
        err = new ErrorHandler(message, 400);;
    }

    res.status(err.statusCode).json{
        success: false,
            message: err.message,
    }
})