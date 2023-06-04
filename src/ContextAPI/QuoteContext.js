import { createContext, useState } from "react";


export const QuoteContext = createContext(
    
    {
        bookmarks:[],
        setbookmarks : ()=>{}
    }
);

export const QuoteContextProvider = ({children})=>{
   
    const [bookmarks,setbookmarks] = useState([])
    
    return(<QuoteContext.Provider value={
            {
                
                bookmarks:bookmarks,
                setbookmarks:setbookmarks
            }
        }>
        {children}
        </QuoteContext.Provider>)
}