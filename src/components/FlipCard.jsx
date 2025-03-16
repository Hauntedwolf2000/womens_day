import { useState } from "react";
import frontImage from "./resources/front.jpg";
import backImage from "./resources/back.jpg";
import confetti from "canvas-confetti";
import "./FlipCard.css"; // Import CSS

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 }, // Adjust origin to make it more realistic
    });
  };

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
      </div>

      {/* Move the button outside the flipping container */}
      <button className="flip-button" onClick={() => { 
    setIsFlipped(!isFlipped); 
    handleConfetti(); 
}}>
  Celebrate 🎉
</button>
    </div>
  );
};

export default FlipCard;
