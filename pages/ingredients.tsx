import styles from 'styles/IngredientsPage.module.css';

import { NextPage } from 'next';

import Sidebar from 'components/Sidebar';

const IngredientsPage: NextPage = () => {
    return (
        <div className={styles.page}>
            <Sidebar />
            <main className={styles.mainContainer}>
                <h1>Ingredients</h1>
            </main>
        </div>
    );
};

export default IngredientsPage;
