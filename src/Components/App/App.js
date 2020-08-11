import React from 'react';
import './App.css';

import Header from '../Header/Header'
import ListsContainer from '../ListsContainer/ListsContainer'
import NewListForm from '../NewListForm/NewListForm'

function App() {
  return (
    <main className="app">
      <Header />
      <ListsContainer />
      <NewListForm />
    </main>
  );
}

export default App;
