import styles from 'styles/PantryPage.module.css';

import type { NextPage } from 'next';

import type { Ingredient } from 'types/pantry';
import { useShelves } from 'hooks/shelf';

import AppLayout from 'layouts/AppLayout';
import Panel from 'components/Panel';
import ShelfList from 'components/Shelf';
import CreateShelfModal from 'components/modals/CreateShelfModal';

const ShelvesPage: NextPage = () => {
    const shelves = useShelves([]);

    const shelfListItems = shelves.all.map((shelf) => {
        return (
            <ShelfList
                key={shelf.id}
                name={shelf.name}
                removeSelf={() => shelves.remove(shelf)}
                ingredients={shelf.ingredients}
                addIngredient={(
                    name: string,
                    description: string,
                    language: string,
                    snippet: string
                ) =>
                    shelves.addIngredient(
                        [name, description, language, snippet],
                        shelf
                    )
                }
                removeIngredient={(ingredient: Ingredient) =>
                    shelves.removeIngredient(ingredient, shelf)
                }
            />
        );
    });

    return (
        <AppLayout>
            <Panel>
                <header className={styles.header}>
                    <h1 className={styles.title}>Shelves</h1>
                    <CreateShelfModal createShelf={shelves.add} />
                </header>
                <ul className={styles.shelvesList}>{shelfListItems}</ul>
            </Panel>
        </AppLayout>
    );
};

export default ShelvesPage;
