import { Link } from 'react-router-dom'
import countryData from '../../data/countries.ts'
import { useParams } from 'react-router-dom'
const Country = () => {
  const { code, id } = useParams()

  const country = countryData.find((country) => country.code === code)
  const neighbours = country?.neighbours
  const neighbourArr = neighbours?.split(',')

  const neighbourCountries = countryData?.filter((country) =>
    neighbourArr?.includes(country.code)
  )

  return (
    <div>
      {!country ? (
        <p>No such country</p>
      ) : (
        <>
          <h2>
            {country?.flag} {country?.name}
          </h2>
          <p>Capital : {country?.capital}</p>
          <p>Area : {country?.areaSqKms}</p>
          <p>Papulation : {country?.population}</p>
          <p>Currency : {country?.currencyCode}</p>
          <p>
            Neighbours :{' '}
            {neighbourCountries.length > 0
              ? neighbourCountries?.map((neighbour, index) => {
                  return (
                    <li key={index}>
                      <Link to={`../${neighbour.code}`} relative="path">
                        {neighbour.name}
                      </Link>
                    </li>
                  )
                })
              : 'No neighbours'}
          </p>
        </>
      )}
    </div>
  )
}

export default Country
