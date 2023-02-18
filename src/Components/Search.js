import React from 'react'
import CountryDropdown from './CountryDropdown'
import PropertyDropdown from './PropertyDropdown'
import PriceRangeDropdown from './PriceRangeDropdown'
import {RiSearch2Line} from 'react-icons/ri'

function Search() {
  return (
    <div className='px-[30px] 
                    py-6 
                    max-w-[1170px] 
                    mx-auto 
                    flex 
                    flex-col 
                    lg:flex-row
                    justify-between
                    gap-4
                    lg:gap-x-3
                    relative
                    lg:-top-4
                    lg:shadow-2
                    bg-[#060822]
                    lg:transparent 
                    lg:backdrop-blur
                    rounded-lg
                    '>
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button  className='bg-blue-700
                            
                            '>
        <RiSearch2Line />
      </button>
    </div>
  )
}

export default Search