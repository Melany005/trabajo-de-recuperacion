import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setPersonajes(datos.results);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al consumir la API:", error);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <h2>Cargando personajes...</h2>;
  }

  return (
    <div className="contenedor">
      <h1>Rick and Morty - Personajes</h1>

      <div className="personajes">
        {personajes.map((personaje) => (
          <div className="tarjeta" key={personaje.id}>
            <img src={personaje.image} alt={personaje.name} />

            <h2>{personaje.name}</h2>
            <p>Estado: {personaje.status}</p>
            <p>Especie: {personaje.species}</p>
            <p>Género: {personaje.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;