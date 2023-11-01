import { Link } from 'react-router-dom'
import continentsData from '../../data/continents.ts'
import Home from "./Home.tsx"

function Nav() {
  const continents = Object.keys(continentsData)
  return (
    <div>
      <h2>Nav</h2>
      <Link to={'/'} >Home</Link>
      <ul>
        {continents.map((continent, index) => {
          return <li key={index}>
           <Link to={`/continent/${continent}`} >{continent}</Link>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Nav
