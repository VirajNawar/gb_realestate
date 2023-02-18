import React from 'react'
import CountryDropdown from './CountryDropdown'
import PropertyDropdown from './PropertyDropdown'
import PriceRangeDropdown from './PriceRangeDropdown'
import {RiSearch2Line} from 'react-icons/ri'

function Search() {
  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col '>
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button>
        <RiSearch2Line />
      </button>
    </div>
  )
}

export default Search