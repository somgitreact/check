import React, { useContext, useState } from 'react'
import CatMenu from '../navigation/CatMenu'
import { MainContext } from '../context/Context'
import Search from './Search'

const Header = () => {
   const {setCatname, catnamsall, cart} = useContext(MainContext)
 
   
  return (
      <header className="w-full border-b">

      {/* TOP HEADER */}
      <div className="max-w-[1360px] mx-auto flex items-center justify-between py-4">

        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-semibold">
          <span className="text-blue-500 text-3xl">🛒</span>
          Luminae
        </div>

        {/* Search */}

<Search catnamsall={catnamsall} />
        {/* Menu */}
        <nav className="flex items-center gap-6 text-gray-600 text-sm">
          <a href="#">About us</a>
          <a href="#">Blog</a>
          <a href="#">Contact us</a>
          <a href="#">Help & support</a>
        </nav>

      </div>

   
      <CatMenu setCatname={setCatname} catnamsall={catnamsall} cart={cart} />

    </header>

  )
}

export default Header