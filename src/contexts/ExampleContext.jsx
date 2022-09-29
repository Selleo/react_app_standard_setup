import React, { createContext, useContext, useState } from 'react'

export const ExampleContext = createContext({ index: 0, setIndex: () => {} })

// use in components that need the context data
export const useExampleContext = () => useContext(ExampleContext)

// wrap the whole app or a part of it
export const ExampleProvider = ({ children }) => {
  const [index, setIndex] = useState(0)

  return (
    <ExampleContext.Provider value={{ index, setIndex }}>
      {children}
    </ExampleContext.Provider>
  )
}
