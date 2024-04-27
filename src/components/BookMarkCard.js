// import axios from 'axios'
import React, { useContext, } from 'react'
import { QuoteContext } from '../ContextAPI/QuoteContext'
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

export default function BookMarkCard(props) {
    const quote = props.quote
    const ctx = useContext(QuoteContext)
    const bookmarks = ctx.bookmarks
    const navigate = useNavigate()
    const deletebookmark = ()=>{
        var index
        
        for(var i=0;i<bookmarks.length;i++)
        {
            if(bookmarks[i]=== quote)
            {
                index = i
                console.log(index);
                
            }
            

        }
        console.log(bookmarks[index]);
        bookmarks.splice(index, 1);
        ctx.setbookmarks(bookmarks)
        navigate('/bookmarks')
    }
    
  return (
    <div className=' relative bg-zinc-700 rounded-[20px] w-[60%] h-auto p-6 flex flex-col justify-center items-center text-white mt-6' >

        {quote.quote}
        <br></br>
         <p className=' font-bold'>-{quote.author}</p>
         <button onClick={deletebookmark}><DeleteIcon/></button>

    </div>
  )
}
