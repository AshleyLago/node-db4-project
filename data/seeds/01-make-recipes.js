const recipes = [
    { recipe_name: "BBQ Chicken Sandwich" },
    { recipe_name: "Chicken Tacos" },
    { recipe_name: "Grilled Chicken Quesadilla" },
    { recipe_name: "Spaghetti Bolognese" }
]

const steps = [
    // BBQ Chicken Sandwich
    {recipe_id: 1, step_number: 1, step_instructions: "Shred leftover chicken"},
    {recipe_id: 1, step_number: 2, step_instructions: "Mix with barbecue sauce"},
    {recipe_id: 1, step_number: 3, step_instructions: "Serve on a bun"},
    {recipe_id: 1, step_number: 4, step_instructions: "Add chopped lettuce"},

    // Chicken Tacos
    {recipe_id: 2, step_number: 1, step_instructions: "Heat up tortillas in the oven"},
    {recipe_id: 2, step_number: 2, step_instructions: "Fill the tortillas with seasoned chicken"},
    {recipe_id: 2, step_number: 3, step_instructions: "Add chopped lettuce"},
    {recipe_id: 2, step_number: 4, step_instructions: "Add shredded cheese"},
    {recipe_id: 2, step_number: 5, step_instructions: "Add salsa"},
    {recipe_id: 2, step_number: 6, step_instructions: "Top with avocado"},

    // Grilled Chicken Quesadilla
    {recipe_id: 3, step_number: 1, step_instructions: "Heat up tortillas on a pan"},
    {recipe_id: 3, step_number: 2, step_instructions: "Fill the tortillas with shredded chicken"},
    {recipe_id: 3, step_number: 3, step_instructions: "Add shredded cheese"},
    {recipe_id: 3, step_number: 4, step_instructions: "Cook on a skillet until golden brown"},
    {recipe_id: 3, step_number: 5, step_instructions: "Serve with salsa"},

    // Spaghetti Bolognese
    {recipe_id: 4, step_number: 1, step_instructions: "Put a large saucepan on a medium heat"},
    {recipe_id: 4, step_number: 2, step_instructions: "Mix eggs and ham"}
]

const ingredients = [
    {ingredient_name: "chicken", ingredient_unit: "oz"},
    {ingredient_name: "barbecue sauce", ingredient_unit: "tbs"},
    {ingredient_name: "bun", ingredient_unit: "pieces"},
    {ingredient_name: "tortillas", ingredient_unit: "pieces"},
    {ingredient_name: "lettuce", ingredient_unit: "leaves"},
    {ingredient_name: "cheese", ingredient_unit: "oz"},
    {ingredient_name: "salsa", ingredient_unit: "tbs"},
    {ingredient_name: "avocado", ingredient_unit: "slices"},
    {ingredient_name: "eggs", ingredient_unit: "whole"},
    {ingredient_name: "ham", ingredient_unit: "slices"}
]

const step_ingredients = [
    // BBQ Chicken Sandwich
    {step_id: 1, ingredient_id: 1, quantity: 6},
    {step_id: 2, ingredient_id: 2, quantity: 2},
    {step_id: 3, ingredient_id: 3, quantity: 1},
    {step_id: 4, ingredient_id: 5, quantity: 2},

    // Chicken Tacos
    {step_id: 5, ingredient_id: 4, quantity: 3},
    {step_id: 6, ingredient_id: 1, quantity: 8},
    {step_id: 7, ingredient_id: 5, quantity: 3},
    {step_id: 8, ingredient_id: 6, quantity: 0.75},
    {step_id: 9, ingredient_id: 7, quantity: 2},
    {step_id: 10, ingredient_id: 8, quantity: 4},

    // Grilled Chicken Quesadilla
    {step_id: 11, ingredient_id: 4, quantity: 2},
    {step_id: 12, ingredient_id: 1, quantity: 7},
    {step_id: 13, ingredient_id: 6, quantity: 2},
    {step_id: 15, ingredient_id: 7, quantity: 2},
    
    // Spaghetti Bolognese
    {step_id: 17, ingredient_id: 9, quantity: 2},
    {step_id: 17, ingredient_id: 10, quantity: 1},
]

exports.seed = async function(knex) {
    await knex('recipes').insert(recipes)
    await knex('steps').insert(steps)
    await knex('ingredients').insert(ingredients)
    await knex('step_ingredients').insert(step_ingredients)
};