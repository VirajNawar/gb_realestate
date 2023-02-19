import React, { useState } from 'react'
import { housesData } from '../sampleData'
import ShimmerCard from './ShimmerCard';

function ShimmerUi() {
  const [shimmmerCard, setShimmerCard] = useState(housesData)
  return (
    <div>
      
      <div className='flex flex-wrap justify-center'>
      {shimmmerCard.map((list) => {
          return <ShimmerCard {...list.data} key={list.id} />;
        })}
      </div>
    </div>
  )
}

export default ShimmerUi