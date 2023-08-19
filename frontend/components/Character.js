import React, { useState, } from "react";

const Character = ({ character, planet }) => {
  const [showPlanet, setShowPlanet] = useState(false);

  return (
    <div className="character-card">
      <h3 className="character-name">{character.name}</h3>
      <p>Height: {character.height}</p>
      {showPlanet && <p className="character-planet">{planet.name}</p>}
      <button onClick={() => setShowPlanet(!showPlanet)}>
        {showPlanet ? 'Hide Planet' : 'Show Planet'}
      </button>
    </div>
  );
};
const planet = planets.find(p => p.id === characters[0].howmworld);

return <Character character={characters[0]} planet={planet} />