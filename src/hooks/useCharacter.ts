import {useEffect, useState} from "react";
import axios from "axios";

export default function useCharacter() {
    const [character, setCharacter] = useState();

    const getCharacter = () => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(response => {
                return response.data
            })
            .then(data => setCharacter(data))
            .catch(error => console.error(error))
    }
    useEffect(
        () => getCharacter(), []
    )

    return {character}
}