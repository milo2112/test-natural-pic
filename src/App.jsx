
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

import GlobalContext from "./context/GlobalContext";
import { useEffect, useState } from "react"

function App() {

  const endpoint = "http://127.0.0.1:5173/fotos.json"
  const [photos, setPhotos] = useState([])
  
  useEffect(() => {
    const getPhotos = async() => {
      const resp = await fetch(endpoint)
      let { photos } = await resp.json()
      
     
      /*Se genera nuevo arreglo solo con atributos a utilizar*/
      const photosTemp = photos.map((photo) => ({
        id: photo.id,
        src: photo.src.tiny,
        desc: photo.alt,
        favorito: false  
        
      }));
      // console.log(`photosTemp: ${photosTemp}`)
      setPhotos(photosTemp)
    }
    getPhotos()
  }, [])

  return (
      <div className="App">
        <GlobalContext.Provider value={{ photos, setPhotos}}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favoritos" element={<Favoritos />} />
            </Routes>
          </BrowserRouter>
        </GlobalContext.Provider>
      </div>
  )
}

export default App
