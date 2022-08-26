import React from 'react';

const listingCard = ({data, setShowDetails}) => {

  const property = data.property

  const houseAddress = property.address.addressLine1
  const address2 = property.address.adressLine2
  const propertyCity = property.address.city
  const propertyState = property.address.state
  const propertyZIP = property.address.zip
  const price = data.price  
  const bedrooms = property.numberBedrooms
  const bathrooms = property.numberBaths
  const sqft = property.squareFeet
  const status = data.state
  
  // const address2
  // const listingsAgency

  const handleClick = () => {
    setShowDetails(data)
  }
  return (
    <button onClick = {() => handleClick()} className = 'max-h-fit w-full min-w-fit shadow-lg rounded-md hover:shadow-2xl transition-shadow'>
      
      <div className = 'h-3/5 min-h-max'>
        <img src={data.property.primaryImageUrl} alt = 'house image' className ='object-cover h-full w-full rounded-t-md'/>
      </div>

      <div className = 'flex flex-col justify-between h-2/5 p-2 bg-neutral-200 text-left rounded-b-md min-w-fit truncate'>
        <h1 className = 'font-bold'>${price.toLocaleString('en-US')}</h1>
        <p className = 'text-xs'> 
          <span className ='font-semibold'> {bedrooms}</span> Bed |  
          <span className ='font-semibold'> {bathrooms}</span> Bath |   
          <span className ='font-semibold'> {sqft}</span> Sq. ft -  
          <span className ='font-semibold'> {status}</span>
        </p>
        <p className = 'text-xs'>
        {houseAddress}
        {address2 ? (`, ${address2}`): null}
        , {propertyCity}, {propertyState} {propertyZIP}
        </p>
        <p className = 'text-xs'>{}</p>
      </div>
      
      
    </button>
  );
};

export default listingCard;