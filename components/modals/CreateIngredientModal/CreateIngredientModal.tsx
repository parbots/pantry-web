import styles from './CreateIngredientModal.module.css';

import { useState, ChangeEvent } from 'react';

type CreateIngredientModalProps = {
    create: Function;
    hide: Function;
};

const CreateIngredientModal = ({
    create,
    hide,
}: CreateIngredientModalProps) => {
    const [nameInput, setNameInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const [snippetInput, setSnippetInput] = useState('');

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        setNameInput(event.target.value);
    };

    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        setDescriptionInput(event.target.value);
    };

    const handleSnippetChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        setSnippetInput(event.target.value);
    };

    const handleCreate = () => {
        create(nameInput, descriptionInput, snippetInput);
        hide();
    };

    return (
        <div className={styles.overlay}>
            <section className={styles.modal}>
                <header className={styles.header}>
                    <h3 className={styles.title}>Create New Ingredient</h3>
                </header>
                <input
                    type='text'
                    placeholder='Name'
                    value={nameInput}
                    onChange={handleNameChange}
                    className={styles.nameInput}
                />
                <input
                    type='text'
                    placeholder='Description'
                    value={descriptionInput}
                    onChange={handleDescriptionChange}
                    className={styles.descriptionInput}
                />
                <input
                    type='text'
                    placeholder='Code Snippet'
                    value={snippetInput}
                    onChange={handleSnippetChange}
                    className={styles.snippetInput}
                />
                <section className={styles.buttonSection}>
                    <button
                        onClick={() => hide()}
                        className={styles.cancelButton}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => handleCreate()}
                        className={styles.createButton}
                    >
                        Create
                    </button>
                </section>
            </section>
        </div>
    );
};

export default CreateIngredientModal;
