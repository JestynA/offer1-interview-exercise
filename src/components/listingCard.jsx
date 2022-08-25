import React from 'react';

const listingCard = ({data}) => {

  const property = data.property
  const titleCompany = data.titleCompany
  const escrowCompany = data.escrowCompany


  const houseAddress = data.property.address.addressLine1
  // const price  
  // const bedrooms  
   const bath = data
   const sqft = data.property.squareFeet
  // const status
  
  // const address2
  // const listingsAgency
  return (
    <div>
      <image src={data.property.primaryImageUrl} alt = 'house image'/>
      {houseAddress}
      {sqft}
      
    </div>
  );
};

export default listingCard;