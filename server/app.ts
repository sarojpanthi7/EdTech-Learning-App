import express, { Request, Response, NextFunction } from "express"
import { ErrorMiddleware } from "middlewares/error";
import cors from "cors"
import cookieParser from "cookie-parser";
import userRouter from "./router/user.routes";
require("dotenv").config();
export const app = express();

//body parser
app.use(express.json({ limit: '50mb' }));

//cookie parser
app.use(cookieParser());

//cors

app.use(cors({
    origin: process.env.ORIGIN
}))

//start server
app.use('/api/v1', userRouter);
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        success: true,
        message: "Api is working"
    })
})



