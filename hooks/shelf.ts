import { useState } from 'react';

import type { Ingredient, Shelf } from 'types/pantry';

import { v4 as uuid } from 'uuid';

type ShelfHook = (initialShelves: Shelf[]) => {
    all: Shelf[];
    add: (shelfToAdd: string | Shelf) => Shelf;
    remove: (shelfToRemove: Shelf) => Shelf;
    addIngredient: (
        ingredientToAdd:
            | [
                  newName: string,
                  newDescription: string,
                  selectedLanguage: string,
                  newSnippet: string
              ]
            | Ingredient,
        targetShelf: Shelf
    ) => Ingredient;
    removeIngredient: (
        ingredientToRemove: Ingredient,
        targetShelf: Shelf
    ) => Ingredient;
};

export const useShelves: ShelfHook = (initialShelves) => {
    const [shelves, setShelves] = useState<Shelf[]>(initialShelves);

    const createShelf = (newName: string): Shelf => {
        return {
            id: uuid(),
            name: newName,
            ingredients: [],
        };
    };

    const addShelf = (shelfToAdd: string | Shelf): Shelf => {
        if (typeof shelfToAdd === 'string') {
            const createdShelf = createShelf(shelfToAdd);

            setShelves([...shelves, createdShelf]);

            return createdShelf;
        }

        setShelves([...shelves, shelfToAdd]);

        return shelfToAdd;
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
        ingredientToAdd:
            | [
                  newName: string,
                  newDescription: string,
                  selectedLanguage: string,
                  newSnippet: string
              ]
            | Ingredient,
        targetShelf: Shelf
    ): Ingredient => {
        if (Array.isArray(ingredientToAdd)) {
            const createdIngredient = createIngredient(...ingredientToAdd);

            setShelves(
                shelves.map((shelf) => {
                    if (shelf === targetShelf) {
                        shelf.ingredients = [
                            ...shelf.ingredients,
                            createdIngredient,
                        ];
                    }

                    return shelf;
                })
            );

            return createdIngredient;
        }

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

    return {
        all: shelves,
        add: addShelf,
        remove: removeShelf,
        addIngredient: addIngredient,
        removeIngredient: removeIngredient,
    };
};
