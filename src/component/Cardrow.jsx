import React from 'react'
import Flashcard from './Flashcard'
import Trendcard from './Trendcard'

const Cardrow = ({rowname, card}) => {
  return (
    <div className='max-w-[1360px] w-full mx-auto flex items-center justify-between py-4 flex-col'>
        <h2 className=' text-2xl text-gray-700 font-bold text-left w-full py-3'>{rowname}</h2>

       <div className='flshrow w-full'>
        {card== 'flash' && <Flashcard />}
        {card== 'trend' && <Trendcard />}
        </div> 
        
    </div>
  )
}

export default Cardrow