import React, {useEffect, useState} from 'react';
import './App.css';
import CharacterGallery from "./components/CharacterGallery";
import axios from "axios";


function App() {
    const [character, setCharacter] = useState([]);

    useEffect( () => {
        axios.get("https://rickandmortyapi.com/api/character")
        .then(response => response.data)
        .then((data) => setCharacter(data.results))
        .catch(error => console.error(error))
    }, [])

    return (
      <CharacterGallery character={character}/>
  );
}

export default App;
