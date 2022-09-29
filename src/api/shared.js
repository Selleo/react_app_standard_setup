export const handleSelectors =
  (selectors, ...additionalParams) =>
  (rawData) => {
    return Object.entries(selectors).reduce((acc, [selectorName, selector]) => {
      acc[selectorName] = selector(rawData, additionalParams)
      return acc
    }, {})
  }
