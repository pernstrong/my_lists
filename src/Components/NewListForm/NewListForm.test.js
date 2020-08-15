import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render, waitFor } from "@testing-library/react"
import { MemoryRouter as Router } from 'react-router-dom'

import NewListForm from '../NewListForm/NewListForm'

// mock list data
import { mockedLists } from '../../testData'


import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../../reducers'


describe('NewListForm', () => {

    let store;

    beforeEach(() => {
        store = createStore(rootReducer, composeWithDevTools())
    })

    it('should display a form to add a new list', () => {
        const { getByPlaceholderText } = render(<Provider store ={store}><Router><NewListForm /></Router></Provider>)

        expect(getByPlaceholderText('list title')).toBeInTheDocument()
    })

})