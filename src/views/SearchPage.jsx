import React, { useEffect, useState } from 'react';
import { searchItem, searchSales } from '../API';
import Layout from '../components/layout';
import ResultSearch from '../components/resultSearch';
import { Input } from '../components/styleDefinition/buttons_inputs';

const SearchPage = () => {
    const [search, setSearch] = useState(null)
    const [dataSales, setDataSales] = useState('')
    const [dataItems, setDataItems] = useState('')

    useEffect(() => {
        if (search) {
            getSearch()
        }
    }, [search]);

    const getSearch = () => {
        searchSales(search).then((res) => setDataSales(res.data))
        searchItem(search).then((res) => setDataItems(res.data))
    }

    return (
        <Layout>
            <h1>Rechercher une vente ou un lot</h1>
            <div>
                <Input
                    type="text"
                    placeholder='ex: Hermès Sac en cuir noir...'
                    onChange={(e) => setSearch(e.target.value)} />
            </div>
            <ResultSearch dataSales={dataSales} dataItems={dataItems} />
        </Layout>
    );
};

export default SearchPage;