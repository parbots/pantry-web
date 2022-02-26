import { useEffect, useState } from 'react';

import type { Ingredient, Shelf } from 'types/pantry';

import { v4 as uuid } from 'uuid';

export const useShelves = (initialShelves: Shelf[]): [Shelf[], {}] => {
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

    const addShelf = (addedShelf: Shelf): Shelf => {
        setShelves([...shelves, addedShelf]);
        return addedShelf;
    };

    const addNewShelf = (
        newName: string,
        newIngredients: Ingredient[]
    ): Shelf => {
        return addShelf(createShelf(newName, newIngredients));
    };

    const removeShelf = (removedShelf: Shelf): Shelf => {
        setShelves(
            shelves.filter((shelf) => {
                return shelf !== removedShelf;
            })
        );
        return removedShelf;
    };

    return [
        shelves,
        {
            createShelf,
            addShelf,
            addNewShelf,
            removeShelf,
        },
    ];
};
