import styles from './CreateIngredientModal.module.css';

import { useState, ChangeEvent, useRef, FormEvent } from 'react';

import * as AlertDialog from '@radix-ui/react-alert-dialog';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const languages = ['javascript', 'html', 'css'];

type CreateIngredientModalProps = {
    create: Function;
};

const CreateIngredientModal = ({ create }: CreateIngredientModalProps) => {
    const [nameInput, setNameInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const [languageInput, setLanguageInput] = useState('Select language');
    const [snippetInput, setSnippetInput] = useState('');

    const nameInputRef = useRef<HTMLInputElement>(null);
    const createButtonRef = useRef<HTMLButtonElement>(null);

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        setNameInput(event.target.value);
    };

    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        setDescriptionInput(event.target.value);
    };

    const handleLanguageChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        setLanguageInput(event.target.value);
    };

    const handleSnippetChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        event.preventDefault();

        setSnippetInput(event.target.value);
    };

    const focusNameInput = (event: Event) => {
        event.preventDefault();

        if (nameInputRef.current) {
            nameInputRef.current.focus();
        }
    };

    const focusCreateButton = () => {
        if (createButtonRef.current) {
            createButtonRef.current.focus();
        }
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        focusCreateButton();
    };

    const handleCreate = () => {
        create(nameInput, descriptionInput, languageInput, snippetInput);
        setNameInput('');
        setDescriptionInput('');
        setLanguageInput('');
        setSnippetInput('');
    };

    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger className={styles.triggerButton}>
                Create Ingredient
            </AlertDialog.Trigger>

            <AlertDialog.Portal>
                <AlertDialog.Overlay className={styles.overlay} />

                <AlertDialog.Content
                    className={styles.content}
                    onOpenAutoFocus={focusNameInput}
                >
                    <header className={styles.header}>
                        <AlertDialog.Title>Create Ingredient</AlertDialog.Title>
                    </header>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <section className={styles.formLeft}>
                            <input
                                type='text'
                                placeholder='Name'
                                ref={nameInputRef}
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
                        </section>
                        <section className={styles.formRight}>
                            {/* <input
                                type='text'
                                placeholder='Language'
                                value={languageInput}
                                onChange={handleLanguageChange}
                                className={styles.languageInput}
                            /> */}
                            <DropdownMenu.Root>
                                <DropdownMenu.Trigger
                                    className={styles.dropdownTrigger}
                                >
                                    {languageInput}
                                </DropdownMenu.Trigger>

                                <DropdownMenu.Content
                                    className={styles.dropdown}
                                >
                                    {languages.map((language) => {
                                        return (
                                            <DropdownMenu.Item
                                                key={language}
                                                onClick={() =>
                                                    setLanguageInput(language)
                                                }
                                                className={styles.dropdownItem}
                                            >
                                                {language}
                                            </DropdownMenu.Item>
                                        );
                                    })}
                                </DropdownMenu.Content>
                            </DropdownMenu.Root>

                            <textarea
                                placeholder='Code Snippet'
                                value={snippetInput}
                                onChange={handleSnippetChange}
                                className={styles.snippetInput}
                            />
                        </section>
                    </form>
                    <section className={styles.actionSection}>
                        <AlertDialog.Cancel className={styles.cancelButton}>
                            Cancel
                        </AlertDialog.Cancel>
                        <AlertDialog.Action
                            ref={createButtonRef}
                            onClick={() => handleCreate()}
                            className={styles.createButton}
                        >
                            Create
                        </AlertDialog.Action>
                    </section>
                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    );
};

export default CreateIngredientModal;
