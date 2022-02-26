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
        <li>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{snippet}</p>
            <button onClick={() => removeSelf()}>Delete</button>
        </li>
    );
};

export default IngredientItem;
