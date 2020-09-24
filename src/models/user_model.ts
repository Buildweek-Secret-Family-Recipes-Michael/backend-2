import { db } from "../database/dbConfig"
import uuid from "uuid-1345";

export interface spreadUserObject {
    username: string
    password: string
    user_ID: string
}


export function get() {
    return db("user")
}

export function getById(user_ID: string) {
    return db("user")
    .where({user_ID})
    .select("username", "user_ID")
    .first()
}

export function getBy(username: spreadUserObject) {
    return db("user")
    .select("user_ID", "username", "password")
    .where("username", username).first()
}

export async function create(user: spreadUserObject) {
    const user_ID = uuid.v4();
    const newUser = {
        ...user,
        user_ID
    }
    await db("user").insert(newUser)
    const createdUser = await getById(user_ID)
    return createdUser
}