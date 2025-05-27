import React from 'react';

function PlanetInfo({ planet }) {
  return (
    <div className="planet-info">
      <h2>{planet.name}</h2>

      <img
        src={planet.image}
        alt={planet.name}
        className="planet-image-large"
        style={{
          width: '100%',
          borderRadius: '6px',
          marginBottom: '1rem',
        }}
      />

      <p>{planet.description}</p>
      <ul>
        <li><strong>Radius:</strong> {planet.radius}</li>
        <li><strong>Distance from Sun:</strong> {planet.distanceFromSun}</li>
        <li><strong>Day Length:</strong> {planet.dayLength}</li>
        <li><strong>Orbital Period:</strong> {planet.orbitalPeriod}</li>
      </ul>
    </div>
  );
}

export default PlanetInfo;
