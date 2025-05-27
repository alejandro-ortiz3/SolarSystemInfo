import { useState } from 'react';
import planets from './data/planets';
import SolarSystem from './components/SolarSystem';
import PlanetInfo from './components/PlanetInfo';
import './App.css';

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  return (
    <div className="App">
      <audio autoPlay loop>
        <source src="/audio/space-ambient.mp3" type="audio/mpeg" />
      </audio>

      <h1>The Solar System</h1>
      <h2><em>Click on any planet to learn more</em></h2>

      <div className="main-layout">
        <SolarSystem planets={planets} onSelect={setSelectedPlanet} />
        {selectedPlanet && <PlanetInfo planet={selectedPlanet} />}
      </div>
    </div>
  );
}

export default App;
