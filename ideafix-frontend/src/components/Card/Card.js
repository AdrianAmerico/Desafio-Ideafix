import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { deleteTasks } from '../../requests';
import './card.scss';


function Card({ note, getNotes }) {
    const { id, topic, message } = note
    return (
        <div id="cardContainer">
            <HighlightOffIcon onClick={() => deleteTasks(id, getNotes)} />
            <h3>{topic}</h3>
            <div />
            <p>{message}</p>
        </div>
    )
}
export default Card;