import jwt from "jsonwebtoken"
import * as userModel from "../models/user_model"
import uuid from "uuid-1345";
import dotenv from "dotenv"
dotenv.config()

export function restrict() {
    return async (req: any, res: any, next: any) => {
        const authError = {
            message: "Invalid Credentials..."
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
                message: "Missing username and/or password..."
            })
        const user = await userModel.getBy({ username, password, user_ID: uuid.v4() })
        if (user)
            return res.status(409).json({
                message: "Username is taken..."
            })
            req.user = user
            next()
    }
    catch(err) {next(err)}
}}

export async function validateUpdate(req: any, res: any, next: any) {
    try {
        const { username, password } = req.body
        if(!username || password)
            return res.status(400).json({
                message: "Missing username and/or password"
            })

        const validateUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
        if (!req.params.id.validate(validateUuid))
            return res.status(400).json({
                message: "Not a valid uuid..."
            })

        const validatedUser = await userModel.getById(req.params.id)
        if(!validatedUser)
            return res.status(400).json({
                message: "Invalid id..."
            })

        if(req.body.username === validatedUser.username) {
            return next()
        } else if (req.body.username !== validatedUser.username) {
            const validatedUsername = await userModel.getBy(username)

            if (validatedUsername) return res.status(400).json({error: "Username is already taken..."});
        }
        next();
    } catch (e) {
        console.log(e.stack);
        next();
    }
}
