import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render, waitFor } from "@testing-library/react"
import { MemoryRouter as Router } from 'react-router-dom'

import ListView from '../ListView/ListView'

// mock list data
import { mockedLists } from '../../testData'


import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../../reducers'


describe('ListView', () => {

    let store;

    beforeEach(() => {
        store = createStore(rootReducer, composeWithDevTools())
    })

    xit('should display a message if there are no lists', () => {
        const { getByText } = render(<Provider store ={store}><Router><ListView lists={mockedLists}/></Router></Provider>)

        expect(getByText('Add an item to see it here!')).toBeInTheDocument()
    })

})