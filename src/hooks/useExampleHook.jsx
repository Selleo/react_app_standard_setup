import { useCallback, useState } from 'react'

// This is only an example of reusable hook
export const useExampleHook = () => {
  const [index, setIndex] = useState(0)

  const increment = useCallback(() => {
    setIndex((i) => i + 1)
  }, [])

  return { index, increment }
}
