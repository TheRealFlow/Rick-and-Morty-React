import React from 'react';
import './App.css';
import CharacterGallery from "./components/CharacterGallery";
//import axios from "axios";
//import {resetFirstInputPolyfill} from "web-vitals/dist/modules/lib/polyfills/firstInputPolyfill";


/*function axiosDemo() {
    axios.get("https://rickandmortyapi.com/api/character")
        .then(response => response.data)
        .catch(e => console.error(e))

    const data = {
        a: "A",
        b: "B"
    };

    axios.post("", data)
        .then(response => response.data)
        .catch(e => console.error(e))
}*/

function App() {
  return (
      <>
      <CharacterGallery />
      </>
  );
}

export default App;
