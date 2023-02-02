import { useExampleHook } from 'hooks'
import React from 'react'

export const ExampleComponent = () => {
  const { index, increment } = useExampleHook()

  return (
    <p>
      Initial <b>test</b> component
      <button onClick={increment}>Increment</button>
      index: {index}
    </p>
  )
}
