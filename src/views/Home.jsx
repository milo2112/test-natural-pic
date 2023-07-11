import Galeria from "../components/Galeria";
import GlobalContext from "../context/GlobalContext";
import { useContext } from "react";

export default function Home() {
  const { photos, setPhotos } = useContext(GlobalContext)
  
  return (
    <div id="Home">
      <h1>Natural Pic</h1>

      <Galeria galeria = {{photos, setPhotos}}/>
    </div>
  );
}
