import React, { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [squares, setSquares] = useState([]);

  const getRandomSize = () => {
    const sizes = ["w-8 h-8", "w-12 h-12", "w-16 h-16", "w-20 h-20"];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  const getRandomDuration = () => {
    return Math.floor(Math.random() * 10 + 5);
  };

  const getRandomDelay = () => {
    return Math.floor(Math.random() * 5 + 1);
  };

  const createSquare = (index) => ({
    id: `square-${index}-${Date.now()}`,
    size: getRandomSize(),
    duration: getRandomDuration(),
    delay: getRandomDelay(),
    left: `${(index / 7) * 100}%`,
  });

  useEffect(() => {
    setSquares(
      Array(8)
        .fill()
        .map((_, index) => createSquare(index))
    );

    const intervalId = setInterval(() => {
      setSquares((prevSquares) =>
        prevSquares.map((square, index) =>
          Math.random() < 0.2 ? createSquare(index) : square
        )
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full h-full">
      {squares.map((square) => (
        <div
          key={square.id}
          className={`square ${square.size} opacity-0 z-10`}
          style={{
            left: square.left,
            animationDuration: `${square.duration}s`,
            animationDelay: `${square.delay}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
