import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from "react-router-dom";
import CharacterDetails from './CharacterDetails';

function App() {
  return (
    <Router>
      <CharacterDetails />
    </Router>
  );
}

useEffect(() => {
  axios.get('http://localhost:9009/api/people')
    .then(res => setCharacters(res.data))
    .catch(err => console.log('Error fetching characters:', err));

  axios.get('http://localhost:9009/api/planets')
    .then(res => setPlanets(res.data))
    .catch(err => console.log('Error fetching planets:', err));
}, []);

  // Render your components here, using the characters and planets data
{
  characters.map(char => (
    <Character character={char} planet={planets.find(p => p.id === char.homeworld)} />
  ))
}
const { characters, planet } = props;
const [showPlanet, setShowPlanet] = useState(false);

<button onClick={() => setShowPlanet(!showPlanet)}>
  {showPlanet ? 'Hide' : 'Show'}
</button>
{ showPlanet && <p>{planet.name}</p>}


export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
