import React from 'react';
// import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CancelTwoToneIcon from '@material-ui/icons/CancelTwoTone';
import { deleteTasks } from '../../requests';
import './card.scss';


function Card({ note, getNotes }) {
    const { id, topic, message } = note
    return (
        <div id="cardContainer">
            <div className="cardAlign">
                <div className="icon">
                    <CancelTwoToneIcon onClick={() => deleteTasks(id, getNotes)} />
                </div>
                <div style={{ padding: "10px 0 10px 5px" }}>
                    <h3>{topic}</h3>
                    <div style={{ borderBottom: "1px dotted black", padding: "5px 0" }} />
                    <p>{message}</p>
                </div>
            </div>
        </div>
    )
}
export default Card;