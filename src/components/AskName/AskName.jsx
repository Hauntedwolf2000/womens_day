import React, { useState } from "react";
import WomensDay from "../WomensDay"; // Ensure this is correctly pointing to your WomensDay file

const AskName = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <>
      {!submitted ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "#fae1dd",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              maxWidth: "400px",
              width: "70%",
            }}
          >
            <form onSubmit={handleSubmit}>
              <h1 style={{ color: "#d63384", fontSize: "1.8rem", fontWeight: "bold", marginBottom: "10px" }}>Happy Women's Day!</h1>
              <p style={{ color: "#666", fontSize: "1rem", marginBottom: "15px" }}>Enter your name to View the greeting:</p>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: "90%",
                  padding: "12px",
                  paddingLeft:"10px",
                  marginTop: "10px",
                  border: "2px solid #d63384",
                  borderRadius: "8px",
                  outline: "none",
                  textAlign: "center",
                  fontSize: "1rem",
                }}
              />
              <button
                type="submit"
                style={{
                  marginTop: "15px",
                  background: "#d63384",
                  color: "white",
                  border: "none",
                  padding: "12px 18px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "1rem",
                  transition: "background 0.3s ease-in-out",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        <WomensDay name={name} />
      )}
    </>
  );
};

export default AskName;
