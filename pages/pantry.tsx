import styles from 'styles/ShelvesPage.module.css';

import type { NextPage } from 'next';

import { useState } from 'react';

import type { Ingredient } from 'types/pantry';
import { useShelves } from 'hooks/shelf';

import AppLayout from 'layouts/AppLayout';
import Panel from 'components/Panel';
import ShelfList from 'components/Shelf';
import CreateShelfModal from 'components/modals/CreateShelfModal';

const ShelvesPage: NextPage = () => {
    const [shelves, createShelf, removeShelf, addIngredient, removeIngredient] =
        useShelves([]);

    const shelfListItems = shelves.map((shelf) => {
        return (
            <ShelfList
                key={shelf.id}
                name={shelf.name}
                removeSelf={() => removeShelf(shelf)}
                ingredients={shelf.ingredients}
                addIngredient={(
                    name: string,
                    description: string,
                    language: string,
                    snippet: string
                ) => addIngredient(name, description, language, snippet, shelf)}
                removeIngredient={(ingredient: Ingredient) =>
                    removeIngredient(ingredient, shelf)
                }
            />
        );
    });

    return (
        <AppLayout>
            <Panel>
                <header className={styles.header}>
                    <h1 className={styles.title}>Shelves</h1>
                    <CreateShelfModal
                        confirm={(name: string) => createShelf(name, [])}
                    />
                </header>
                <ul className={styles.shelvesList}>{shelfListItems}</ul>
            </Panel>
        </AppLayout>
    );
};

export default ShelvesPage;