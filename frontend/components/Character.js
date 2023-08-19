import React, { useCallback, useState } from "react";

const Character = ({ character, planet }) => {
  if (!character || !planet) return null;

  const [showPlanet, setShowPlanet] = useState(false);

  const toggleShowPlanet = useCallback(() => {
    setShowPlanet(prevShowPlanet => !prevShowPlanet);
  }, []);

  return (
    <div className="character-card">
      <h3 className="character-name">{character.name}</h3>
      <p>Height: {character.height}</p>
      {showPlanet && <p className="character-planet">{planet.name}</p>}
      <button onClick={toggleShowPlanet}>
        {showPlanet ? 'Hide Planet' : 'Show Planet'}
      </button>
    </div>
  );
};

// Assuming planets and characters are defined in this scope
const planet = planets.find(p => p.id === characters[0].homeworld);

if (!planet) {
  console.error('No matching planet found for character');
  return null;
}

return <Character character={characters[0]} planet={planet} />