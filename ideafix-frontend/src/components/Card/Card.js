import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import './card.scss';

function Card({ note }) {
    const { id, topic, message } = note
    return (
        <div id="cardContainer">
            <HighlightOffIcon />
            <h3>{topic}</h3>
            <div />
            <p>{message}</p>
        </div>
    )
}
export default Card;