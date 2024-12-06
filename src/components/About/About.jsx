// components/About/About.js
import React from 'react';
import './About.css'; // Optional: If you want to add styles specifically for the About page

const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>
        Welcome to the Plant Identification App! Our mission is to help you identify any plant using just a photo.
        With advanced image recognition technology and a comprehensive database, we aim to provide accurate and
        reliable information about various plant species.
      </p>
      <p>
        Whether you're a gardening enthusiast, a botany student, or just curious about the plants around you,
        our app is designed to make plant identification easy and accessible for everyone.
      </p>
      <p>
        We continuously update our database to include new species and improve our recognition algorithms.
        Thank you for using our app, and happy plant identifying!
      </p>
    </div>
  );
};

export default About;