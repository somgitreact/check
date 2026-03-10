import React, { useContext, useEffect, useState } from 'react'
import GalleryPro from '../component/GalleryPro'
import { Button, Rating } from '@mui/material';
import { apidata } from '../service/api';
import { useParams } from 'react-router-dom';
import { MainContext } from '../context/Context';

const ProductDetails = () => {
  const [product, setProduct] = useState()
      const [value, setValue] = useState(0);
      const {id}= useParams()
      const {setCart} = useContext(MainContext)
 useEffect(()=>{
  const data = async()=>{
     const res = await apidata(`products/${id}`)
     setProduct(res)
     setValue(res?.rating.rate.toFixed(0))

     
  }
  data()
 },[id])



 
const cartHandler=()=>{
const items = JSON.parse(localStorage.getItem('cartItem')) || []

 const strdata = {
  id:product?.id,
  proname: product?.title,
  quantity : 0,
  price: product?.price
 }

 const exist = items.find((itm)=> itm.id === product?.id)
let datastore;

 if(exist){
  console.log(1);
  
  datastore = items.map((item)=> item.id == product?.id ? {...item, quantity: item.quantity + 1} : item)
 } else {
  console.log(2);
  
datastore = [...items, strdata]
 }

 localStorage.setItem('cartItem', JSON.stringify(datastore))
 setCart(datastore)
}


  return (
 <section className='w-full flex-col'>
      <div className='catname bg-gray-200 py-5'><div className='max-w-[1360px] w-full mx-auto flex items-center justify-between py-4'>WOMEN</div></div>  
      <div className='prosec flex justify-between max-w-[1360px] w-full mx-auto  py-4'>
<div className='aside w-1/2  bg-gray-300'>
<GalleryPro defult={product?.image} />
</div>
<div className='main w-[60%] flex gap-2 items-start flex-col ps-3.5 pt-3.5'>
<h2 className='title text-left '>{product?.title}</h2>
<p className=' text-lg! text-left font-light!'>{product?.description}</p>
<p>$ {product?.price}</p>
<p>Category:  {product?.category}</p>
<div className='rating'>
 <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <span className="text-sm text-gray-500">
            (56)
          </span>
</div>
<Button variant='contained' className=' bg-amber-700!' onClick={()=>cartHandler()}>Add to Cart</Button>
</div>
      </div>
<div className='otherdetails'>
   
</div>
    </section>
  )
}

export default ProductDetails