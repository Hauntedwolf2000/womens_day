import { useEffect, useRef } from "react";
import QRious from "qrious";
import "./QRScanner.css";
import qr from "../resources/URL QR Code.png"

const QRScanner = () => {
  const qrCanvasRef = useRef(null);

  useEffect(() => {
    if (qrCanvasRef.current) {
      new QRious({
        element: qrCanvasRef.current,
        size: 140,
        value: window.location.href,
        level: "H",
      });
    }
  }, []);

  return (
    <><div className="scanner-container">
      <div className="scanner-box">
        {/* Left Section: QR Scanner */}
        <div className="scanner-left">
          <p className="scanner-text">Scan QR Code for location</p>
          <div className="scanner-frame">
            <canvas className="scanner-canvas" />
            <div className="scanner-border"></div>
          </div>
          <div className="scanner-image-box"><img src={qr} alt="Scanner" className="scanner-image" /></div>
          <div className="scanner-line" />
        </div>

        {/* Right Section: Description */}
        <div className="scanner-right">
          <h2 className="scanner-title">The Courtyard Tree</h2>
          <p className="scanner-description">
            Hinkal Bogadi, Ring Rd, Bogadi 2nd Stage, Mysuru, Karnataka 570026
          </p>
          <a href="https://maps.app.goo.gl/KW2VCCeCfC6F6BoG9" >
    Open Google Maps
</a>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default QRScanner;
