import { useEffect, useState } from 'react'
import data from './homes.json'
import ListingContainer from './components/listingContainer'
import ListingCard from './components/listingCard'
import Sidebar from './components/sidebar'
import DetailedView from './components/detailedView'

function App() {

  const [allListings, setAllListings] = useState([])
  const [currentListings, setCurrentListings] = useState([])
  const [listingCards, setListingCards] = useState([])

  const [priceFilter, setPriceFilter] = useState(null)
  const [bedroomFilter, setBedroomsFilter] = useState('Any')
  const [cityFilter, setCityFilter] = useState('Any')

  const [cities, setCities] = useState([])
  const [listingsByBedrooms, setBedroomListings] = useState({})

  const [showDetails, setShowDetails] = useState(null)

  // Grab data from database and map it to components
  useEffect(() => {

    // async in the event of actual fetch
    const getData = () => {
      return data
    }

    const fetchedListings = getData()
    const newCities = {}
    const bedCounts = {}

    console.log(fetchedListings)
    
    const allListings = fetchedListings.map((listingData, key) => {

      const component = <ListingCard data = {listingData} key = {key} setShowDetails = {setShowDetails}/>

        // create object of city : [listings]
        const listingCity = listingData.property.address.city
        if(!newCities[listingCity]) newCities[listingCity] = [component]
        else newCities[listingCity].push(component)

        // create object of # bedrooms : [listings]
        const listingBedrooms = listingData.property.numberBedrooms
        if(listingBedrooms >= 5){
          if(!bedCounts[5]) bedCounts[5] = [component]
          else bedCounts[5].push(component)
        }
        else {
          if(!bedCounts[listingBedrooms]) bedCounts[listingBedrooms] = [component]
          else bedCounts[listingBedrooms].push(component)
        }
        

        return ({
          component,
          listingData,
        })
    })

    const allComponents = []
    for(const listing of allListings){
      allComponents.push(listing.component)
    }

    setBedroomListings(bedCounts)
    setCities(newCities)
    setAllListings(allListings)
    setCurrentListings(allComponents)
    setListingCards(allComponents)
  },[])


  // update current listings when filters are applied
  useEffect(() => {
    
    if(!listingCards.length) return
    if(!priceFilter && !bedroomFilter && !cityFilter) setCurrentListings(listingCards)

    let filteredListings = listingCards

    if(cityFilter !== 'Any') filteredListings = cities[cityFilter]
    if(bedroomFilter !== 'Any') filteredListings = compare(filteredListings, listingsByBedrooms[bedroomFilter])
    if(priceFilter !== null){
      if(priceFilter !== 2000000){
        filteredListings = filteredListings.map((listing) => {
        const price = listing.props.data.price
        if(price < priceFilter) return listing
        })
      }
    }

    setCurrentListings(filteredListings)

  }, [priceFilter, bedroomFilter, cityFilter])

  const compare = (arr1, arr2 = null) => {
    if(!arr2) return []
    const result = [] 

    for(const listing of arr1){
      if(arr2.includes(listing)) result.push(listing)
    }
    return result
  }


  return (
    <div className="flex flex-row h-full w-full min-w-full">
      <Sidebar 
      priceFilter = {priceFilter} 
      setPriceFilter = {setPriceFilter} 
      setBedroomsFilter = {setBedroomsFilter}
      setCityFilter = {setCityFilter}
      cities = {cities}
      />
      {
        showDetails  ? <DetailedView setShowDetails={setShowDetails} data = {showDetails}/> : null
      }
      <ListingContainer active = {currentListings} />
    </div>
  );
}

export default App;
