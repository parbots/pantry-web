import styles from './Ingredient.module.css';

import { useState } from 'react';

import DeleteModal from 'components/modals/DeleteModal';

type IngredientProps = {
    name: string;
    description: string;
    snippet: string;
    removeSelf: Function;
};

const IngredientItem = ({
    name,
    description,
    snippet,
    removeSelf,
}: IngredientProps) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    return (
        <li className={styles.ingredient}>
            <header className={styles.header}>
                <h3 className={styles.title}>{name}</h3>
                <button
                    onClick={() => setShowDeleteModal(true)}
                    className={styles.deleteButton}
                >
                    Delete
                </button>
            </header>
            <p className={styles.description}>{description}</p>
            <p className={styles.snippet}>{snippet}</p>
            {showDeleteModal && (
                <DeleteModal
                    cancel={() => setShowDeleteModal(false)}
                    confirm={() => removeSelf()}
                />
            )}
        </li>
    );
};

export default IngredientItem;
