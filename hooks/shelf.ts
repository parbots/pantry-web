import { useState } from 'react';

import type { Ingredient, Shelf } from 'types/pantry';

import { v4 as uuid } from 'uuid';

type ShelfHook = (
    initialShelves: Shelf[]
) => [
    shelves: Shelf[],
    createShelf: (language: string, ingredients: Ingredient[]) => Shelf,
    removeShelf: (shelfToRemove: Shelf) => Shelf,
    createIngredient: (
        name: string,
        description: string,
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
        newLanguage: string,
        newIngredients: Ingredient[]
    ): Shelf => {
        return {
            id: uuid(),
            language: newLanguage,
            ingredients: newIngredients,
        };
    };

    const addShelf = (addedShelf: Shelf): Shelf => {
        setShelves([...shelves, addedShelf]);
        return addedShelf;
    };

    const addNewShelf = (
        newLanguage: string,
        newIngredients: Ingredient[]
    ): Shelf => {
        return addShelf(createShelf(newLanguage, newIngredients));
    };

    const removeShelf = (removedShelf: Shelf): Shelf => {
        setShelves(
            shelves.filter((shelf) => {
                return shelf !== removedShelf;
            })
        );
        return removedShelf;
    };

    const createIngredient = (
        newName: string,
        newDescription: string,
        newSnippet: string
    ): Ingredient => {
        return {
            id: uuid(),
            name: newName,
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
        newSnippet: string,
        targetShelf: Shelf
    ): Ingredient => {
        return addIngredient(
            createIngredient(newName, newDescription, newSnippet),
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