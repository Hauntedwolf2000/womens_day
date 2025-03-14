import { useState } from "react";
import frontImage from "./resources/front.jpg"; // Front Image
import backImage from "./resources/back.jpg";   // Back Image
import "./FlipCard.css"; // Import the CSS file

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flip-container">
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        {/* Front Image */}
        <div className="flip-card-front">
          <img src={frontImage} alt="Front" />
        </div>

        {/* Back Image */}
        <div className="flip-card-back">
          <img src={backImage} alt="Back" />
        </div>

        {/* Flip Button */}
        <button className="flip-button" onClick={() => setIsFlipped(!isFlipped)}>
          Flip Card
        </button>
      </div>
    </div>
  );
};

export default FlipCard;
