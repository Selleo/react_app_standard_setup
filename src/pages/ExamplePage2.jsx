import { ExampleComponent } from 'components'
import { useParams } from 'react-router-dom'

export const ExamplePage2 = () => {
  const params = useParams()

  return (
    <div>
      <p>This is Example Page 2</p>
      <p>id: {params.id}</p>
      <p>Using ExampleComponent</p>
      <ExampleComponent />
    </div>
  )
}
