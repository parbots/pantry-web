import { useState } from 'react';

import type { Ingredient } from 'types/pantry';

import { v4 as uuid } from 'uuid';

export const useIngredients = (
    initialIngredients?: Ingredient[]
): [Ingredient[], Function, Function] => {
    const [ingredients, setIngredients] = useState<Ingredient[]>(
        initialIngredients || []
    );

    // Add an ingredient
    const addIngredient = (newIngredient: Ingredient) => {
        setIngredients([...ingredients, newIngredient]);
    };

    // TODO: Maybe check if name and snippet already exist
    // Create a new ingredient and it to state
    const createIngredient = (
        name: Ingredient['name'],
        snippet: Ingredient['snippet']
    ): Ingredient => {
        // Create new ingredient
        const newIngredient: Ingredient = {
            id: uuid(), // Generate a random id
            name: name,
            snippet: snippet,
        };

        // Add it to state
        addIngredient(newIngredient);

        // Return the new ingredient
        return newIngredient;
    };

    // TODO: Maybe add checking if ingredient exists
    // Remove an ingredient from state
    const removeIngredient = (ingredientToRemove: Ingredient): Ingredient => {
        setIngredients(
            ingredients.filter((ingredient) => {
                return ingredient !== ingredientToRemove;
            })
        );

        // Return removed ingredient
        return ingredientToRemove;
    };

    return [ingredients, createIngredient, removeIngredient];
};