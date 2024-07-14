import Dish from "./components/Dish"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import { Routes,Route } from "react-router-dom"

function App() {
  
  return (
    <>
     <NavBar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dish" element={<Dish/>}/>
     </Routes>
     
    </>
  )
}

export default App
