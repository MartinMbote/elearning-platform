import React from 'react'
import { SidePanel, NavBarLoggedIn } from "../components/loggedin";

const HomePageSignedIn = () => {
  return (
    <div className='flex flex-row'>
        <SidePanel />
        <NavBarLoggedIn />
    </div>
  )
}

export default HomePageSignedIn