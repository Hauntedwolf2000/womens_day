import './App.css';
import WomensDay from './components/WomensDay';
import logo from './components/resources/logo.png';

function App() {
  return (
    <div className="App">
      <div
        className="logo-container"
        style={{
          position: 'relative', // Keeps logo fixed in place
          top: '20px', // 10px from the top
          left: '20px', // 10px from the left
          zIndex: '9999', // Ensures logo is on top of other elements
        }}
      >
        <img
          src={logo}
          alt="Logo"
          className="logo"
          style={{
            width: '200px', // Set logo width
            height: 'auto', // Maintain aspect ratio
          }}
        />
      </div>
      <WomensDay />
        
    </div>
  );
}

export default App;
