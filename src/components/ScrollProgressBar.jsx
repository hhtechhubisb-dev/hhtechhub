// src/components/ScrollProgressBar.jsx
import { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollWidth(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  return (
    <div className="fixed top-[64px] left-0 w-full z-40 h-1 bg-transparent">
      <div
        className="h-full bg-orange-500 transition-all duration-150 ease-out"
        style={{ width: `${scrollWidth}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
