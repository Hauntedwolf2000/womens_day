import React, { useState, useEffect } from "react";
import "./Text2.css";

const textContent = `It’s time to take a break, have fun, and celebrate YOU – 
the incredible women who make ULIPSU sparkle with awesomeness every single day! 💖 
Join us for a fun-filled day of laughter, joy, and recognition as we come together 
to honor all the powerful, passionate, and unstoppable women around us!`;

const Text2 = () => {
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 100; // Adjust typing speed (milliseconds per character)
  const delayBetweenLoops = 60000; // 3-minute delay before restarting

  useEffect(() => {
    let i = 0;

    const typeText = () => {
      if (i < textContent.length) {
        setDisplayedText(textContent.slice(0, i + 1)); // Slices the string instead of concatenating
        i++;
        setTimeout(typeText, typingSpeed);
      } else {
        setTimeout(() => {
          setDisplayedText(""); // Clears text after delay
          i = 0;
          typeText(); // Restart typing effect
        }, delayBetweenLoops);
      }
    };

    typeText(); // Start typing effect

    return () => setDisplayedText(""); // Cleanup on unmount
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
