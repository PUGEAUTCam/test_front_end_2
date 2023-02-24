import React from 'react';
import Header from '../header';
import { ContainerGeneral } from './style';

const Layout = (props) => {
    return (
        <div>
            <Header />
            <ContainerGeneral>
                {props.children}
            </ContainerGeneral>
        </div>
    );
};

export default Layout;