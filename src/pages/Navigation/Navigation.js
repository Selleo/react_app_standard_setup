import { NavLink } from 'react-router-dom'

const navigation = [
  { name: 'Page 1', to: '/', end: true },
  { name: 'Page2 with index 128', to: '/page2/128' },
  { name: 'Page2 with index 42', to: '/page2/42' },
]

export const Navigation = () => (
  <nav>
    {navigation.map(({ name, ...rest }) => (
      <NavLink key={name} {...rest} className="navlink">
        {name}
      </NavLink>
    ))}
  </nav>
)
