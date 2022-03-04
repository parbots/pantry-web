import styles from './Ingredient.module.css';

import DeleteModal from 'components/modals/DeleteModal';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

type IngredientProps = {
    name: string;
    description: string;
    language: string;
    snippet: string;
    removeSelf: () => void;
};

const IngredientItem = ({
    name,
    description,
    language,
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
                    deleteFunction={() => removeSelf()}
                />
            </header>
            <p className={styles.description}>{description}</p>
            <SyntaxHighlighter
                language={language}
                style={nord}
                wrapLines
                className={styles.snippet}
            >
                {snippet}
            </SyntaxHighlighter>
        </li>
    );
};

export default IngredientItem;
