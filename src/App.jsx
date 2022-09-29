import { ExamplePage1, ExamplePage2, Navigation } from 'pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App = () => {
  console.log(
    `import.meta.env.VITE_SOME_ACCESS_TOKEN: `,
    import.meta.env.VITE_SOME_ACCESS_TOKEN
  )

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
    </BrowserRouter>
  )
}
