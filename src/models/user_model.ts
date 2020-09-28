import { db } from "../database/dbConfig"
import uuid from "uuid-1345"

export interface spreadUserObject {
    username: string
    password: string
    user_ID: string
}


export async function get() {
    return db("user")
}

export async function getById(user_ID: string) {
    return db("user")
    .where({user_ID})
    .select("username", "user_ID")
    .first()
}

export async function getBy(username: spreadUserObject) {
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

export async function update(user: spreadUserObject) {
    const id = user.user_ID
    await db("user").update(user).where("user_ID", id)
    return getById(id)
}

export async function remove(user_ID: spreadUserObject) {
    return db("user").where({ user_ID }).del()
}