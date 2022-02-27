import styles from './Ingredient.module.css';

import DeleteModal from 'components/modals/DeleteModal';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

type IngredientProps = {
    name: string;
    description: string;
    language: string;
    snippet: string;
    removeSelf: Function;
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
                    confirm={() => removeSelf()}
                />
            </header>
            <p className={styles.description}>{description}</p>
            <p className={styles.language}>{language}</p>
            <SyntaxHighlighter
                language={language}
                style={dracula}
                wrapLines
                className={styles.snippet}
            >
                {snippet}
            </SyntaxHighlighter>
        </li>
    );
};

export default IngredientItem;
