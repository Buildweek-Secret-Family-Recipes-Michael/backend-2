import { db } from "../database/dbConfig"
import uuid from "uuid-1345"

export interface spreadRecipeObject {
    name: string
    category: string
    recipe_ID: string
    user_ID: string
}

export async function getByUserId(user_ID: spreadRecipeObject) {
    return db("recipes")
        .where({user_ID})
        .select("recipe_ID", "name", "category")
}

export function getBy(recipes: spreadRecipeObject) {
    return db("recipes")
        .select("recipe_ID", "name", "user_ID")
        .where({recipes})
        .first();
}

export async function create(recipe: spreadRecipeObject) {
    const recipe_ID = uuid.v4()
    const {name, user_ID, category} = recipe
    const newRecipe = {
        name, 
        user_ID,
        category,
        recipe_ID: recipe_ID
    };

    await db("recipes").insert(newRecipe)
    await db("user_recipes").insert({ recipe_ID, user_ID: recipe.user_ID})
}
