import styles from './Shelf.module.css';

import type { Ingredient } from 'types/pantry';

import IngredientItem from 'components/Ingredient';

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
    const handleAddIngredient = () => {
        addIngredient('Test Ingredient', 'Descriptio', 'Snippet of code.');
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
        <section>
            <section>
                <h2>{language}</h2>
                <button onClick={() => handleAddIngredient()}>
                    Add Ingredient
                </button>
                <button onClick={() => removeSelf()}>Delete</button>
            </section>
            <ul>{ingredientItems}</ul>
        </section>
    );
};

export default ShelfList;
