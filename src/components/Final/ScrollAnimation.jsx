import React, { useState, useEffect } from "react";
import QRScanner from "./QRScanner";

const Typewriter = ({ text, speed = 100, delay = 2000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, delay);
      return () => clearTimeout(resetTimeout);
    }
  }, [index, text, speed, delay]);

  return <div>{displayedText}</div>;
};

const ScrollAnimation = () => {
  return (
    <><div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "20vh", color: "rgb(73, 9, 130)" }}>
      <h1 style={{color: "#f49000"}}>When ?</h1>
      <h2><Typewriter text="On 17th March" speed={100} delay={2000} /></h2>
    </div>
    
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "5vh", color: "rgb(73, 9, 130)"}}>
        <h2><Typewriter text="From 2pm-5pm" speed={100} delay={2000} /></h2>
      </div>

      <div>
        <QRScanner/>
      </div>
      </>
  );
};

export default ScrollAnimation;
