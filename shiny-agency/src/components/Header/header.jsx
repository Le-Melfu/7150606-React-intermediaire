import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

function Header() {
    return (
        <header>
            <img src={logo} alt="logo" width="100px" height="100px"></img>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/survey/1">Questionnaire</Link>
                <Link to="/results">Résultats</Link>
                <Link to="/freelances">Freelances</Link>
            </nav>
        </header>
    );
}

export default Header;
