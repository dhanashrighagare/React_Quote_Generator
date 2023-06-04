import React from 'react'
import QuateCard from '../components/QuateCard'
import axios from 'axios'
import  { useContext, useEffect, useState } from 'react'
import { QuoteContext } from '../ContextAPI/QuoteContext'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import Loading from '../components/Loading'

export default function Home() {
  const ctx = useContext(QuoteContext);
  const [loading,setloading] = useState(false)
    const [tag,settag] = useState("")
    const bookmarks = ctx.bookmarks
    const [quote,setquote] = useState({
        "quote":"",
        "author":"",
        "bookmarked":false
    })

    // function for feaching quote
    const fechquote = async()=>{
        setloading(true)
         await axios({
            url :'https://api.quotable.io/random?tags='+tag,
            method: 'GET'
        })
        .then((res)=>{
            var isbookmarked  = false
            for(var i=0;i<bookmarks.length;i++)
            {
                if(bookmarks[i].quote === res.data.content)
                {
                    isbookmarked = true
                }
            }
            const responce = {
                "quote":res.data.content,
                "author":res.data.author,
                bookmarked:isbookmarked
            }
            setloading(false)
            console.log(responce);
            setquote(responce)
        })

        
    }
    const [tags,settags] = useState([])

    // function to get tags
    const fechtags = async()=>{
      await axios({
        url :'https://api.quotable.io/tags',
        method: 'GET'
    })
    .then((res)=>{
      settags(res.data)
      console.log(tags);
    })
    }

const SelectHandler = (e)=>{
  settag(e.target.value)

}




    useEffect(()=>{
      fechquote()
      fechtags()
    },[bookmarks])

  return (
    <div className=' h-screen w-screen text-white '>
        <div className=' top h-20 w-screen justify-between flex pt-5 '>
            <p className=' font-[Poppins] text-xl ml-6 font-extrabold'>Home</p>
            <p className=' font-[Poppins] text-xl mr-6 font-light'>Book Marks</p>
        </div>

        <div className=' absolute h-full w-screen flex flex-col items-center mt-20 '>
            {loading?<Loading/>:<QuateCard  quote={quote}/>}
            <div className=' mt-10 mb-10'>
            <select   onChange={SelectHandler} className=' text-black rounded-lg' >
            <option value="" selected="selected"></option>

            {tags.map((item,index) => {
      // console.log(item);
      return (
      <option key={index} value={item.slug}>
        {item.name}
      </option>
    );
  })}
                 
      </select>
      </div>
      <button onClick={fechquote} className=' bg-[#009C51] rounded-lg h-[45px] w-[240px] font-[26px]'>Next Quote</button>
        </div>        
    </div>
  )
}
