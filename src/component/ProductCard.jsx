import { Button, Rating } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

// "id": 1,
// "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price": 109.95,
// "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category": "men's clothing",
// "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
// "rating": {
// "rate": 3.9,
// "count": 120
// }
const ProductCard = ({dteails}) => {
     const [value, setValue] = useState(dteails.rating.rate);
     const random = Math.floor(Math.random()*5 + 1)
     const navigate = useNavigate()
    // console.log("------", random);
     
  return (
        <div className="w-[280px] bg-white rounded-xl shadow-md overflow-hidden mt-2 flex flex-col">

      {/* Image */}
      <div className="relative px-1.5">
        <img
          src={dteails.image}
          alt="product"
          className="w-full h-[320px] object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">

        {/* Title + Heart */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-gray-800">
              {dteails.title}
            </h3>
            <p className="text-sm text-gray-500">
               {dteails.category}
            </p>
          </div>

          <button className="text-gray-400 hover:text-red-500 text-xl">
            ♡
          </button>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">

          <div className="flex text-yellow-400 text-lg">
            <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        readOnly
      />
          </div>

          <span className="text-sm text-gray-500">
            (56)
          </span>

        </div>

        {/* Price */}
        <div className=' flex-1'></div>
        <div className="flex items-center gap-3 mt-3 justify-between ">

          <span className="text-red-600 font-semibold text-lg">
            ${dteails.price}
          </span>

          <span className="text-gray-400 line-through">
            ${dteails.price * random  }
          </span>

          <span className="bg-red-500 text-sm text-white p-2 rounded-md">
            -{(((dteails.price * random) - (dteails.price)) * 100 /(dteails.price * random)).toFixed(0)  } %
          </span>

        </div>
<Button variant='contained' sx={{marginTop:2}}  onClick={()=> navigate(`/prodetail/${dteails.id}`)}>Show Details</Button>

      </div>
    </div>
  )
}

export default ProductCard