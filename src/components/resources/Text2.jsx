import React, { useEffect } from "react";
import "./Text2.css";

const Text2 = () => {
  useEffect(() => {
    const textWrapper = document.querySelector(".ml14 .letters");
    const words = textWrapper.textContent.split(" ");
    textWrapper.innerHTML = words
      .map((word, i) => `<span class='word' style="--i:${i}">${word} </span>`)
      .join(" ");

    // Apply random colors to words
    const wordsElements = document.querySelectorAll(".ml14 .word");
    wordsElements.forEach(word => {
      const hue = Math.floor(Math.random() * 360);
      word.style.color = `hsl(${hue}, 100%, 50%)`;
    });
  }, []);

  return (
    <div>
      <h1 className="ml14">
        <span className="text-wrapper">
          <span className="letters">
            It’s time to take a break, have fun, and celebrate YOU – the incredible women who make ULIPSU sparkle with awesomeness every single day! 💖 Join us for a fun-filled day of laughter, joy, and recognition as we come together to honor all the powerful, passionate, and unstoppable women around us!
          </span>
        </span>
      </h1>
    </div>
  );
};

export default Text2;
