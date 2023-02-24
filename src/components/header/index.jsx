import React from 'react';
import { Link } from 'react-router-dom';
import colors from '../styleDefinition/colors';
import { LayoutHeader } from './style';


const Header = () => {
    return (
        <header style={{ background: `${colors.backgroundHeader}` }}>

            <LayoutHeader>
                <Link to="/">
                    <img
                        src="./logo_ie.svg"
                        alt="Logo de la societe Interencheres"
                        className='logo'
                    />
                    <img
                        src="./logo_ie_mobile.svg" alt="Logo de la societe Interencheres"
                        className='logo-mobile'
                    />
                </ Link>

                <nav>
                    <ul>
                        <Link to="/newSale">
                            <li>Créer une nouvelle vente</li>
                        </Link>
                        <Link to="/search">
                            <li>Rechercher</li>
                        </Link>
                    </ul>
                </nav>
            </LayoutHeader>

        </header>
    );
};

export default Header;