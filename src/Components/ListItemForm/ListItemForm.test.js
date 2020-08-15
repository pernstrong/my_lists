import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render, waitFor } from "@testing-library/react"
import { MemoryRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../../reducers'

import ListItemForm from '../ListItemForm/ListItemForm'


describe('ListItemForm', () => {

    let store;

    beforeEach(() => {
        store = createStore(rootReducer, composeWithDevTools())

    })

    it('should display an item form', () => {
        const { getByPlaceholderText } = render(<Provider store ={store}><Router><ListItemForm /></Router></Provider>)

        expect(getByPlaceholderText('add new item')).toBeInTheDocument()
    })
})