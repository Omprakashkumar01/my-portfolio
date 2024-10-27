import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingAnimation = () => {
  const el = useRef(null); // Reference to the element that will display the text

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Competitive Programmer","Web developer", "ML Engineer","Cloud Engineer"], // Phrases to type
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <h2>
      <span className="typing" ref={el}></span>
    </h2>
  );
};

export default TypingAnimation;
