import React, { useEffect, useState } from 'react';
import { getAllSales } from '../API';
import ItemsCards from '../components/itemsCards';
import { SectionHomePage } from '../components/itemsCards/style';
import Layout from '../components/layout';
import SaleBanner from '../components/saleBanner';

const HomePage = () => {
    const [data, setData] = useState()

    useEffect(() => {
        getAllSales().then((res) => setData(res.data));
    }, [])

    return (
        <Layout>
            <h1 style={{ textAlign: "center" }}>Nos ventes en cours</h1>
            {
                data?.map((sale, index) =>
                    <SectionHomePage key={index}>
                        <SaleBanner title={sale.title} description={sale.description} />
                        <ItemsCards items={sale.items} />
                    </SectionHomePage>
                )
            }
        </Layout>
    );
};

export default HomePage;