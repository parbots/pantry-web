import styles from './CreateShelfModal.module.css';

import { useState, useRef, ChangeEvent, FormEvent } from 'react';

import * as AlertDialog from '@radix-ui/react-alert-dialog';

type CreateShelfModalProps = {
    createShelf: (name: string) => void;
};

const CreateShelfModal = ({ createShelf }: CreateShelfModalProps) => {
    const [languageInput, setLanguageInput] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const createRef = useRef<HTMLButtonElement>(null);

    const handleLanguageChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        setLanguageInput(event.target.value);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        focusCreate();
    };

    const handleCreate = () => {
        createShelf(languageInput);
        setLanguageInput('');
    };

    const focusCreate = () => {
        if (createRef.current) {
            createRef.current.focus();
        }
    };

    const focusInput = (event: Event) => {
        event.preventDefault();

        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger className={styles.createButton}>
                Create Shelf
            </AlertDialog.Trigger>

            <AlertDialog.Portal>
                <AlertDialog.Overlay className={styles.overlay} />

                <AlertDialog.Content
                    className={styles.content}
                    onOpenAutoFocus={focusInput}
                >
                    <header className={styles.header}>
                        <AlertDialog.Title>Create Shelf</AlertDialog.Title>
                    </header>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <input
                            type='text'
                            value={languageInput}
                            onChange={handleLanguageChange}
                            ref={inputRef}
                            className={styles.languageInput}
                        />
                    </form>

                    <section className={styles.actionSection}>
                        <AlertDialog.Cancel className={styles.cancelButton}>
                            Cancel
                        </AlertDialog.Cancel>
                        <AlertDialog.Action
                            ref={createRef}
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

export default CreateShelfModal;
