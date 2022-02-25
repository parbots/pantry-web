import type { NextPage } from 'next';

import AppLayout from 'layouts/AppLayout';
import Panel from 'components/Panel';

const ShelvesPage: NextPage = () => {
    return (
        <AppLayout>
            <Panel>
                <h1>Shelves</h1>
            </Panel>
        </AppLayout>
    );
};

export default ShelvesPage;
