import styles from './Panel.module.css';

import type { ReactNode } from 'react';

type PanelProps = {
    children: ReactNode;
};

const Panel = ({ children }: PanelProps) => {
    return <section className={styles.panel}>{children}</section>;
};

export default Panel;
