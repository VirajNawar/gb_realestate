import React, { createContext, useEffect, useState } from 'react'
import {housesData} from '../sampleData'


export const HouseContext = createContext()

const  HouseContextProvider = ({children}) => {
  const [houses, setHouses] = useState(housesData)
  const [country, setCountry] = useState('Location (any)')
  const [countries, setCountries] = useState([])
  const [property, setProperty] = useState('Property type (any)')
  const [properties, setProperties] = useState([])
  const [price, setPrice] = useState('Price range (any)')
  const [loading, setLoading] = useState(false)

  // Return All Countries
  useEffect(()=>{

    // Country
    const allCountries = houses.map((house)=>{
      return house.country
    })

    // Remove Duplicates
    const uniqueCountries = ['Location (any)',...new Set(allCountries)]

    // Set Countries State
    setCountries(uniqueCountries)
  },[])

   // Return All Properties
   useEffect(()=>{

    // Country
    const allProperties = houses.map((house)=>{
      return house.type
    })

    // Remove Duplicates
    const uniqueProperties = ['Property (any)',...new Set(allProperties)]

    // Set Properties State
    setProperties(uniqueProperties)
  },[])

  const handleClick = () =>{
    // set loading
    setLoading(true)

    console.log(country, property, price);

    //function to check if string includes (any)
    const checkStr = (str) =>{
      return str.split(' ').includes('(any)')

    }
    // Get first value of price and prase ut to get it in number
    const minValue = parseInt(price.split(' ')[0])
    
    // get second value of price
    const maxValue = parseInt(price.split(' ')[2])

    const newHouses = housesData.filter((house)=>{
      const housePrice = parseInt(house.price)
      // if all values are selected
      if(
        house.country === country &&
        house.type === property &&
        housePrice >= minValue &&
        housePrice <= maxValue
      ){
        return house
      }

      // if all values are default
      if(checkStr(country) && checkStr(property) && checkStr(price)){
        return house
      }

      // if country is not default 
      if(!checkStr(country) && checkStr(property) && checkStr(price)){
        return house.country === country
      }
      // if property is not default 
      if( !checkStr(property) && checkStr(country)  && checkStr(price)){
        return house.type === property
      }
      // if price is not default 
      if( !checkStr(price) && checkStr(country)  && checkStr(property)){
        if(housePrice >= minValue && housePrice <= maxValue){
          return house
        }
      }

      // if country & property is not default 
      if(!checkStr(country) && !checkStr(property) && checkStr(price)){
        return house.country === country && house.type === property
      }
      // if country & price is not default 
      if(!checkStr(country) && checkStr(property) && !checkStr(price)){
        if(housePrice >= minValue && housePrice <= maxValue){
          return house.country === country
        }
      }

      // property and price is not default
      if(checkStr(country) && !checkStr(property) && !checkStr(price)){
        if(housePrice >= minValue && housePrice <= maxValue){
          return house.type === property
        }
      }
    })

   setTimeout(()=>{
      return newHouses.length < 1 ? setHouses([]) :setHouses(newHouses), 
      setLoading(false)
   }, 1000)

  }

  return (
    <HouseContext.Provider value={{
      country,
      setCountry,
      countries,
      setCountries,
      property,
      setProperty,
      properties,
      setProperties,
      price,
      setPrice,
      houses,
      loading,
      handleClick,
      loading
    }}>
      {children}
    </HouseContext.Provider>
  )
}

export default HouseContextProvider