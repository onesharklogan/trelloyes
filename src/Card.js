import React from 'react';
import './Card.css';
//adds delete button
//adds props of title, content
//please work


function Card(props) {
    return (
        <li className='Card'>
            <button onClick={() => props.onDeleteItem(props)}>Delete Card</button>

            <b>{props.title}</b>
            <br />
            {props.content}


        </li>
    );
}

export default Card;