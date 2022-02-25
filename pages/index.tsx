import styles from 'styles/HomePage.module.css';

import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

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

            <h2>
                <Link href='/shelves'>
                    <a>Pantry</a>
                </Link>
            </h2>
        </div>
    );
};

export default HomePage;
