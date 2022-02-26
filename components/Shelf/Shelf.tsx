import styles from './Shelf.module.css';

import { useState } from 'react';

import type { Ingredient } from 'types/pantry';

import IngredientItem from 'components/Ingredient';
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
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleAddIngredient = () => {
        addIngredient(
            'Ingredient Name',
            'Description of Ingredient',
            'Ingredient Snippet of Code.'
        );
    };

    const handleRemoveSelf = () => {
        setShowDeleteModal(true);
    };

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
                    onClick={() => handleAddIngredient()}
                    className={styles.addButton}
                >
                    Add Ingredient
                </button>
                <button
                    onClick={() => handleRemoveSelf()}
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
        </section>
    );
};

export default ShelfList;
