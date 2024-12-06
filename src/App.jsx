import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PlantIdentification from './components/PlantIdentification/PlantIdentification';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Plant Identification App</h1>
          <p>Identify any plant with just a photo!</p>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/identify">Identify Plant</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>

        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/identify" element={<PlantIdentification />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;