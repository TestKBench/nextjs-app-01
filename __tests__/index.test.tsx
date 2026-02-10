import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('renders the homepage', () => {
    render(<Home />)
    expect(screen.getByText(/Welcome to NextJS App 01/i)).toBeInTheDocument()
  })

  it('has navigation links', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /About/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Products/i })).toBeInTheDocument()
  })
})
