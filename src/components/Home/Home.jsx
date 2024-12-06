// components/Home/Home.js
import React from 'react';
import './Home.css'; // Optional: If you want to add styles specifically for the Home page

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to the Plant Identification App</h2>
      <p>
        Identify any plant with just a photo! Our app uses advanced image recognition technology to help you
        discover the plants around you.
      </p>
      <p>
        Whether you are a gardening enthusiast, a student, or simply curious about the flora in your area,
        our tool is here to assist you.
      </p>
      <p>
        Click the button below to start identifying plants!
      </p>
      <a href="/identify" className="start-button">Start Identifying</a>
    </div>
  );
};

export default Home;