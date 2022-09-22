import { ExamplePage1, ExamplePage2, Navigation } from 'pages'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<ExamplePage1 />} />
          <Route path="/page2/:id" element={<ExamplePage2 />} />
        </Routes>
      </main>
      <p>
        Token rendered in the UI (and checked in tests) as an example of GH
        secrets usage. Don't render secrets in real apps :D
      </p>
      <code>{process.env.REACT_APP_SOME_ACCESS_TOKEN}</code>
    </BrowserRouter>
  )
}
