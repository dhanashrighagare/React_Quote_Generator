// import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
// import { QuoteContext } from '../ContextAPI/QuoteContext'


export default function QuateCard(props) {
    const quote = props.quote
  return (
    <div className=' bg-[#D05252] rounded-[30px] w-[60%] h-auto p-6 flex flex-col justify-center items-center' >

        {quote.quote}
        <br></br>
         <p className=' font-bold'>-{quote.author}</p>
    </div>
  )
}
