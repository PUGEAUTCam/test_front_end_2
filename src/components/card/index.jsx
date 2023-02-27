import React from 'react';
import { Img, TextContainer, CardStyle } from '../itemsCards/style';

const Card = ({ index, item }) => {
    return (
        <CardStyle>
            <Img>
                <img src="./galle_vase.jpeg" alt="Exemple d'objets mis aux enchères pour illustrer le lot" />
            </Img>
            <TextContainer>
                <p><strong>Lot {index + 1}</strong></p>
                <p>{item.description}</p>
            </TextContainer>
        </CardStyle>
    );
};

export default Card;