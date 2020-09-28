// "use strict";
// import express from 'express'
// import * as recipeModel from  "../models/recipe-model"
// import uuid from "uuid-1345";
// import dotenv from "dotenv"
// dotenv.config()
// export const recipeRouter = express.Router()
// recipeRouter.get("/user/:id/recipes", async (req, res, next) => {
//     const recipeData = req.body;
//     const {user_ID} = req.params; 
//     recipeModel.getByUserId(user_ID)
//     .then(recipe => {
//       if (recipe) {
//         recipeModel.create(recipeData)
//         .then(step => {
//           res.status(201).json(step);
//         })
//       } else {
//         res.status(404).json({ message: 'Could not find scheme with given id.' })
//       }
//     })
//     .catch (err => {
//       res.status(500).json({ message: 'Failed to create new step' });
//     });
// }) 
