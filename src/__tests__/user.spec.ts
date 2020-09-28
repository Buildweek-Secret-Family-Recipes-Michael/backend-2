import { server } from "../../index"
import * as userModel from "../models/user_model"
import { db } from "../database/dbConfig"
import supertest from "supertest"

describe('end point tests mvp', function() {
    describe('/register /login', function() {
        beforeAll(async() => {
                await db('users').truncate();
            })
            
        //should return status 201
        it('registers a new user', async() => {
            await supertest(server)
                    .post('/register')
                    .send({ username: "michelletest", password: "michelletest" })
                    .then(res => {
                        console.log(res.body)
                        expect(res.status).toBe(201)
                        expect(res.body.username).toBe(res.body.username)
                    })
            })
                 
    })
})