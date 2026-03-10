import React from 'react'
import Cardrow from '../component/Cardrow'
import Advtrow from '../component/Advtrow'

const Home = () => {
  return (
    <div className=' w-full'>
        <Cardrow rowname="Flash Sell" card='flash'  />
        <Cardrow rowname="Trend Sell" card='trend' />
        <Advtrow />
    </div>
  )
}

export default Home