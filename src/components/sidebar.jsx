import React from 'react';
import { useState } from 'react';

const Sidebar = ({priceFilter, setPriceFilter, setBedroomsFilter, cities, setCityFilter}) => {

  const [showFilters, setShowFilters] = useState(false)


  const handlePriceChange = (value) => {
    const price = Math.round(value/1000) * 1000
    setPriceFilter(price)
  }

  const handleBedroomChange = (beds) => {
    setBedroomsFilter(beds)
  }

  const handleCityChange = (city) => {
    if(!city) setCityFilter(null)
    else setCityFilter(city)
  }

  const resetFilters = () => {
    document.getElementById('city').value = 'Any'
    document.getElementById('bedrooms').value = document.getElementById('anyBedroom')

    setPriceFilter(null)
    setBedroomsFilter(null)
    setCityFilter(null)
  }

  return (
    <div className = 'flex flex-col justify-start items-center gap-20 left-0 w-1/6 h-screen bg-stone-300 py-10 border-solid border-r-2 border-zinc-300 shadow-2xl'>
    <div>Logo</div>
    <div className = 'w-full flex-col flex items-center'>
        <button className = 'w-full h-12 hover:bg-stone-400'>Listings</button>
        <button className = 'w-full h-12 hover:bg-stone-400' onClick={() => setShowFilters(!showFilters)}>Filter</button>
        { showFilters ? (
          <form className = 'w-3/4 '>

            <label for='price'> Price: ${priceFilter}{ priceFilter === 1000000 ? '+' : ''}</label>
            <input type='range' id='price' min='1' max='1000000' defaultValue='1000000' onChange={(e) => handlePriceChange(e.target.value)}/>
            
            <label for='bedrooms'>Bedrooms: </label>
            <select id='bedrooms' onChange = {(e) => handleBedroomChange(e.target.value)}>
              <option id = 'anyBedroom'>Any</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5+</option>
            </select>

            <label for='city'>City:</label>
            <select id='city' onChange = {(e) => handleCityChange(e.target.value)}>
            <option value=''>Any</option>
            {cities.map((city) => {
              return (
                <option>{city}</option>
              )
            })}
            </select>

            <input type='reset' value='Reset Filters' onClick={() => resetFilters()}/>
          </form>
        ) : null}    
        </div>

    </div>
  );
};

export default Sidebar;