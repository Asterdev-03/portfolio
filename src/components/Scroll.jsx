import React, { useEffect, useState } from "react";

const Scroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-screen bg-white relative overflow-hidden">
      <div
        className="bg-red-500 absolute top-0 left-0 right-0"
        style={{ transform: `translateY(${scrollY}px)` }}
      >
        Scroll down to see the animation
      </div>
    </div>
  );
};

export default Scroll;
