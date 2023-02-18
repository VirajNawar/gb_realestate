import React from 'react'
import { useParams } from 'react-router'
import { housesData } from '../sampleData'
import {BiBed, BiBath, BiArea} from 'react-icons/bi'
import { Link } from 'react-router-dom'


function PropertyDetails() {
  // get house id
  const {id} = useParams()

  // get house based id
  const house  = housesData.find((house) =>{
    return house.id === parseInt(id)
  })

  return (
    <section>
      <div className='container mx-auto min-h-[800px] mb-14'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <h2 className='text-2xl font-medium'>{house.name}</h2>
            <h3 className='text-lg mb-4'>{house.address}</h3>
          </div>
        <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
        <div className='bg-blue-400 text-black px-3 rounded-full '>{house.type}</div>
        <div className='bg-yellow-400 text-black px-3 rounded-full'>{house.country}</div>
        </div>
        <div className='text-3xl text-blue-700 font-semibold'>${house.price}</div>
        </div>
        <div className='flex flex-col items-start gap-8 lg:flex-row'>
          <div className='max-w-[768px]'>
            <div className='mb-8'>
              <img src={house.imageLg} alt=''/>
            </div>
            <div className='flex gap-x-6 text-blue-700 mb-6'>
              <div  className='flex gap-x-2 items-center'>
                <BiBed className='text-2xl ' />
                <div>{house.bedrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiBath className='text-2xl ' />
                <div>{house.bathrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiArea className='text-2xl ' />
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className='flex-1 bg-[#060822] w-full mb-8 border border-blue-500 rounded px-6 py-8'>
            <div className='flex items-center gap-x-4 mb-8'>
              <div className='w-20 h-20 p-1 border border-blue-500 rounded-full'>
                <img src={house.agent.image} alt="agent-logo"/>
              </div>
            <div className='font-bold text-lg '>
              {house.agent.name}
            </div>
            <Link to="/" className='text-blue-500'>
              View Listings
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PropertyDetails