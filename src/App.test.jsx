import { render, screen, within } from '@testing-library/react'

import { App } from './App'

describe('App component', () => {
  test('renders navigation and main page', () => {
    render(<App />)
    const linkElement = within(screen.getByRole('navigation')).getByText(
      'Page 1'
    )
    expect(linkElement).toBeInTheDocument()

    const pageElement = screen.getByText('This is Example Page 1')
    expect(pageElement).toBeInTheDocument()

    expect(process.env.REACT_APP_SOME_ACCESS_TOKEN).toBeDefined()
    expect(
      screen.getByText(process.env.REACT_APP_SOME_ACCESS_TOKEN)
    ).toBeInTheDocument()
  })
})
