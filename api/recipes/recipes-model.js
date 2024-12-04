const db = require('../../data/db-config')


async function getRecipeById(recipe_id) {
    const rawRecipeData = await db('recipes as r')
        .join('steps as s', 'r.recipe_id', 's.recipe_id')
        .leftJoin('step_ingredients as si', 's.step_id', 'si.step_id')
        .leftJoin('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
        .select(
            'r.recipe_id',
            'r.recipe_name',
            's.step_id',
            's.step_number',
            's.step_instructions',
            'i.ingredient_id',
            'i.ingredient_name',
            'si.quantity'
        )
        .where('r.recipe_id', recipe_id)
        .orderBy(['s.step_number', 'i.ingredient_name'])

    const recipe = {
        recipe_id: rawRecipeData[0].recipe_id,
        recipe_name: rawRecipeData[0].recipe_name,
        steps: []
    }

    rawRecipeData.forEach(row => {
        let step = recipe.steps.find( step => step.step_id === row.step_id )

        if (!step) {
            step = {
                step_id: row.step_id,
                step_number: row.step_number,
                step_instructions: row.step_instructions,
                ingredients: [],
            }
            recipe.steps.push(step)
        }
        
        if (row.ingredient_id) {
            step.ingredients.push({
                ingredient_id: row.ingredient_id,
                ingredient_name: row.ingredient_name,
                quantity: row.quantity,
                ingredient_unit: row.ingredient_unit,
            });
        }
    })
    return recipe;
    
}

module.exports = { getRecipeById }
