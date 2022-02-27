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
    return (
        <li className={styles.ingredient}>
            <header className={styles.header}>
                <h3 className={styles.title}>{name}</h3>
                <DeleteModal
                    title='Delete Ingredient'
                    description={`Are you sure you want to delete ${name}?`}
                    confirm={() => removeSelf()}
                />
            </header>
            <p className={styles.description}>{description}</p>
            <p className={styles.snippet}>{snippet}</p>
        </li>
    );
};

export default IngredientItem;
