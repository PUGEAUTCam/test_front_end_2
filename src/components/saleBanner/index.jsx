import React from 'react';
import { DescriptionSale, TitleSale } from './style';

const SaleBanner = ({ title, description }) => {

    return (
        <div style={{ marginBottom: 47 }}>
            <TitleSale>{title}</TitleSale>
            <DescriptionSale>{description}</DescriptionSale>
        </div>
    );
};
export default SaleBanner;