import express from "express"
import * as userModel from "../models/user_model"
import { restrict, validateUser, validateUpdate } from "../middleware/user-middleware"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import dotenv from "dotenv"
import uuid from "uuid-1345";
dotenv.config()

export const userRouter = express.Router()

declare global {
    namespace Express {
        interface Request {
            user_ID: string;
        }
    }
}
//this was just practice, try/catch works better with ts
// userRouter.get("/user", (req, res) => {
//     user.get()
//     .then((users: any) => {
//         res.json(users);
//     })
//     .catch((err: any) => {
//         res.status(500).json({
//             message:"Failed to get user"
//         })
//     })
// })

//READ
userRouter.get("/user", restrict(), async (req, res, next) => {
    try {
        res.json(await userModel.get())
    } catch(err) {
        next(err)
    }
})

//CREATE
userRouter.post("/register", validateUser(), async (req, res, next) => {
    try {
        const {username, password} = req.body

        const newUser = await userModel.create({
            username, 
            password: await bcrypt.hash(password, 15),
            user_ID: uuid.v4()
        })

        if(newUser) {
            return res.status(201).json({
                message: "The user has been created! Hooray!"
            })
        }
    }
    catch(err) {
        next(err)
    }
})

userRouter.post('/login', async (req, res, next) => {
    try {
        const { username, password } = req.body
        const user = await userModel.getBy(username)

        if(!user) {
            return res.status(401).json({
                message: "invalid credentials"
            })
        }
        const authenticated = await bcrypt.compare(password, user.password)
        if(!authenticated) {
            return res.status(401).json({
                message: "invalid credentials"
            })
        }
        const payload = {
            userId: user.user_ID,
            username: username,
        }

        if(!process.env.JWT_SECRET) throw new Error("Missing Secret")
        res.cookie('token', jwt.sign(payload, process.env.JWT_SECRET))
        res.json({
            message: `Welcome, ${username}. We missed you!`
        })
    }

    catch(error) {
        next(error)
    }
})

userRouter.put('/user/:id', restrict(), validateUpdate, async (req, res, next) => {
    try {
        const { username, password } = req.body
        const updatedUser = {
            username, 
            password: await bcrypt.hash(password, 15),
            user_ID: req.user_ID
        }
        const newUpdatedUser = await userModel.update(updatedUser)
        res.status(200).json(newUpdatedUser)
    } catch (error) {
        next(error)
    }
})

