import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { useContext } from 'react';
import { MainContext } from '../context/Context';
import useProduct from '../hooks/Product';

const Product = () => {
  const data= useProduct()
  
    const [filteredData, setFilteredData] = useState();
  const{searchdata, catname} = useContext(MainContext)
  useEffect(()=>{
  function action(){
           setFilteredData(searchdata)
  }
        action()
  },[searchdata])
          useEffect(()=>{
  function action(){
      // console.log("====", data);
     const filter = data.filter((item)=> item.category === catname )
           setFilteredData(filter.length >0 ? filter : data)
  }
        action() 
        },[catname, data])
       
  return (
    <section className='w-full flex-col'>
      <div className='catname bg-gray-200 py-5'><div className='max-w-[1360px] w-full mx-auto flex items-center justify-between py-4'>Now Showing :- {catname || ''}</div></div>  
      <div className='prosec flex justify-between max-w-[1360px] w-full mx-auto  py-4'>
<div className='aside w-[30%]  bg-gray-300'>

</div>
<div className='main w-[65%] flex flex-wrap gap-2 justify-between'>
{filteredData?.length != 0 ? filteredData?.map((item)=><ProductCard key={item.id} dteails={item} />) : "No DATA FOUND"}
<div className='grow-[0.9]'></div>
</div>
      </div>

    </section>
  )
}

export default Product