import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render, waitFor } from "@testing-library/react"
import { MemoryRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../../reducers'

import App from './App'

// const store = createStore(rootReducer, composeWithDevTools())


describe('App', () => {

  let store;

  beforeEach(() => {
    store = createStore(rootReducer, composeWithDevTools())

  })

  it('should display a header', () => {
    const { getByText } = render(<Router><Provider store={store}><App /></Provider></Router>)

    expect(getByText('MyLists')).toBeInTheDocument()
  })
})