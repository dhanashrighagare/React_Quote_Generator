// import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { QuoteContext } from '../ContextAPI/QuoteContext'

export default function BookMarkCard(props) {
    const quote = props.quote
    const ctx = useContext(QuoteContext)
    
  return (
    <div className=' relative bg-[#D05252] rounded-[30px] w-[60%] h-auto p-6 flex flex-col justify-center items-center text-white mt-6' >

        {quote.quote}
        <br></br>
         <p className=' font-bold'>-{quote.author}</p>

    </div>
  )
}
