import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Category from '../pages/Category'
import Product from '../pages/Product'
import Home from '../pages/Home'
import ProductDetails from '../pages/ProductDetails'
import CartPage from '../pages/CartPage'

const MenuStructure = () => {
  return (
     <Routes>
        <Route path='/cart'  element={<CartPage />} />
        <Route path='/product' element={<Product />} />
       <Route path='/prodetail/:id' element={<ProductDetails />} /> 
       <Route path='/' element={<Home/>} />
        
    </Routes>
  )
}

export default MenuStructure