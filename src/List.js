import React from 'react';
import Card from './Card';
import './List.css';

function Test(input) {
    return input;
}

function List(props) {
    //use the array map to turn array into cards li's
    return (
        <section className='List'>
            <header className='List-header'>{props.header} </header>
            <ul className='List-cards' >
                {props.cards.map(card => <Card
                    key={card.id}
                    title={card.title}
                    content={card.content}

                />)}
            </ul>
        </section>

    );
}

export default List;
