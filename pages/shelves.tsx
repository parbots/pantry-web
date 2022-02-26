import styles from 'styles/ShelvesPage.module.css';

import type { NextPage } from 'next';

import type { Ingredient, Shelf } from 'types/pantry';
import { useShelves } from 'hooks/shelf';

import AppLayout from 'layouts/AppLayout';
import Panel from 'components/Panel';
import ShelfList from 'components/Shelf';

const ShelvesPage: NextPage = () => {
    const [shelves, createShelf, removeShelf, addIngredient, removeIngredient] =
        useShelves([]);

    const handleCreateShelf = () => {
        createShelf('Test Shelf', []);
    };

    const shelfListItems = shelves.map((shelf) => {
        return (
            <ShelfList
                key={shelf.id}
                language={shelf.language}
                removeSelf={() => removeShelf(shelf)}
                ingredients={shelf.ingredients}
                addIngredient={(
                    name: string,
                    description: string,
                    snippet: string
                ) => addIngredient(name, description, snippet, shelf)}
                removeIngredient={(ingredient: Ingredient) =>
                    removeIngredient(ingredient, shelf)
                }
            />
        );
    });

    return (
        <AppLayout>
            <Panel>
                <section>
                    <h1>Shelves</h1>
                    <button onClick={() => handleCreateShelf()}>
                        Create Shelf
                    </button>
                </section>
                <section>
                    <ul>{shelfListItems}</ul>
                </section>
            </Panel>
        </AppLayout>
    );
};

export default ShelvesPage;
