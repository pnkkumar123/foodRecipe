import Dish from "./components/Dish"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import { Routes,Route } from "react-router-dom"
import VideoPlayer from "./components/VideoPlayer"

function App() {
  
  return (
    <>
     <NavBar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dish" element={<Dish/>}/>
      <Route path="/video" element={<VideoPlayer/>}/>
     </Routes>
     
    </>
  )
}

export default App
