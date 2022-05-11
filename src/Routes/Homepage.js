import React from 'react'
import { Outlet } from 'react-router-dom'

const Homepage = () => {
  return (
    <>
    <Outlet/>
    <div>Homepage</div>
    </>
  )
}

export default Homepage