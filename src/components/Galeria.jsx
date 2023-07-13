import { useContext } from "react";
import "../assets/css/galeria.css";
import Heart from "./Heart";
import GlobalContext from "../context/GlobalContext";

export default function Galeria({ propFavoritos = false }) {
  const { photos, setPhotos } = useContext(GlobalContext)
  
  const setFavorito = (id) => {
    const photoIndex = photos.findIndex((f) => f.id === id)
    photos[photoIndex].liked = !photos[photoIndex].liked
    
    setPhotos([...photos])
  }
  // console.log(photos[0])
  return (
    <div className="galeria grid-columns-5 p-3">
      {photos.filter(({ liked }) => propFavoritos ? liked : true).map(({ id, src, liked, alt }) => (
        <div 
          onClick={() => setFavorito(id)}
          key={id}
          className="foto" 
          style={{ backgroundImage: `url(${src.original})` }}>
          <Heart filled={liked} />
          <p> {alt} </p>
        </div>
      ))}
    </div>
  );
}
