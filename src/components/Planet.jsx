function Planet({ planet, orbitIndex, onSelect }) {
  const orbitSpacing = 40;
  const orbitRadius = orbitIndex * orbitSpacing;

  const speedByIndex = [8, 12, 16, 20, 24, 28, 32, 36];
  const duration = speedByIndex[orbitIndex - 1];


  const scaleFactor = planet.radius / 6371;
  const scaledSize = scaleFactor * 30;
  const displaySize = Math.max(15, Math.min(scaledSize, 40));

  const playPlanetSound = () => {
    if (planet.audio) {
      setTimeout(() => {
        const sound = new Audio(planet.audio);
        sound.play()
      }, 3000);
    }
  }

  const playClickSound = () => {
    const clickSound = new Audio('/audio/planet-click.wav');
    clickSound.volume = 0.4;
    clickSound.play();
  };

  return (
    <>
      <div
        className="orbit"
        style={{
          width: orbitRadius * 2 + 'px',
          height: orbitRadius * 2 + 'px',
        }}
      ></div>
      <div
        className="planet"
        style={{
          '--orbit-radius': `${orbitRadius}px`,
          animationDuration: `${duration}s`,
        }}
        onClick={() => {
          playPlanetSound();
          playClickSound();
          onSelect(planet);
        }}
      >
        <img
          src={planet.image}
          alt={planet.name}
          style={{
            width: `${displaySize}px`,
            height: `${displaySize}px`,
            objectFit: 'contain',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
            top: 0,
            left: 0,
            cursor: 'pointer',
          }}
        />
      </div>
    </>
  );
}

export default Planet;
