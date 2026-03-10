import React, { useEffect, useState } from 'react'

const GalleryPro = ({defult}) => {
    const[imgval, setImgval] = useState();
    useEffect(()=>{
setImgval(defult)
    },[defult])
    const dummyimg = [
       defult,
       '/i1.png',
       '/i2.png',
       '/i3.png',
       '/i4.jpg'
    ]
console.log("lllll",imgval);

  return (
    <div className='gallery'>
        <div className='sideimg'>            
{ dummyimg.map((val, index)=> <div className='thumb' key={index} onClick={()=>setImgval(val)}> <img src={val}  /> </div>)}            
        </div>
        <div className='mainimg'>
         <img src={imgval}  />
         </div>
    </div>
  )
}

export default GalleryPro