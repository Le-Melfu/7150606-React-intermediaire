import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';
import DefaultPicture from '../../assets/pp.jpg';

function Card({ label, title, picture }) {
    return (
        <div className="card">
            <span>{label}</span>
            <img src={picture} alt="freelance" height={80} width={80} />
            <span>{title}</span>
        </div>
    );
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
    label: '',
    title: '',
    picture: DefaultPicture,
};

export default Card;
