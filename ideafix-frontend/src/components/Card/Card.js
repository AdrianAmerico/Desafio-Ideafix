import React from 'react';
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
                <div style={{ padding: "10px", height: "100%" }}>
                    <div style={{ height: "100%" }}>
                        <h3>{topic}</h3>
                        <div style={{ borderBottom: "1px dotted black", padding: "5px 0" }} />
                        <span>{message}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;