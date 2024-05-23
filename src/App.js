import logo from "./logo.svg";
import "./App.css";
import imagenRickMorty from "./img/rick-morty.png";
import { useState } from "react";
import Character from "./components/Character";

function App() {
  const [characters, setCharasters] = useState(null);
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    setCharasters(characterApi.results);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick and Morty</h1>
        {/* Si hay informacion la muestra, sino hay informacion lo deja como estaba antes */}
        {characters ? (
          <Character characters={characters} setCharasters={setCharasters} />
        ) : (
          <>
            <img src={imagenRickMorty} alt="rick-morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">
              Buscar Personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
