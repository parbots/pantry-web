import styles from 'styles/DashboardPage.module.css';

import type { NextPage } from 'next';

import Sidebar from 'components/Sidebar';

const DashboardPage: NextPage = () => {
    return (
        <div className={styles.page}>
            <Sidebar />
            <main className={styles.mainContainer}>
                <h1>Dashboard</h1>
            </main>
        </div>
    );
};

export default DashboardPage;
