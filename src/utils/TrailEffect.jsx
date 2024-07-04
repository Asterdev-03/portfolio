import React, { useEffect, useState, useRef, useCallback } from "react";

const TrailEffect = () => {
  const [trail, setTrail] = useState([]);
  const [glow, setGlow] = useState([]);
  const prevTrailPositionRef = useRef({ x: 0, y: 0 });
  const trailIdRef = useRef(0);
  const animationFrameRef = useRef(null);

  const colors = [
    "text-red-400",
    "text-blue-400",
    "text-green-400",
    "text-yellow-400",
    "text-purple-400",
  ];

  const traildirections = ["fall-1", "fall-2", "fall-3"];

  const selectRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  const selectRandomTrailDirection = () =>
    traildirections[Math.floor(Math.random() * traildirections.length)];

  const setGlowElement = useCallback((clientX, clientY) => {
    const newGlowElement = {
      x: clientX,
      y: clientY,
      id: `glow-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    };

    setGlow((prev) => [...prev, newGlowElement]);

    setTimeout(() => {
      setGlow((prevGlow) => prevGlow.slice(1));
    }, 300);
  }, []);

  const setTrailElements = (clientX, clientY) => {
    const { x: prevX, y: prevY } = prevTrailPositionRef.current;
    const distance = Math.sqrt(
      Math.pow(clientX - prevX, 2) + Math.pow(clientY - prevY, 2)
    );

    if (distance > 30) {
      const newTrailElement = {
        x: clientX,
        y: clientY,
        color: selectRandomColor(),
        dir: selectRandomTrailDirection(),
        id: `trail-${Date.now()}-${trailIdRef.current++}`,
      };

      setTrail((prev) => [...prev, newTrailElement]);
      prevTrailPositionRef.current = { x: clientX, y: clientY };

      setTimeout(() => {
        setTrail((prevTrail) => prevTrail.slice(1));
      }, 500);
    }
  };

  const handleMouseMove = (e) => {
    setGlowElement(e.clientX, e.clientY);
    setTrailElements(e.clientX, e.clientY);
  };

  useEffect(() => {
    const handleAnimationFrame = () => {
      animationFrameRef.current = requestAnimationFrame(handleAnimationFrame);
    };

    window.addEventListener("mousemove", handleMouseMove);
    handleAnimationFrame();

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed pointer-events-none z-50">
      <div>
        {trail.map(({ x, y, color, dir, id }) => (
          <svg
            key={id}
            className={`star absolute ${color}`}
            style={{
              width: 15,
              left: x - 8,
              top: y - 16,
              animation: `${dir} 0.8s ease-out`,
            }}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      <div>
        {glow.map(({ x, y, id }) => (
          <div
            key={id}
            className="glow absolute"
            style={{
              left: x,
              top: y,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TrailEffect;
