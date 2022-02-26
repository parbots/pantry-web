import styles from './CreateShelfModal.module.css';
import { ChangeEvent, useState } from 'react';

type CreateShelfModalProps = {
    createShelf: Function;
    cancel: Function;
};

const CreateShelfModal = ({ createShelf, cancel }: CreateShelfModalProps) => {
    const [languageInput, setLanguageInput] = useState('');

    const handleLanguageChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        setLanguageInput(event.target.value);
    };

    const handleCreate = () => {
        createShelf(languageInput, []);
        cancel();
    };

    return (
        <div className={styles.overlay}>
            <section className={styles.modal}>
                <header className={styles.header}>
                    <h3 className={styles.title}>Create New Shelf</h3>
                </header>
                <input
                    type='text'
                    value={languageInput}
                    onChange={handleLanguageChange}
                    className={styles.languageInput}
                />
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
