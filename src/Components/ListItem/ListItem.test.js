import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render, waitFor } from "@testing-library/react"
import { MemoryRouter as Router } from 'react-router-dom'

import ListItem from '../ListItem/ListItem'


describe('ListItem', () => {
    xit('should display the item title', () => {
        const { getByText } = render(<Router><ListItem item='bread'/></Router>)

        expect(getByText('bread')).toBeInTheDocument()
    })
})