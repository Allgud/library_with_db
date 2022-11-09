import { Router } from "express";
import UserController from "../controllers/userController.js";

const userRouter = new Router()

userRouter.post('/users', UserController.createUser)
userRouter.get('/users', UserController.getAllUsers)
userRouter.get('/users/:id', UserController.getUserById)
userRouter.put('/users', UserController.updateUser)
userRouter.delete('/users/:id', UserController.deleteUser)

export default userRouter