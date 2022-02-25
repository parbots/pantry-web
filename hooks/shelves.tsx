import { createContext, useContext, useState } from 'react';

import type { Ingredient, Shelf } from 'types/pantry';

import { v4 as uuid } from 'uuid';
import type { ReactNode } from 'react';

const ShelfContext = createContext<[Shelf[], Function, Function] | undefined>(
    undefined
);

type ShelfProviderProps = {
    children: ReactNode;
};

export const ShelfProvider = ({ children }: ShelfProviderProps) => {
    const [shelves, setShelves] = useState<Shelf[]>([]);

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
            ingredients: ingredients,
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

    return (
        <ShelfContext.Provider value={[shelves, createShelf, removeShelf]}>
            {children}
        </ShelfContext.Provider>
    );
};

export const useShelf = () => {
    return useContext(ShelfContext);
};
