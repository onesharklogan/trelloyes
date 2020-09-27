import React from 'react';
import './Card.css';
//adds delete button
//adds props of title, content

function Card(props) {
    //const className = `split ${props.className}`;
    return (
        <li className='Card'>
            <button>Delete Card</button>
            <b>{props.title}</b>
            <br />
            {props.content}


        </li>
    );
}

export default Card;