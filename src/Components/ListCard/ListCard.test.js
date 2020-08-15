import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render, waitFor } from "@testing-library/react"
import { MemoryRouter as Router } from 'react-router-dom'

import ListCard from '../ListCard/ListCard'


describe('ListCard', () => {
    it('should display the list title', () => {
        const { getByText } = render(<Router><ListCard title='Grocery List'/></Router>)

        expect(getByText('Grocery List')).toBeInTheDocument()
    })
})