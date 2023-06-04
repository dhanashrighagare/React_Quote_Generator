import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import BookMark from "./Pages/BookMark";
import { QuoteContextProvider } from "./ContextAPI/QuoteContext";

function App() {
  
  return (
    <QuoteContextProvider>
    <div className=" w-screen h-auto min-h-screen bg-gradient-to-r to-[#5E2AB3] from-[#161E6C]">
      
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/bookmarks" Component={BookMark}/>
      </Routes>
      
    
    </div>
    </QuoteContextProvider>
  );
}

export default App;
