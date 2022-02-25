import { createContext, ReactNode, useContext, useState } from 'react';

import type { Ingredient } from 'types/ingredient';

import { v4 as uuid } from 'uuid';

const IngredientContext = createContext({});

type IngredientProviderProps = {
    children: ReactNode;
};

export const IngredientProvider = ({ children }: IngredientProviderProps) => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    // Add an ingredient
    const addIngredient = (ingredient: Ingredient) => {
        setIngredients([...ingredients, ingredient]);
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

    return (
        <IngredientContext.Provider
            value={{ ingredients, addIngredient, removeIngredient }}
        >
            {children}
        </IngredientContext.Provider>
    );
};

export const useIngredients = () => {
    return useContext(IngredientContext);
};
