import styles from './DeleteModal.module.css';

type DeleteModalProps = {
    cancel: Function;
    confirm: Function;
};

const DeleteModal = ({ cancel, confirm }: DeleteModalProps) => {
    return (
        <div className={styles.overlay}>
            <section className={styles.modal}>
                <header className={styles.header}>
                    <h3>Are you sure?</h3>
                </header>
                <section className={styles.buttonSection}>
                    <button
                        onClick={() => cancel()}
                        className={styles.cancelButton}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => confirm()}
                        className={styles.deleteButton}
                    >
                        Delete
                    </button>
                </section>
            </section>
        </div>
    );
};

export default DeleteModal;
