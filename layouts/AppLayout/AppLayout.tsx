import styles from './AppLayout.module.css';

import type { ReactNode } from 'react';

import Sidebar from 'components/Sidebar';

type LayoutProps = {
    children: ReactNode;
};

const AppLayout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.page}>
            <Sidebar />
            <main className={styles.content}>{children}</main>
        </div>
    );
};

export default AppLayout;
