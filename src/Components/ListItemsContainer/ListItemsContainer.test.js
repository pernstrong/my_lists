import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render, waitFor } from "@testing-library/react"
import { MemoryRouter as Router } from 'react-router-dom'

// mock test data
import { mockedItems } from '../../testData'

import ListItemsContainer from '../ListItemsContainer/ListItemsContainer'


describe('ListItemsContainer', () => {
    it('should display the item title', () => {
        const { getByText } = render(<Router><ListItemsContainer items={mockedItems}/></Router>)

        expect(getByText('ice cream')).toBeInTheDocument()
        expect(getByText('yarn')).toBeInTheDocument()
    })
})