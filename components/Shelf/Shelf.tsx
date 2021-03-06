import styles from './Shelf.module.css';

import type { Ingredient } from 'types/pantry';

import IngredientItem from 'components/Ingredient';
import CreateIngredientModal from 'components/modals/CreateIngredientModal';
import DeleteModal from 'components/modals/DeleteModal';

type Props = {
    name: string;
    removeSelf: () => void;
    ingredients: Ingredient[];
    addIngredient: (
        name: string,
        description: string,
        language: string,
        snippet: string
    ) => void;
    removeIngredient: (ingredientToRemove: Ingredient) => void;
};

const ShelfList = ({
    name,
    removeSelf,
    ingredients,
    addIngredient,
    removeIngredient,
}: Props) => {
    const ingredientItems = ingredients.map((ingredient) => {
        return (
            <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                description={ingredient.description}
                language={ingredient.language}
                snippet={ingredient.snippet}
                removeSelf={() => removeIngredient(ingredient)}
            />
        );
    });

    return (
        <section className={styles.shelf}>
            <header className={styles.header}>
                <h2 className={styles.title}>{name}</h2>
                <CreateIngredientModal createIngredient={addIngredient} />
                <DeleteModal
                    title='Delete Shelf'
                    description={`Are you sure you want to delete ${name}?`}
                    deleteFunction={removeSelf}
                />
            </header>
            <ul className={styles.ingredientsList}>{ingredientItems}</ul>
        </section>
    );
};

export default ShelfList;
