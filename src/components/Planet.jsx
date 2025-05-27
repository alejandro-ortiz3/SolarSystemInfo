function Planet({ planet, orbitIndex, onSelect }) {
  const orbitSpacing = 40;
  const orbitRadius = orbitIndex * orbitSpacing;

  const speedByIndex = [8, 12, 16, 20, 24, 28, 32, 36];
  const duration = speedByIndex[orbitIndex - 1];

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
        onClick={() => onSelect(planet)}
      >
        <img src={planet.image} alt={planet.name} />
      </div>
    </>
  );
}

export default Planet;
