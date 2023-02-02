// This is only an example of reusable helper function
export const exampleHelper = ({ a, b }: { a: number; b: number }) => {
  if (b === 0) return NaN

  return a / b
}
