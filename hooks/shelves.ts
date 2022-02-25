import { useState } from 'react';

import type { Shelf } from 'types/pantry';
import { useIngredients } from './ingredients';

import { v4 as uuid } from 'uuid';

export const useShelf = (name: string): [Shelf, Function, Function] => {
    const [ingredients, createIngredient, removeIngredient] = useIngredients(
        []
    );
    const [shelfName] = useState(name);
    const [shelfID] = useState(uuid());

    return [
        {
            id: shelfID,
            name: shelfName,
            ingredients: ingredients,
        },
        createIngredient,
        removeIngredient,
    ];
};
