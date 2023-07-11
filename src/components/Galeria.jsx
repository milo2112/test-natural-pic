import "../assets/css/galeria.css";
import Heart from "./Heart";
import GlobalContext from "../context/GlobalContext";
import { useContext } from "react";

export default function Galeria() {
  const { photos, setPhotos } = useContext(GlobalContext)
  //const fotos = photos.photos
  //fotos.map((foto) =>  (console.log("solo el indice ----->",foto)))
 // console.log("photos despues del destructuring-->", photos, setPhotos)
  // console.log("dato1 y dato2-->", dato1, dato2)
  //console.log("photos despues del destructuring-->", photos)

  const setFavorito = (id) => {
    const photoIndex = photos.findIndex((f) => f.id === id)
    photos[photoIndex].favorito = !photos[photoIndex].favorito
    //console.log("Valor de array fotos en Galeria antes de actualizar con likes o favoritos: ", photos)
    setPhotos([...photos])
  }
  return (
    <div className="galeria grid-columns-5 p-3">
      {photos.map((pic, i) => (
        <div onClick={() => setFavorito(pic.id)} className="foto" style={{ backgroundImage: `url(${pic.src})` }} key={i}>
        <Heart filled={pic.favorito} />          
        <p> {pic.desc} </p>
      </div>
      ))}

    </div>
  );
}
