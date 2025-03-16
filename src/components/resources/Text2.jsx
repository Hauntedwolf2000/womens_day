import React, { useState, useEffect } from "react";
import "./Text2.css";

const textContent = `It’s time to take a break, have fun, and celebrate YOU – 
the incredible women who make ULIPSU sparkle with awesomeness every single day! 💖 
Join us for a fun-filled day of laughter, joy, and recognition as we come together 
to honor all the powerful, passionate, and unstoppable women around us!`;

const Text2 = () => {
  const [displayedText, setDisplayedText] = useState("");
  const speed = 50; // Typing speed in ms

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < textContent.length) {
        setDisplayedText((prev) => prev + textContent.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="ml14">
        <span className="text-wrapper">
          <span className="letters">
          <h5>{displayedText}</h5>
          </span>
        </span>
      </h1>
    </div>
  );
};

export default Text2;
