import React, {useEffect, useState} from 'react';
import './App.css';
import CharacterGallery from "./components/CharacterGallery";
import axios from "axios";


function App() {
    const [character, setCharacter] = useState([]);
    const [loadChars, setLoadChars] = useState(1)

    useEffect( () => {
        (async () => {
        const response = await axios.get("https://rickandmortyapi.com/api/character/?page=" + loadChars)
            setCharacter(response.data.results);
            })();
    }, [loadChars])

    const nextCharacter = () => {
        setLoadChars(loadChars + 1)
    }
    const prevCharacter = () => {
        setLoadChars(loadChars - 1)
    }

    return (
        <>
            {loadChars <= 1 ?
                <button disabled={true}>Prev 20 Character</button>
                : <button onClick={prevCharacter}>Prev 20 Character</button> }

            {loadChars >= 42 ?
                <button disabled={true}>Next 20 Character</button>
                : <button onClick={nextCharacter}>Next 20 Character</button> }

            <CharacterGallery character={character}/>
        </>
  );
}

export default App;
