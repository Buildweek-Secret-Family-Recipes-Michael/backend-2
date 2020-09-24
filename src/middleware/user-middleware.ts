import jwt from "jsonwebtoken"
import * as userModel from "../models/user_model"
import uuid from "uuid-1345";
import dotenv from "dotenv"
dotenv.config()

export function restrict() {
    return async (req: any, res: any, next: any) => {
        const authError = {
            message: "Invalid Credentials"
        }
        try {
            const token = req.cookies.token
            if(!token) {
                return res.status(401).json(authError)
            }
            jwt.verify(token, process.env.JWT_SECRET!, (err: any, decoded: any) => {
                if(err) {
                    return res.status(401).json(authError)
                }
                req.token = decoded
                next()
            })
        }
        catch(err) {next(err)}
    }
}

export function validateUser() {
    return async (req: any, res: any, next: any) => {
    try {
        const { username, password } = req.body
        if (!username || !password)
            return res.status(400).json({
                message: "Missing username and/or password"
            })
        const user = await userModel.getBy({ username, password, user_ID: uuid.v4() }).first()
        if (user)
            return res.status(409).json({
                message: "Username is taken..."
            })
            req.user = user
            next()
    }
    catch(err) {next(err)}
}}