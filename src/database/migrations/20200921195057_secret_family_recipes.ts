import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("user", table => {
        table.uuid("user_ID").unique().notNullable().primary()
        table.text("username").unique().notNullable()
        table.text("password").notNullable()
    })

    await knex.schema.createTable("recipes", table => {
        table.uuid("user_ID").unique().notNullable()
        table.uuid("recipe_ID").unique().notNullable().primary()
        table.text("name").notNullable()
        table.text("category")
    })

    await knex.schema.createTable("ingredients", table => {
        table.uuid("ingredient_ID").notNullable().unique().primary()
        table.text("name").notNullable()
        table.text("amount").notNullable()
        table.uuid("recipe_ID").notNullable()
    })

    await knex.schema.createTable("instructions", table => {
        table.uuid("instruction_ID").notNullable().unique().primary()
        table.text("name").notNullable()
        table.integer("step").unique().notNullable()
        table.uuid("recipe_ID")
    })

    await knex.schema.createTable("user_recipes", table => {
        table.uuid("user_ID").notNullable().references("user_ID").inTable("user").onDelete("CASCADE").onUpdate("CASCADE")
        table.uuid("recipe_ID").notNullable().references("recipe_ID").inTable("recipes").onDelete("CASCADE").onUpdate("CASCADE")
        table.primary(["user_ID", "recipe_ID"])
    })

    await knex.schema.createTable("recipe_instructions", table => {
        table.uuid("recipe_ID").notNullable().references("recipe_ID").inTable("recipes").onDelete("CASCADE").onUpdate("CASCADE")
        table.uuid("instruction_ID").notNullable().references("instruction_ID").inTable("instructions").onDelete("CASCADE").onUpdate("CASCADE")
        table.primary(["recipe_ID", "instruction_ID"])
    })

    await knex.schema.createTable("recipe_ingredients", table => {
        table.uuid("recipe_ID").notNullable().references("recipe_ID").inTable("recipes").onDelete("CASCADE").onUpdate("CASCADE")
        table.uuid("ingredient_ID").notNullable().references("ingredient_ID").inTable("ingredients").onDelete("CASCADE").onUpdate("CASCADE")
        table.primary(["recipe_ID", "ingredient_ID"])
    })

}


export async function down(knex: Knex): Promise<void> {
    console.log("Dropping tables");
    await knex.schema.dropTableIfExists("recipes_ingredients");
    await knex.schema.dropTableIfExists("recipe_instructions");
    await knex.schema.dropTableIfExists("user_recipes");
    await knex.schema.dropTableIfExists("instructions");
    await knex.schema.dropTableIfExists("ingredients");
    await knex.schema.dropTableIfExists("recipes");
    await knex.schema.dropTableIfExists("user");
}

