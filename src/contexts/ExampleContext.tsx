import React, { createContext, ReactElement, useContext, useState } from 'react'

type ContextType = {
  index: number
  setIndex: React.Dispatch<React.SetStateAction<number>>
}
export const ExampleContext = createContext<ContextType>({
  index: 0,
  setIndex: () => {},
})

// use in components that need the context data
export const useExampleContext = () => useContext(ExampleContext)

type Props = {
  children: ReactElement
}
// wrap the whole app or a part of it
export const ExampleProvider = ({ children }: Props) => {
  const [index, setIndex] = useState(0)

  return (
    <ExampleContext.Provider value={{ index, setIndex }}>
      {children}
    </ExampleContext.Provider>
  )
}
