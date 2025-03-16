import { useEffect } from "react";
import "./Counter.css"; // Ensure styles are loaded

const Counter = () => {
  useEffect(() => {
    const loadScripts = async () => {
      if (!window.jQuery) {
        const scriptJQ = document.createElement("script");
        scriptJQ.src = "https://code.jquery.com/jquery-3.6.0.min.js";
        scriptJQ.async = true;
        scriptJQ.onload = initializeFlipClock;
        document.body.appendChild(scriptJQ);
      } else {
        initializeFlipClock();
      }
    };

    const initializeFlipClock = () => {
      if (!window.FlipClock) {
        const scriptFC = document.createElement("script");
        scriptFC.src = "https://cdnjs.cloudflare.com/ajax/libs/flipclock/0.7.8/flipclock.min.js";
        scriptFC.async = true;
        scriptFC.onload = setupClock;
        document.body.appendChild(scriptFC);
      } else {
        setupClock();
      }
    };

    const setupClock = () => {
      if (window.jQuery && window.FlipClock) {
        const targetDate = new Date(2025, 2, 17, 14, 0, 0);
        const currentTime = new Date();
        const diffInSeconds = Math.max((targetDate - currentTime) / 1000, 0);

        window.jQuery(".js-flipclock").FlipClock(diffInSeconds, {
          clockFace: "DailyCounter",
          countdown: true,
        });
      }
    };

    loadScripts();

    return () => {
      // Cleanup: Remove FlipClock if necessary
      const flipClock = document.querySelector(".js-flipclock");
      if (flipClock) flipClock.innerHTML = "";
    };
  }, []);

  return (
    <div className="counter-container">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flipclock/0.7.8/flipclock.css" />
      <div className="ag-flipclock-block">
        <div className="ag-format-container">
          <div className="js-flipclock"></div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
