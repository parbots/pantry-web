import styles from './DeleteModal.module.css';

import * as AlertDialog from '@radix-ui/react-alert-dialog';

type DeleteModalProps = {
    title: string;
    description: string;
    confirm: Function;
};

const DeleteModal = ({ title, description, confirm }: DeleteModalProps) => {
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger className={styles.deleteButton}>
                Delete
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
                <AlertDialog.Overlay className={styles.overlay} />
                <AlertDialog.Content className={styles.content}>
                    <header className={styles.header}>
                        <AlertDialog.Title>{title}</AlertDialog.Title>
                    </header>

                    <section className={styles.description}>
                        <AlertDialog.Description>
                            {description}
                        </AlertDialog.Description>
                    </section>

                    <section className={styles.actionSection}>
                        <AlertDialog.Cancel className={styles.cancelButton}>
                            Cancel
                        </AlertDialog.Cancel>

                        <AlertDialog.Action
                            onClick={() => confirm()}
                            className={styles.deleteButton}
                        >
                            Delete
                        </AlertDialog.Action>
                    </section>
                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    );
};

export default DeleteModal;
