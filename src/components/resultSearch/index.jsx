import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Card, CardsContainer, Img, TextContainer } from '../itemCard/style';
import { DescriptionSale, TitleSale } from '../saleBanner/style';

const ResultSearch = ({ dataSales, dataItems }) => {


    return (
        <Tabs>
            <TabList>
                <Tab>Ventes</Tab>
                <Tab>Lots</Tab>
            </TabList>

            <TabPanel>
                {dataSales?.length > 0 && dataSales?.map((sale, index) =>
                    <div key={index}>
                        <TitleSale>{sale.title}</TitleSale>
                        <DescriptionSale>{sale.description}</DescriptionSale>
                    </div>
                )}
                {!dataSales?.length ? <p>Aucune vente trouvée</p> : null}
            </TabPanel>

            <TabPanel>
                <CardsContainer>
                    {dataItems?.length > 0 && dataItems?.map((item, index) =>
                        <Card key={index}>
                            <Img>
                                <img src="./galle_vase.jpeg" alt="Exemple d'objets mis aux enchères pour illustrer le lot" />
                            </Img>
                            <TextContainer>
                                <p>{item.description}</p>
                            </TextContainer>
                        </Card>
                    )}
                    {!dataItems?.length ? <p>Aucun lot trouvé</p> : null}
                </CardsContainer>
            </TabPanel>

        </Tabs>
    );
};

export default ResultSearch;