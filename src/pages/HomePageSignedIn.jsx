import React from 'react'
import { SidePanel, NavBarLoggedIn, SearchInput, ProfileIcon } from "../components/loggedin";

const HomePageSignedIn = () => {
  return (
    <div className='flex flex-row'>
        <SidePanel />
        {/* <SearchInput /> */}
        <ProfileIcon />
        <div className='w-[78vw] h-[0.12vw] absolute left-[17vw] bg-strathmore-yellow ml-[2vw] mt-[6vw]'></div>
    </div>
  )
}

export default HomePageSignedIn