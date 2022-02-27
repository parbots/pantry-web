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

            <header className={styles.header}>
                <h2 className={styles.title}>Pantry</h2>
                <nav className={styles.nav}>
                    <Link href='/pantry'>
                        <a>View Pantry</a>
                    </Link>
                </nav>
            </header>
            <main className={styles.main}>
                <section className={styles.hero}>
                    <section className={styles.heroLeft}>
                        <h1 className={styles.heroTitle}>
                            {`All your ingredients,`}
                            <br />
                            {`in one place.`}
                        </h1>
                    </section>
                    <section className={styles.heroRight}></section>
                </section>
            </main>
            <footer className={styles.footer}>
                <p className={styles.copyright}>© Parker Botsford</p>
            </footer>
        </div>
    );
};

export default HomePage;
