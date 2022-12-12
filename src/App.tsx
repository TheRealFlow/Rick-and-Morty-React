import React from 'react';
import logo from './logo.svg';
import './App.css';

type Char = {
  name: string;
  status: string;
}

const character: Char[] = [
      {
        "name": "Rick Sanchez",
        "status": "Alive",
      },
      {
        "name": "Morty Smith",
        "status": "Alive",
      },
      {
        "name": "Summer Smith",
        "status": "Alive",
      },
      {
        "name": "Beth Smith",
        "status": "Alive",
      },
      {
        "name": "Jerry Smith",
        "status": "Alive",
      },
      {
        "name": "Abadango Cluster Princess",
        "status": "Alive",
      },
      {
        "name": "Abradolf Lincler",
        "status": "unknown",
      },
      {
        "name": "Adjudicator Rick",
        "status": "Dead",
      },
      {
        "name": "Agency Director",
        "status": "Dead",
      },
      {
        "name": "Alan Rails",
        "status": "Dead",
      },
      {
        "name": "Albert Einstein",
        "status": "Dead",
      },
      {
        "name": "Alexander",
        "status": "Dead",
      },
      {
        "name": "Alien Googah",
        "status": "unknown",
      },
      {
        "name": "Alien Morty",
        "status": "unknown",
      },
      {
        "name": "Alien Rick",
        "status": "unknown",
      },
      {
        "name": "Amish Cyborg",
        "status": "Dead",
      },
      {
        "name": "Annie",
        "status": "Alive",
      },
      {
        "name": "Antenna Morty",
        "status": "Alive",
      },
      {
        "name": "Antenna Rick",
        "status": "unknown",

      },
      {
        "name": "Ants in my Eyes Johnson",
        "status": "unknown",
      }
];

function returnWhenAlive(){
    const isAlive = character.filter(Char => Char.status === "Alive");

    console.log(isAlive)
}

function returnAllNames(){
  const allCharacter = character.map(Char => Char.name);

  console.log(allCharacter);
}


/*function fetchAPI() {
    fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(json => console.log("Data", json))
        .catch(error => console.error(error))
}*/


function App() {

    //fetchAPI()

  returnAllNames()
  returnWhenAlive()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
