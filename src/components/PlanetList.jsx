import React from 'react';
import PlanetCard from './PlanetCard';

function PlanetList({ planets, onSelect }) {
  return (
    <div className="planet-list">
      {planets.map((planet) => (
        <PlanetCard key={planet.name} planet={planet} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default PlanetList;
