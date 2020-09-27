import React from 'react';
import List from './List';
import Store from './STORE';
import './App.css';

function App(props) {
  //const className = `split ${props.className}`;
  return (
    //test
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {Store.lists.map(list => (<List
          key={list.id}
          header={list.header}
          cards={list.cardIds.map(id => Store.allCards[id])}
          somethingRandom="3"
        />))}

      </div>
    </main>
  );

}

export default App;