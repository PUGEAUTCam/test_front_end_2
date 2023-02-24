import React, { useEffect, useState } from 'react';
import { getAllSales } from '../API';
import ItemCard from '../components/itemCard';
import { SectionHomePage } from '../components/itemCard/style';
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
                        <ItemCard items={sale.items} />
                    </SectionHomePage>
                )
            }
        </Layout>
    );
};

export default HomePage;