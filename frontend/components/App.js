import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from "react-router-dom";
import CharacterDetails from './CharacterDetails';

function App() {
 const [characters, setCharacters] = useState([]);
 const [planets, setPlanets] = useState([]);
 const [showPlanet, setShowPlanet] = useState(false);

 useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await axios.get('http://localhost:9009/api/people');
       setCharacters(response.data);
     } catch (error) {
       console.log('Error fetching characters:', error);
     }

     try {
       const response = await axios.get('http://localhost:9009/api/planets');
       setPlanets(response.data);
     } catch (error) {
       console.log('Error fetching planets:', error);
     }
   };

   fetchData();
 }, []);

 // Render your components here, using the characters and planets data
 {
   characters.map(char => (
     <Character character={char} planet={planets.find(p => p.id === char.homeworld)} />
   ))
 }

 <button onClick={() => setShowPlanet(!showPlanet)}>
   {showPlanet ? 'Hide' : 'Show'}
 </button>
 {showPlanet && <p>{planet.name}</p>}

 return (
   <Router>
     <CharacterDetails />
   </Router>
 );
}

export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
