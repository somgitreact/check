import React, { useContext, useState } from 'react'
import { MainContext } from '../context/Context'
import useProduct from '../hooks/Product'

const Search = ({catnamsall}) => {
    const {setSearchdata} =useContext(MainContext)
    const data = useProduct()
       const [selected, setSelected] = useState('')
     

       function  debounceSearch(sechfunc, delay) {
        let timeout
        return function(...arg){
            clearTimeout(timeout)
            timeout = setTimeout(function(){sechfunc.apply(this, arg)}, delay)
        }

       }
       const searchword=(word)=>{
         let alldata = data.filter((item)=> (item.title).toLowerCase().includes(word.toLowerCase()) &&  (selected === "" || item.category === selected) )

        setSearchdata(alldata);
 
       }
       const serchHandler = debounceSearch(searchword, 200)


  return (
          <div className="flex items-center border rounded-md overflow-hidden w-[420px]">

          <input
            type="text"
            placeholder="Search Products"
            className="flex-1 px-3 py-2 outline-none"
            onChange={(e)=>serchHandler(e.target.value)}
          />

          <select className="border-l px-3 py-2 text-sm outline-none" onChange={(e)=>setSelected(e.target.value)}>
            <option value={''}>All categories</option>
            {catnamsall?.map((item)=><option value={item}>{item}</option>)}            
          </select>

          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200">
            🔍
          </button>
        </div>
  )
}

export default Search