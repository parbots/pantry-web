import { useState } from 'react';

import type { Ingredient, Shelf } from 'types/pantry';

import { v4 as uuid } from 'uuid';

export const useShelf = (shelfName: string): [Shelf, Function] => {
    const [id] = useState(uuid());
    const [name, setName] = useState(shelfName);
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    const createIngredient = (
        newName: string,
        newSnippet: string
    ): Ingredient => {
        return {
            id: uuid(),
            name: newName,
            snippet: newSnippet,
        };
    };

    const addIngredient = (newName: string, newSnippet: string): Ingredient => {
        const newIngredient = createIngredient(newName, newSnippet);

        setIngredients([...ingredients, newIngredient]);

        return newIngredient;
    };

    const removeIngredient = (removedIngredient: Ingredient): Ingredient => {
        setIngredients(
            ingredients.filter((ingredient) => {
                return ingredient !== removedIngredient;
            })
        );

        return removedIngredient;
    };

    return [
        {
            id: id,
            name: name,
            ingredients: ingredients,
            addIngredient: addIngredient,
            removeIngredient: removeIngredient,
        },
        setName,
    ];
};
