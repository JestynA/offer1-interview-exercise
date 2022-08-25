import React from 'react';

const listingContainer = ({active}) => {

  
  return (
    <div className = ' grid grid-cols-auto auto-rows-[minmax(250px,.25fr)] items-stretch  justify-around gap-2 px-4 pt-20 bg-stone-200 w-5/6 h-screen overflow-auto'>
      {active}
    </div>
  );
};

export default listingContainer;