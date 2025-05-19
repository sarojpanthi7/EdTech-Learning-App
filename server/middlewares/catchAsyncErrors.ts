import { NextFunction, Request, Response } from "express";

export const CatchAsyncErrors = (
    theFunc: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(theFunc(req, res, next)).catch(next);
    };
};
