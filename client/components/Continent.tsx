import continentsData from '../../data/continents.ts'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Continent = () => {
  const { name } = useParams()

  const continentCountries =
    continentsData[name as keyof typeof continentsData].countries
  const continentImage =
    continentsData[name as keyof typeof continentsData].image

  return (
    <div>
      <h2>{name} Counties:</h2>
      <img src={`../../public/images/${continentImage}`} alt="" />
      <ul>
        {continentCountries.map((country, index) => {
          return (
            <li key={index}>
              <Link to={`${country.code}`}>
                {country.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Continent
