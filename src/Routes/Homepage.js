import React from 'react'
import { Outlet } from 'react-router-dom'
import Directory from '../Components/Directory'

const Homepage = () => {
  return (
    <>
      <Directory />
      <Outlet/>
    </>
  )
}

export default Homepage