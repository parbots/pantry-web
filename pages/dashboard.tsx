import styles from 'styles/DashboardPage.module.css';

import type { NextPage } from 'next';

import AppLayout from 'layouts/AppLayout';
import Panel from 'components/Panel';

const DashboardPage: NextPage = () => {
    return (
        <AppLayout>
            <Panel>
                <h1>Dashboard</h1>
            </Panel>
        </AppLayout>
    );
};

export default DashboardPage;
