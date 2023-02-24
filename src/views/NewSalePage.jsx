import React from 'react';
import CreateNewSale from '../components/createNewSale';
import Layout from '../components/layout';

const NewSalePage = () => {
    return (
        <Layout>
            <h1>Créer une nouvelle vente</h1>
            <CreateNewSale />
        </Layout>
    );
};

export default NewSalePage;