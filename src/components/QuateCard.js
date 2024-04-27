// import axios from 'axios'
import React, { useContext, useState } from 'react'
import { QuoteContext } from '../ContextAPI/QuoteContext'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
export default function QuateCard(props) {
    const quote = props.quote
    const ctx = useContext(QuoteContext)
    const [isadded,setisadded] = useState(quote.bookmarked)
    const addBookmark = ()=>{
        ctx.setbookmarks([...ctx.bookmarks,quote])
        setisadded(true)
    }
  return (
    <div className=' relative bg-zinc-700 rounded-[20px] w-[60%] h-auto p-6 flex flex-col justify-center items-center' >

        {quote.quote}
        <br></br>
         <p className=' font-bold'>-{quote.author}</p>
         <button onClick={addBookmark} className=' bottom-3 right-10 absolute'>{isadded?<BookmarkAddedIcon/>:<BookmarkAddIcon/>}</button>

    </div>
  )
}
