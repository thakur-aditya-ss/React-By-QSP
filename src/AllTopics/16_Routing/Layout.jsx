import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Nav/>

        {/* outlet is use to render children routes */}
        <Outlet/>
    </div>
  )
}

export default Layout