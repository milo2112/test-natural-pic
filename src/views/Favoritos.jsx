import Galeria from "../components/Galeria";

export default function Favoritos() {
 
  return (
    <>
      <h1>Fotos favoritas</h1>
      <div className="galeria grid-columns-5 p-3">
        <Galeria propFavoritos = {true}/>
      </div>

    </>  
  );
}
