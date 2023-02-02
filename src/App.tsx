import { ExamplePage1, ExamplePage2, Navigation } from 'pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<ExamplePage1 />} />
            <Route path="/page2/:id" element={<ExamplePage2 />} />
          </Routes>
        </div>
      </main>
      <p>
        Token rendered in the UI (and checked in tests) as an example of GH
        secrets usage. Don't render secrets in real apps :D
      </p>
      <code>{import.meta.env.VITE_SOME_ACCESS_TOKEN}</code>
    </BrowserRouter>
  )
}
