import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render, waitFor } from "@testing-library/react"
import { MemoryRouter as Router } from 'react-router-dom'

import Header from '../Header/Header'


describe('Header', () => {
    it('should display the title', () => {
        const { getByText } = render(<Router><Header /></Router>)

        expect(getByText('MyLists')).toBeInTheDocument()
    })
})