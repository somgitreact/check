import React, { useContext, useEffect, useState } from 'react'
import { Link} from 'react-router-dom'



const CatMenu = ({setCatname, catnamsall, cart}) => {

 


  return (
     
        
   <div className="bg-[#1e1e1e] text-white">
   
        <div className="max-w-[1360px] mx-auto flex items-center justify-between py-3">

          {/* Categories */}
          <div className="flex items-center gap-2 font-medium">
            ☰ Categories
          </div>
          <Link to='/'>Home</Link>
<Link to='product'>Product</Link>
<Link to='cart'>Cart</Link>

          {/* Currency & Language */}
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <span>USD ▾</span>
            <span>English ▾</span>
          </div>

          {/* Promo */}
          <div className="flex items-center gap-3">
            <img
              src="https://via.placeholder.com/40"
              alt="promo"
              className="w-10"
            />

            <div className="text-xs">
              <p className="font-semibold">
                Weekly Men's Toiletries Coupons.
              </p>
              <p className="text-gray-400">
                We extend exclusive discounts to our male clientele
              </p>
            </div>
          </div>

          {/* User actions */}
          <div className="flex items-center gap-6 text-sm">

            <div className="flex items-center gap-1 cursor-pointer">
              👤 Sign in
            </div>

            <div className="flex items-center gap-1 cursor-pointer">
              ♡ Favorites
            </div>

            <div className="flex items-center gap-1 cursor-pointer relative">
              🛍 Cart
              <span className="absolute -top-2 -right-4 bg-green-500 text-xs px-2 py-[1px] rounded-full">
                {cart?.length}
              </span>
            </div>

          </div>

        </div>
        <div className='catrow'>
          {catnamsall?.map((name)=> <button varient='contained' onClick={()=> setCatname(name)} key={name}>{name}</button> )}
        </div>
      </div>
  )
}

export default CatMenu