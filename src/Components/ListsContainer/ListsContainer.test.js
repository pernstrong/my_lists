import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render, waitFor } from "@testing-library/react"
import { MemoryRouter as Router } from 'react-router-dom'

import ListsContainer from '../ListsContainer/ListsContainer'

// mock list data
import { mockedLists } from '../../testData'


import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../../reducers'


describe('ListsContainer', () => {

    let store;

    beforeEach(() => {
        store = createStore(rootReducer, composeWithDevTools())
    })

    it('should display a message if there are no lists', () => {
        const { getByText } = render(<Provider store ={store}><Router><ListsContainer /></Router></Provider>)

        expect(getByText('Add a list to see it here!')).toBeInTheDocument()
    })

    xit('should display the list title', () => {
        const { getByText } = render(<Provider store ={store}><Router><ListsContainer lists={mockedLists}/></Router></Provider>)

        expect(getByText('Side Projects')).toBeInTheDocument()
        expect(getByText('Sunday Todos')).toBeInTheDocument()
    })
})