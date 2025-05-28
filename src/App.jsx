import { useState, useRef } from 'react';
import planets from './data/planets';
import SolarSystem from './components/SolarSystem';
import PlanetInfo from './components/PlanetInfo';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const audioRef = useRef(null);
  const timeoutRef = useRef(null);

  const handlePlanetSelect = (planet) => {

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const clickSound = new Audio('/audio/planet-click.wav');
    clickSound.volume = 0.4;
    clickSound.play();

    if (planet.audio) {
      timeoutRef.current = setTimeout(() => {
        const sound = new Audio(planet.audio);
        sound.volume = 0.6;
        sound.play().catch(err => console.warn('Audio error:', err));
        audioRef.current = sound;
      }, 3000);
    }

    setSelectedPlanet(planet);
  };

  return (
    <div className="App">
      <audio autoPlay loop>
        <source src="/audio/space-ambient.mp3" type="audio/mpeg" />
      </audio>
      
      <h2><em>click on a planet to get started</em></h2>
      <h1>The Solar System</h1>
      <h2><em>made by Alejandro Ortiz</em></h2>

      <div className="main-layout">
        <SolarSystem planets={planets} onSelect={handlePlanetSelect} />
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
