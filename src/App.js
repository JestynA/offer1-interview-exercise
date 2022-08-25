import { useEffect, useState } from 'react'
import data from './homes.json'
import ListingContainer from './components/listingContainer'
import ListingCard from './components/listingCard'
import Sidebar from './components/sidebar'


function App() {

  const [listings, setListings] = useState([])
  const [currentListings, setCurrentListings] = useState([])
  const [priceFilter, setPriceFilter] = useState(null)
  const [bedroomFilter, setBedroomsFilter] = useState(null)
  const [cityFilter, setCityFilter] = useState(null)
  const [cities, setCities] = useState([])

  // Grab data from database and map it to components
  useEffect(() => {

    // async in the event of actual fetch
    const getData = () => {
      return data
    }
    const fetchedListings = getData()
    console.log(data)
    const newCities = {}
    const allListings = fetchedListings.map((listing, key) => {
        if(!newCities[listing.property.address.city]) newCities[listing.property.address.city] = true

        return (
          <ListingCard data = {listing} key = {key}/>
        )
      })


   
    setCities(Object.keys(newCities))
    setListings(allListings)
    setCurrentListings(allListings)
  },[])

  // update current listings when filters are applied
  useEffect(() => {
    console.log('Filters:' , priceFilter, bedroomFilter, cityFilter)
  }, [priceFilter, bedroomFilter, cityFilter])

  
  // Filtering
    // keep a current list as we pass it through each filter and return the las t
    // city
    // price
      // ascending / descending order?
      // slider range?
    // number of bedrooms

  return (
    <div className="flex flex-row h-full w-full min-w-full">
      <Sidebar 
      priceFilter = {priceFilter} 
      setPriceFilter = {setPriceFilter} 
      setBedroomsFilter = {setBedroomsFilter}
      setCityFilter = {setCityFilter}
      cities = {cities}
      />
      <ListingContainer active = {currentListings}/>
    </div>
  );
}

export default App;
