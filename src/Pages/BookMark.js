import React, { useContext,useEffect } from 'react'
import { QuoteContext } from '../ContextAPI/QuoteContext'
import BookMarkCard from '../components/BookMarkCard'
import { Link } from 'react-router-dom'

export default function BookMark() {
  const ctx = useContext(QuoteContext)
  return (
    <div>
      <div className=' top h-20 w-screen justify-between flex pt-5 text-white '>
            <Link to='/'className=' font-[Poppins] text-xl ml-6 font-light'>Home</Link>
            <Link to='/bookmarks' className=' font-[Poppins] text-xl mr-6 font-extrabold'>Book Marks</Link>
        </div>
        <div className=' flex flex-col items-center justify-center'>
          {
            ctx.bookmarks.map((item)=>{
              return(<BookMarkCard quote = {item}/> )
            })
          }

        </div>
    </div>
  )
}
