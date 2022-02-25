import styles from 'styles/IngredientsPage.module.css';

import { NextPage } from 'next';

import AppLayout from 'layouts/AppLayout';
import Panel from '../components/Panel/Panel';

import { useIngredients } from 'hooks/ingredients';

const IngredientsPage: NextPage = () => {
    const [ingredients, createIngredient, removeIngredient] = useIngredients();

    return (
        <AppLayout>
            <Panel>
                <h1>Ingredients</h1>
                <button
                    onClick={() =>
                        createIngredient('New Ingredient', 'Ingredient Snippet')
                    }
                >
                    Add
                </button>
                <ul>
                    {ingredients.map((ingredient) => {
                        return (
                            <li key={ingredient.id}>
                                <h3>{ingredient.name}</h3>
                                <p>{ingredient.snippet}</p>
                                <button
                                    onClick={() => removeIngredient(ingredient)}
                                >
                                    Remove
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </Panel>
        </AppLayout>
    );
};

export default IngredientsPage;
