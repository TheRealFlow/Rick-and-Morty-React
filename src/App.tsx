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

    let nextPage = () => {
        setPageNumber(pageNumber+1);
    }
    let prevPage = () => {
        setPageNumber(pageNumber-1);
    }

    return (
        <>
            <button onClick={prevPage}>Prev</button>
            <button onClick={nextPage}>Next</button>
            <CharacterGallery character={character}/>
        </>
  );
}

export default App;
