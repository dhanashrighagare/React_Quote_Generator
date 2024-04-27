import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import BookMark from "./Pages/BookMark";
import { QuoteContextProvider } from "./ContextAPI/QuoteContext";

function App() {
  
  return (
    <QuoteContextProvider>
    <div className=" w-screen h-auto min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
      
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/bookmarks" Component={BookMark}/>
      </Routes>
      
    
    </div>
    </QuoteContextProvider>
  );
}

export default App;
