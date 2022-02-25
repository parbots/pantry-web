import { useState } from 'react';

import type { Ingredient, Shelf } from 'types/pantry';

import { v4 as uuid } from 'uuid';

export const useShelves = (
    initialShelves?: Shelf[]
): [Shelf[], Function, Function] => {
    const [shelves, setShelves] = useState<Shelf[]>(initialShelves || []);

    const addShelf = (newShelf: Shelf) => {
        setShelves([...shelves, newShelf]);

        return newShelf;
    };

    const createShelf = (
        name: Shelf['name'],
        ingredients: [Ingredient[], Function, Function]
    ) => {
        return addShelf({
            id: uuid(),
            name: name,
            ingredients: [], // TODO: Implement this
        });
    };

    const removeShelf = (shelfToRemove: Shelf) => {
        setShelves(
            shelves.filter((shelf) => {
                return shelf !== shelfToRemove;
            })
        );

        return shelfToRemove;
    };

    return [shelves, createShelf, removeShelf];
};
