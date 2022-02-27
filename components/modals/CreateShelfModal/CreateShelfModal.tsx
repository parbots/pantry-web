import styles from './CreateShelfModal.module.css';
import { useState, useRef, useEffect, ChangeEvent, FormEvent } from 'react';

type CreateShelfModalProps = {
    createShelf: Function;
    cancel: Function;
};

const CreateShelfModal = ({ createShelf, cancel }: CreateShelfModalProps) => {
    const [languageInput, setLanguageInput] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleLanguageChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        setLanguageInput(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        createShelf(languageInput, []);
        cancel();
    };

    const handleCreate = () => {
        createShelf(languageInput, []);
        cancel();
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div className={styles.overlay}>
            <section className={styles.modal}>
                <header className={styles.header}>
                    <h3 className={styles.title}>Create New Shelf</h3>
                </header>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={languageInput}
                        onChange={handleLanguageChange}
                        ref={inputRef}
                        className={styles.languageInput}
                    />
                </form>
                <section className={styles.buttonSection}>
                    <button
                        onClick={() => cancel()}
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

export default CreateShelfModal;
