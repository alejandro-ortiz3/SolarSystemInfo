import React from 'react';

function PlanetCard({ planet, onSelect }) {
  return (
    <div className="planet-card" onClick={() => onSelect(planet)}>
      <img src={planet.image} alt={planet.name} className="planet-image" />
      <h3>{planet.name}</h3>
    </div>
  );
}

export default PlanetCard;
