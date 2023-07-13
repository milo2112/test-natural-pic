import GlobalContext from "../context/GlobalContext"
import { useContext } from "react"
import Galeria from "../components/Galeria";

export default function Favoritos() {
  const { photos } = useContext(GlobalContext)
  
  return (
    <>
      <h1>Fotos favoritas</h1>
      <div className="galeria grid-columns-5 p-3">
        <Galeria propFavoritos = {true}/>
      </div>

    </>  
  );
}


      // <div className="galeria grid-columns-5 p-3">
      //   {photos.filter(({ liked }) => liked ).map(({ id, src }) => (
      //     <div 
      //       key={id}
      //       className="foto" 
      //       style={{ backgroundImage: `url(${src.tiny})` }}>
      //     </div>
      //   ))}
      // </div> 