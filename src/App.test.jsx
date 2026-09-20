import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import App from './App'

describe('Pet Haven App', () => {
  test('renders the main hero heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /Everything Your Pet Needs,All in One Place\./i,
      })
    ).toBeInTheDocument()
  })
})
