import styles from './Shelf.module.css';

import { useState } from 'react';

import type { Ingredient } from 'types/pantry';

import IngredientItem from 'components/Ingredient';
import CreateIngredientModal from 'components/modals/CreateIngredientModal';
import DeleteShelfModal from 'components/modals/DeleteModal';

type ShelfListProps = {
    language: string;
    removeSelf: Function;
    ingredients: Ingredient[];
    addIngredient: Function;
    removeIngredient: Function;
};

const ShelfList = ({
    language,
    removeSelf,
    ingredients,
    addIngredient,
    removeIngredient,
}: ShelfListProps) => {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const ingredientItems = ingredients.map((ingredient) => {
        return (
            <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                description={ingredient.description}
                snippet={ingredient.snippet}
                removeSelf={() => removeIngredient(ingredient)}
            />
        );
    });

    return (
        <section className={styles.shelf}>
            <header className={styles.header}>
                <h2 className={styles.title}>{language}</h2>
                <button
                    onClick={() => setShowCreateModal(true)}
                    className={styles.addButton}
                >
                    Add Ingredient
                </button>
                <button
                    onClick={() => setShowDeleteModal(true)}
                    className={styles.deleteButton}
                >
                    Delete
                </button>
            </header>
            <ul className={styles.ingredientsList}>{ingredientItems}</ul>
            {showDeleteModal && (
                <DeleteShelfModal
                    cancel={() => setShowDeleteModal(false)}
                    confirm={removeSelf}
                />
            )}
            {showCreateModal && (
                <CreateIngredientModal
                    create={addIngredient}
                    hide={() => setShowCreateModal(false)}
                />
            )}
        </section>
    );
};

export default ShelfList;
