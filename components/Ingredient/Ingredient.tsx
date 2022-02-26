import styles from './Ingredient.module.css';

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
                <button
                    onClick={() => removeSelf()}
                    className={styles.deleteButton}
                >
                    Delete
                </button>
            </header>
            <p className={styles.description}>{description}</p>
            <p className={styles.snippet}>{snippet}</p>
        </li>
    );
};

export default IngredientItem;
