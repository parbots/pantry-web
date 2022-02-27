import { useState } from 'react';

import type { Ingredient, Shelf } from 'types/pantry';

import { v4 as uuid } from 'uuid';

type ShelfHook = (
    initialShelves: Shelf[]
) => [
    shelves: Shelf[],
    createShelf: (name: string, ingredients: Ingredient[]) => Shelf,
    removeShelf: (shelfToRemove: Shelf) => Shelf,
    createIngredient: (
        name: string,
        description: string,
        language: string,
        snippet: string,
        targetShelf: Shelf
    ) => Ingredient,
    removeIngredient: (
        ingredientToRemove: Ingredient,
        targetShelf: Shelf
    ) => Ingredient
];

export const useShelves: ShelfHook = (initialShelves) => {
    const [shelves, setShelves] = useState<Shelf[]>(initialShelves);

    const createShelf = (
        newName: string,
        newIngredients: Ingredient[]
    ): Shelf => {
        return {
            id: uuid(),
            name: newName,
            ingredients: newIngredients,
        };
    };

    const addShelf = (shelfToAdd: Shelf): Shelf => {
        setShelves([...shelves, shelfToAdd]);
        return shelfToAdd;
    };

    const addNewShelf = (
        newName: string,
        newIngredients: Ingredient[]
    ): Shelf => {
        return addShelf(createShelf(newName, newIngredients));
    };

    const removeShelf = (shelfToRemove: Shelf): Shelf => {
        setShelves(
            shelves.filter((shelf) => {
                return shelf !== shelfToRemove;
            })
        );
        return shelfToRemove;
    };

    const createIngredient = (
        newName: string,
        newDescription: string,
        selectedLanguage: string,
        newSnippet: string
    ): Ingredient => {
        return {
            id: uuid(),
            name: newName,
            language: selectedLanguage,
            description: newDescription,
            snippet: newSnippet,
        };
    };

    const addIngredient = (
        ingredientToAdd: Ingredient,
        targetShelf: Shelf
    ): Ingredient => {
        setShelves(
            shelves.map((shelf) => {
                if (shelf === targetShelf) {
                    shelf.ingredients = [...shelf.ingredients, ingredientToAdd];
                }

                return shelf;
            })
        );

        return ingredientToAdd;
    };

    const addNewIngredient = (
        newName: string,
        newDescription: string,
        selectedLanguage: string,
        newSnippet: string,
        targetShelf: Shelf
    ): Ingredient => {
        return addIngredient(
            createIngredient(
                newName,
                newDescription,
                selectedLanguage,
                newSnippet
            ),
            targetShelf
        );
    };

    const removeIngredient = (
        ingredientToRemove: Ingredient,
        targetShelf: Shelf
    ): Ingredient => {
        setShelves(
            shelves.map((shelf) => {
                if (shelf === targetShelf) {
                    shelf.ingredients = shelf.ingredients.filter(
                        (ingredient) => {
                            return ingredient !== ingredientToRemove;
                        }
                    );
                }

                return shelf;
            })
        );

        return ingredientToRemove;
    };

    return [
        shelves,
        addNewShelf,
        removeShelf,
        addNewIngredient,
        removeIngredient,
    ];
};
