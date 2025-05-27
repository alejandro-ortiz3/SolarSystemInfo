import React from 'react';
import Planet from './Planet';
import './SolarSystem.css';

function SolarSystem({ planets, onSelect }) {
  return (
    <div className="solar-system">
      <div className="starfield">
        <div className="stars"></div>
      </div>

      <div className="sun">
        <img src="/images/sun.jpg" alt="Sun" />
      </div>

      {planets.map((planet, index) => (
        <Planet
          key={planet.name}
          planet={planet}
          orbitIndex={index + 1}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default SolarSystem;
