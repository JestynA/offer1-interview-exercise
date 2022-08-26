import React from 'react';
import { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai'

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
    setPriceFilter(null)
    setBedroomsFilter('Any')
    setCityFilter('Any')
  }

  return (
    <div className = 'z-10 flex flex-col justify-start items-center break-normal gap-20 left-0 w-1/6 h-screen bg-stone-300 py-10 border-solid border-zinc-300 shadow-[-10px_0_10px_5px] overflow-auto'>
    <AiOutlineHome size ={60}/>
    <div className = 'w-full flex-col flex items-center'>
        <button className = 'w-full h-12 border-y-2 border-stone-500 bg-stone-400 hover:bg-stone-500 font-semibold'>Listings</button>
        <button className = 'w-full h-12 border-b-2 border-stone-500 bg-stone-400 hover:bg-stone-500 font-semibold' onClick={() => setShowFilters(!showFilters)}>Filter</button>
        { showFilters ? (
          <form className = ' max-h-80 w-full bg-stone-400 flex flex-col p-4 gap-2 border-b-2 border-stone-500'>

            <label for='price' className ='font-semibold'> Price: {priceFilter ? `$${priceFilter.toLocaleString('en-US')}` : 'Any'}{ priceFilter === 2000000 ? '+' : ''}</label>
            <input type='range' id='price' min='1000' max='2000000' defaultValue='2000000' onChange={(e) => handlePriceChange(e.target.value)} className = 'cursor-pointer ' />
            
            <label for='bedrooms' className ='font-semibold'>Bedrooms: </label>
            <select id='bedrooms' onChange = {(e) => handleBedroomChange(e.target.value)}>
              <option id = 'anyBedroom'>Any</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option value = '5'>5+</option>
            </select>

            <label for='city' className ='font-semibold'>City:</label>
            <select id='city' onChange = {(e) => handleCityChange(e.target.value)}>
            <option >Any</option>
            {Object.keys(cities).map((city) => {
              return (
                <option key = {city}>{city}</option>
              )
            })}
            </select>

            <input type='reset' value='Reset Filters' onClick={() => resetFilters()} className = 'bg-blue-500 font-semibold rounded-full text-sm hover:bg-blue-600 cursor-pointer'/>
          </form>
        ) : null}    
        </div>

    </div>
  );
};

export default Sidebar;