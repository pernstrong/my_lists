import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from '../Header/Header'
import ListsContainer from '../ListsContainer/ListsContainer'
import NewListForm from '../NewListForm/NewListForm'
import ListView from '../ListView/ListView'

function App() {
  return (
    <main className="app">
      <Header />
      <Switch>

        <Route path="/list/:title"
          render={({ match }) => {
            const { title }  = match.params
            return (
              <ListView title={title} />
            )
          }}></Route>

        <Route path='/'>
          <NewListForm />
          <ListsContainer />
        </Route>

      </Switch>
    </main>
  );
}

export default App;
