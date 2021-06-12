import logo from './pictures/logo.png'
import './App.css'
import {useState, useEffect} from "react"
import CardsOfCountries from "./components/CardsOfCountries"

let countriesData = []


function App() {
  const [stateInput, setStateInput] = useState('')
  const [stateSelect, setStateSelect] = useState()
  const [isLoaded, setIsLoaded] = useState(true)
  const [countries, setCountries] = useState([])

    useEffect(() => {
     const fetchPromise = fetch("https://api.covid19api.com/summary")
      fetchPromise
          .then(res => res.json())
          .then(res =>{
              setCountries(
                  res["Countries"]
              )
              countriesData = res["Countries"]
          })
          .finally(() => setIsLoaded(false))
  },[])

  for(let i = 0; i < countries.length; i++){
      countries[i].number = i +1
  }

    const selectSearch = e => {
        const {value} = e.target
        setStateSelect(value)
        let result = [...countries].sort((a,b) => {
            if(value === 'asc') return a.TotalConfirmed - b.TotalConfirmed
            if(value === 'desc') return b.TotalConfirmed - a.TotalConfirmed
            if(value === "A") return  a.Country.localeCompare(b.Country)
            if(value === "W") return  b.Country.localeCompare(a.Country)
        })
        setCountries(result)
    }

    const handleSearch = (e) => {
        let {value} = e.target
        setStateInput(value)
        let result = [...countriesData].filter(country => country.Country.toLowerCase().includes(value.toLowerCase()))
        setCountries(result)
    }

    const resetFilters = () => {
        setStateInput('')
        setStateSelect('')
        setCountries([...countriesData])
    }

    return (
      <>
    <div className="App">
        <div className="ElementsOfSort">
            <select name="select" value={stateSelect} className="Select" onChange={selectSearch}>
                <option defaultValue hidden >Sort by total confirmed</option>
                <option value = "asc">ascending order</option>
                <option value = "desc">descending order</option>
            </select>

            <select name="select" value={stateSelect} className="Select" onChange={selectSearch}>
                <option defaultValue hidden >Sort by country name</option>
                <option value = "A">alphabetical order</option>
                <option value = "W">not alphabetical order</option>
            </select>

            <button type={"button"} className="card-reset" onClick={resetFilters}>Reset filters</button>
        </div>
      <header className="App-header">
        <div className="logoAndInfo">
        <img src={logo} alt="logo" />
          <h1>STATISTIC</h1>
        </div>
          <div className="search">
          <input type="text" placeholder={"Search..."} value = {stateInput} onChange={handleSearch} className="inputSearch"/>
          </div>

      </header>
    </div>

    <div className="MainInfo">
      <div className="Number">№</div>
      <div className="Country">Country</div>
      <div className="TotalConfirmed">Total Confirmed</div>
    </div>

          <div className="App">
              {isLoaded ? <h1 className="load">Loading...</h1> : ''}
              {countries.map((country) => <CardsOfCountries key = {'good_' + country.ID} data = {country}/>)}
          </div>
      </>
  )
}

export default App
