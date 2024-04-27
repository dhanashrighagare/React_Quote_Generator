import React, { useContext, useEffect, useState } from 'react';
import QuateCard from '../components/QuateCard';
import axios from 'axios';
import { QuoteContext } from '../ContextAPI/QuoteContext';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';

export default function Home() {
  const ctx = useContext(QuoteContext);
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("");
  const bookmarks = ctx.bookmarks;
  const [quote, setQuote] = useState({
    "quote": "",
    "author": "",
    "bookmarked": false
  });

  // function for fetching quote
  const fetchQuote = async () => {
    setLoading(true);
    await axios({
      url: 'https://api.quotable.io/random?tags=' + tag,
      method: 'GET'
    })
      .then((res) => {
        var isBookmarked = false;
        for (var i = 0; i < bookmarks.length; i++) {
          if (bookmarks[i].quote === res.data.content) {
            isBookmarked = true;
          }
        }
        const response = {
          "quote": res.data.content,
          "author": res.data.author,
          bookmarked: isBookmarked
        };
        setLoading(false);
        console.log(response);
        setQuote(response);
      })
      .catch(error => {
        console.error('Error fetching quote:', error);
        setLoading(false);
      });
  };

  const [tags, setTags] = useState([]);

  // function to get tags
  const fetchTags = async () => {
    await axios({
      url: 'https://api.quotable.io/tags',
      method: 'GET'
    })
      .then((res) => {
        setTags(res.data);
        console.log(tags);
      })
      .catch(error => {
        console.error('Error fetching tags:', error);
      });
  };

  const selectHandler = (e) => {
    setTag(e.target.value);
  };

  useEffect(() => {
    fetchQuote();
    fetchTags();
  }, [tag, bookmarks]); // Add tag and bookmarks as dependencies

  return (
    <div className='h-screen w-screen text-white'>
      <div className='top h-20 w-screen justify-between flex pt-5'>
        <Link to='/' className='font-[Poppins] text-2xl ml-6 font-extrabold'>Home</Link>
        <Link to='/bookmarks' className='font-[Poppins] text-2xl mr-6 font-light'>Book Marks</Link>
      </div>

      <div className='absolute h-4/6 w-screen flex flex-col items-center mt-20'>
        {loading ? <Loading /> : <QuateCard quote={quote} />}
        <div className='mt-10 mb-10'>
          <select onChange={selectHandler} className='text-black rounded-lg'>
            <option value='' selected disabled>Select Tag</option>
            {tags.map((item, index) => (
              <option key={index} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <button onClick={fetchQuote} className='bg-amber-800 rounded-lg h-[45px] w-[180px] font-[26px]'>Next Quote</button>
      </div>
    </div>
  );
}
