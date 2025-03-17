import { useState, useRef, useEffect } from "react";
import "./WomensDay.css";
import FlipCard from "./FlipCard";
import Text2 from "./resources/Text2";  
import React from "react";
import ScrollAnimation from "./Final/ScrollAnimation";
import Counter from "./Counter/Counter";





const WomensDay = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const logoRef = useRef(null);

  // Function to scroll to Logo smoothly
  const scrollToLogo = () => {
    if (logoRef.current) {
      setTimeout(() => {
        logoRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  useEffect(() => {
    // Load jQuery and FlipClock only once
    const loadScripts = async () => {
      if (!window.jQuery) {
        const scriptJQ = document.createElement("script");
        scriptJQ.src = "https://code.jquery.com/jquery-3.6.0.min.js";
        scriptJQ.async = true;
        scriptJQ.onload = () => {
          initializeFlipClock(); // Initialize FlipClock after jQuery loads
        };
        document.body.appendChild(scriptJQ);
      } else {
        initializeFlipClock(); // If jQuery is already loaded, initialize FlipClock
      }
    };

    const initializeFlipClock = () => {
      const scriptFC = document.createElement("script");
      scriptFC.src = "https://cdnjs.cloudflare.com/ajax/libs/flipclock/0.7.8/flipclock.min.js";
      scriptFC.async = true;
      scriptFC.onload = () => {
        if (window.jQuery) {
          // Get current time & target time in LOCAL TIMEZONE
          const targetDate = new Date(2025, 2, 17, 14, 0, 0); // March 17, 2025, at 2:00 PM local time
          const currentTime = new Date();
          const diffInSeconds = Math.max((targetDate - currentTime) / 1000, 0); // Prevent negative countdown

          // Initialize FlipClock
          window.jQuery(".js-flipclock").FlipClock(diffInSeconds, {
            clockFace: "DailyCounter", // Shows Days, Hours, Minutes, Seconds
            countdown: true,
          });
        }
      };
      document.body.appendChild(scriptFC);
    };

    loadScripts();
  }, []);



  
  


  return (
    
    <div className="container-wrapper" style={{ minHeight: "150vh", overflowY: "auto" }}>
      <div className="container" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
        <div className="valentines">
          <div className="envelope"></div>
          <div className="front"></div>
          <div className="card" style={{ top: isOpen ? "-90px" : "0" }}>
            <div className="text">Happy<br />Women's<br />Day, {name}!</div>
            <div className="heart"></div>
          </div>
          <div className="hearts">
            <div className="one" onClick={scrollToLogo}></div>
            <div className="two" onClick={scrollToLogo}></div>
            <div className="three" onClick={scrollToLogo}></div>
            <div className="four" onClick={scrollToLogo}></div>
            <div className="five" onClick={scrollToLogo}></div>
          </div>
        </div>
        <div className="shadow"></div>
      </div>

      <div className="flipcard"><h1><FlipCard/></h1></div>

      <div className="names" ><h1>Celebration starts in:</h1></div>
      <div>
        <Counter/>
      </div>
      
      
      <div>
        <Text2/>
      </div>
      <div>
        
        <ScrollAnimation/>
      </div>
      <div style={{ color: "#f49000", textAlign: "center", padding: "10px" }}>
      Made with ❤️ by Ulipsu Men.
</div>
    </div>
    
  );
};

export default WomensDay;
