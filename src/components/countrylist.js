import React from "react"
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
  { key: 'cl', value: 'cl', flag: 'cl', text: 'Chile' , as: 'a', href:'https://www.pedidosya.cl'},
  { key: 'hk', value: 'hk', flag: 'hk', text: 'Hongkong', as: 'a', href:'https://www.foodpanda.hk/' },
]
const CountryList = () => {
  return (
      <Dropdown
    placeholder='Select Country'
    fluid
    search
    selection
    options={countryOptions}
  />
  )
}

export default CountryList
