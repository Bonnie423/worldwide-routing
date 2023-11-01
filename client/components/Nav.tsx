import { NavLink } from 'react-router-dom'
import continentsData from '../../data/continents.ts'
import Home from './Home.tsx'
import { useState } from 'react'

function Nav() {
  const [activeLink, setActiveLink] = useState<string | null>(null)
  const continents = Object.keys(continentsData)

  function handleClick(continent:string) {
    setActiveLink(continent)
  }
  return (
    <div>
      <h2>Nav</h2>
      <NavLink to={'/'}>Home</NavLink>
      <ul>
        {continents.map((continent, index) => {
          const isActive = continent === activeLink

          return (
            <li
              key={index}
              style={{ listStyleType: isActive ? 'square' : 'none' }}
            >
              <NavLink
                to={`/continent/${continent}`}
                onClick={() => handleClick(continent)}
                style={{ fontWeight: isActive ? 'bold' : 'normal' }}
                // activeClassName='active' // I don't know why the activeClassName is not working
              >
                {continent}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Nav
