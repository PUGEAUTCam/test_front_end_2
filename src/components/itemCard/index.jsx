import React from 'react';
import { Card, Img, TextContainer, CardsContainer } from './style';

const ItemCard = ({ items }) => {

    return (
        <CardsContainer>
            {
                items.map((item, index) =>
                    <Card key={index}>
                        <Img>
                            <img src="./galle_vase.jpeg" alt="Exemple d'objets mis aux enchères pour illustrer le lot" />
                        </Img>

                        <TextContainer>
                            <p><strong>Lot {index + 1}</strong></p>
                            <p>{item.description}</p>
                        </TextContainer>
                    </Card>
                )
            }
        </CardsContainer>
    );
};

export default ItemCard;