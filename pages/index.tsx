import styles from 'styles/HomePage.module.css';

import type { NextPage } from 'next';
import Head from 'next/head';

const HomePage: NextPage = () => {
    return (
        <div className={styles.page}>
            <Head>
                <title>Pantry</title>
                <meta
                    name='description'
                    content='All your developer ingredients, in one place.'
                />
            </Head>

            <h1>Pantry</h1>
        </div>
    );
};

export default HomePage;
