import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ItemsCards from '../itemsCards';
import SaleBanner from '../saleBanner';

const ResultsSearch = ({ dataSales, dataItems }) => {

    return (
        <Tabs>
            <TabList>
                <Tab>Ventes</Tab>
                <Tab>Lots</Tab>
            </TabList>

            <TabPanel>
                {
                    dataSales && dataSales?.map((sale, index) =>
                        <SaleBanner
                            key={index}
                            title={sale.title}
                            description={sale.description}
                        />
                    )
                }
                {!dataSales?.length ? <p>Aucune vente trouvée</p> : null}
            </TabPanel>

            <TabPanel>
                <ItemsCards items={dataItems} />
                {!dataItems?.length ? <p>Aucun lot trouvé</p> : null}
            </TabPanel>

        </Tabs>
    );
};

export default ResultsSearch;