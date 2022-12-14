import React, {useEffect, useState} from 'react';
import './App.css';
import CharacterGallery from "./components/CharacterGallery";
import axios from "axios";


function App() {
    const [character, setCharacter] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect( () => {
        (async () => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
            setCharacter(response.data.results);
            })();
    }, [])

    return (
        <>
            <button onClick={() => setPageNumber(pageNumber - 1)}>Prev</button>
            <button onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
            <CharacterGallery character={character}/>
        </>
  );
}

export default App;
