import styles from './Sidebar.module.css';

import Link from 'next/link';

const Sidebar = () => {
    const links = [
        {
            name: 'Dashboard',
            href: '/dashboard',
        },
        {
            name: 'Ingredients',
            href: '/ingredients',
        },
    ];

    const linkItems = links.map((link) => {
        return (
            <li key={link.name} className={styles.linkItem}>
                <Link href={link.href}>
                    <a className={styles.link}>{link.name}</a>
                </Link>
            </li>
        );
    });

    return (
        <header className={styles.sidebar}>
            <h2 className={styles.title}>Pantry</h2>
            <ul className={styles.linkList}>{linkItems}</ul>
            <p className={styles.copyright}>© Parker Botsford</p>
        </header>
    );
};

export default Sidebar;
