import React from 'react';
import {ImCross} from 'react-icons/im'
 
const DetailedView = ({setShowDetails, data}) => {

  const property = data.property
  const titleCompany = data.titleCompany
  const escrowCompany = data.escrowCompany
  const listingAgent = data.listingAgent
  const price = data.price  
  const status = data.state
  const includedItems = data.includedItems
  const excludedItems = data.excludedItems

  const houseAddress = property.address.addressLine1
  const address2 = property.address.adressLine2
  const propertyCity = property.address.city
  const propertyState = property.address.state
  const propertyZIP = property.address.zip
  
  const bedrooms = property.numberBedrooms
  const bathrooms = property.numberBaths
  const sqft = property.squareFeet


  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
 


  return (
    <div className ='absolute w-full h-full bg-black/50' onClick={() => setShowDetails(null)}>
      <div id = 'modal' onClick={(e) => e.stopPropagation()} className = 'absolute z-50 h-3/4 w-10/12 bg-neutral-300 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-md '>
          <div className = 'h-2/5 w-full'>
            <img src = {data.property.primaryImageUrl}  alt = 'house image' className ='object-cover h-full w-full rounded-t-md'/>
          </div>
          <button onClick={() => setShowDetails(null)} className = 'absolute top-4 right-4'><ImCross color='gray'/></button>
          
          <div id = 'listingInfo' className = 'h-3/5 py-4 flex flex-col justify-start gap-4 text-start overflow-auto'>
            <div className = 'flex flex-col pl-2'>
              <div className = 'flex gap-2 align-bottom'>
              <p className = 'font-bold text-xl'>${price.toLocaleString('en-US')}  
                <span className = 'text-sm font-light pl-2'>
                <span className = 'font-semibold'> {bedrooms}</span> bedrooms | 
                <span className = 'font-semibold'> {bathrooms}</span> bathrooms | 
                <span className = 'font-semibold'> {sqft}</span> sqft</span>
              </p>
              </div>
              <div>
                <p>{houseAddress}, {address2 ? `${address2},` : null} {propertyCity}, {propertyState} {propertyZIP} </p>
                <p>Status: {status}</p>
              </div>
              
            </div>



            <div id='description' className ='pl-4 pt-4 border-t-[1px]  flex flex-col border-stone-400'>
              <h1 className = 'font-semibold text-lg'>Description</h1>
              <p className ='text-sm'>{property.description}</p>
            </div>

            <div id ='ammenities' className = 'pl-4 pb-4 border-b-[1px] border-stone-400 flex flex-col gap-2'>
            { includedItems.length ? (
              <div className = 'flex'>
                <p className = 'font-semibold text-md'>Included: 
                {
                  includedItems.map((item, key) => {
                    return(<p key = {key} className = 'text-sm font-normal'>• {capitalize(item.name)}</p>)
                  })
                }
                </p>
              </div>
            ) : null}
            { excludedItems.length ? (
              <div className = 'flex'>
                <p className = 'font-semibold text-md'>Excluded: 
                {
                  excludedItems.map((item, key) => {
                    return(<p key={key} className = 'text-sm font-normal'>• {capitalize(item.name)}</p>)
                  })
                }
                </p>
              </div> 
            ) : null}
            </div>


            <div id='listingAgent' className='pb-4 pl-4 border-b-[1px] border-stone-400'>
              <h1 className = 'font-semibold text-lg'>Listing by:</h1>
              <p className = 'pl-2'> {listingAgent.user.firstName} {listingAgent.user.lastName} | DRE #{listingAgent.licenseNumber}</p>
              <p className = 'font-semibold pl-2'>Contact: </p>
              <div id = 'agentContactInfo' className = 'pl-6'>
                <p className = 'text-sm'>
                Email: {listingAgent.user.email ? listingAgent.user.email : 'Unavailable'}
                </p>
                <p className = 'text-sm'>
                Phone: {listingAgent.user.phone ? listingAgent.user.phone : 'Unavailable'}
                </p>
              </div>
              
            </div>

            <div id='escrowInfo' className='pb-4 pl-4 border-b-[1px] border-stone-400'>
              <h1 className = 'font-semibold text-lg'>Escrow Company</h1>
              <div className = 'pl-4'>
                <p className = 'font-semibold'>{escrowCompany.name}</p>
                <p className = 'text-sm'>
                {escrowCompany.address.addressLine1} 
                {escrowCompany.address.addressLine2 ? `, ${escrowCompany.address.addressLine2}` : null}
                , {escrowCompany.address.city}
                , {escrowCompany.address.state} 
                , {escrowCompany.address.zip}
                </p>
                <p className = 'text-sm'><span className = 'font-semibold'>Officer:</span> {escrowCompany.officerName}</p>
              </div>

            </div>

            <div id='titleInfo' className = 'pl-4'>
              <h1 className = 'font-semibold text-lg'>Title Company</h1>
              <div className = 'pl-4'>
                <p className = 'font-semibold'>{titleCompany.name}</p>
                <p className = 'text-sm'>
                {titleCompany.address.addressLine1} 
                {titleCompany.address.addressLine2 ? `, ${titleCompany.address.addressLine2}` : null}
                , {titleCompany.address.city}
                , {titleCompany.address.state} 
                , {titleCompany.address.zip}
                </p>
                <p className = 'text-sm'><span className = 'font-semibold'>Officer:</span> {titleCompany.officerName}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
      

    
  );
};

export default DetailedView;