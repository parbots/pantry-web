import styles from 'styles/IngredientsPage.module.css';

import { NextPage } from 'next';

import AppLayout from 'layouts/AppLayout';
import Panel from '../components/Panel/Panel';

const IngredientsPage: NextPage = () => {
    return (
        <AppLayout>
            <Panel>
                <h1>Ingredients</h1>
            </Panel>
        </AppLayout>
    );
};

export default IngredientsPage;
