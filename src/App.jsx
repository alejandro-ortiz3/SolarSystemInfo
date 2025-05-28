import { useState } from 'react';
import planets from './data/planets';
import SolarSystem from './components/SolarSystem';
import PlanetInfo from './components/PlanetInfo';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  return (
    <div className="App">
      <audio autoPlay loop>
        <source src="/audio/space-ambient.mp3" type="audio/mpeg" />
      </audio>

      <h1>The Solar System</h1>
      <h2><em>Click on a planet to get started</em></h2>
      <div className="main-layout">
        <SolarSystem planets={planets} onSelect={setSelectedPlanet} />
        <AnimatePresence mode="wait">
          {selectedPlanet && (
          <motion.div
            key={selectedPlanet.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1.8 }}
          >
            <PlanetInfo planet={selectedPlanet} />
          </motion.div>
        )}
      </AnimatePresence>

      </div>
    </div>
  );
}

export default App;
