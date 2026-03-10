import React, { createContext, useEffect, useState } from 'react'
import { apidata } from '../service/api';

export const MainContext = createContext();
const Context = ({children}) => {
    const [catname, setCatname] = useState('')
    const [catnamsall, setCatnamesall] = useState()
    const [searchdata, setSearchdata] = useState([])
    const [cart, setCart]= useState()
         useEffect(()=>{
         const data = async ()=>{
                        const proItems = await apidata('products/categories');
                        setCatnamesall(proItems)
                       // console.log(proItems);  
                       setCart(JSON.parse(localStorage.getItem('cartItem')))            
                    }
                    data()
     },[])
  return (
    <MainContext.Provider value={{catname, setCatname, catnamsall, searchdata, setSearchdata, cart, setCart}}>
        {children}
    </MainContext.Provider>
  )
}

export default Context