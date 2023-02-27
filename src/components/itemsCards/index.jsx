import React from 'react';
import Card from '../card';
import { CardsContainer } from './style';

const ItemsCards = ({ items }) => {

    return (
        <CardsContainer>
            {
                items && items.map((item, index) =>
                    <Card
                        key={index}
                        index={index}
                        item={item}
                    />
                )
            }
        </CardsContainer>
    );
};

export default ItemsCards;