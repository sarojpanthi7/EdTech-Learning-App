import express from "express";
import { activateUser, loginUser, logOutUser, registrationUser, getUserInfo } from "../controllers/user.controller";
import { isAuthincated } from "../middlewares/auth";
const userRouter = express.Router();

userRouter.post('/register', registrationUser);
userRouter.post('/activate-user', activateUser)
userRouter.post('/login', loginUser)
userRouter.get('/logout', isAuthincated, logOutUser)
userRouter.get('/me', isAuthincated, getUserInfo)

export default userRouter