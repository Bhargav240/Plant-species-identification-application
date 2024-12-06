// PlantInfo.jsx
import React from 'react';
import './PlantInfo.css';

const PlantInfo = ({ info }) => {
  // Function to parse and structure the information
  const parseInfo = (text) => {
    const sections = text.split('\n').filter(line => line.trim());
    const structuredInfo = {
      commonName: '',
      scientificName: '',
      description: '',
      uses: ''
    };

    let currentSection = '';
    sections.forEach(line => {
      // Remove asterisks and trim the line
      const cleanLine = line.replace(/\*/g, '').trim();

      if (cleanLine.toLowerCase().includes('common name')) {
        currentSection = 'commonName';
        structuredInfo.commonName = cleanLine.split(':')[1]?.trim() || '';
      } else if (cleanLine.toLowerCase().includes('scientific name')) {
        currentSection = 'scientificName';
        structuredInfo.scientificName = cleanLine.split(':')[1]?.trim() || '';
      } else if (cleanLine.toLowerCase().includes('brief description')) {
        currentSection = 'description';
      } else if (cleanLine.toLowerCase().includes('common uses') || cleanLine.toLowerCase().includes('benefits')) {
        currentSection = 'uses';
      } else if (currentSection === 'description') {
        structuredInfo.description += cleanLine + ' ';
      } else if (currentSection === 'uses') {
        structuredInfo.uses += cleanLine + ' ';
      }
    });

    // Trim all fields
    Object.keys(structuredInfo).forEach(key => {
      structuredInfo[key] = structuredInfo[key].trim();
    });

    return structuredInfo;
  };

  const plantData = parseInfo(info);

  const renderSection = (title, content, isItalic = false) => (
    <div className="info-item">
      <h3>{title}</h3>
      {isItalic ? 
        <p><em>{content || `No ${title.toLowerCase()} available`}</em></p> :
        <p>{content || `No ${title.toLowerCase()} available`}</p>
      }
    </div>
  );

  return (
    <div className="plant-info-container">
      <div className="plant-info-card">
        <h2 className="plant-info-title">Plant Information</h2>

        <div className="info-section">
          {renderSection('Common Name', plantData.commonName)}
          {renderSection('Scientific Name', plantData.scientificName, true)}
        </div>

        <div className="info-section">
          {renderSection('Description', plantData.description)}
        </div>

        <div className="info-section">
          {renderSection('Common Uses & Benefits', plantData.uses)}
        </div>
      </div>
    </div>
  );
};

export default PlantInfo;