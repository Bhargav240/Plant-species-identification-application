// PlantIdentification.jsx
import React, { useState, useRef } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import PlantInfo from '../PlantInfo/PlantInfo';
import './PlantIdentification.css';

const API_KEY = 'AIzaSyCzSCLbgvNeTVP004pLQ-5-Qf7_kFT8JPM'; // Replace with your actual API key

const PlantIdentification = () => {
  const [plantInfo, setPlantInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      identifyPlant(file);
    }
  };

  const identifyPlant = async (imageFile) => {
    if (!imageFile) {
      setError('Please select an image first');
      return;
    }

    setLoading(true);
    setError(null);
    setPlantInfo(null);
    setPreviewImage(URL.createObjectURL(imageFile));

    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const imageData = await fileToGenerativePart(imageFile);

      const prompt = `Analyze this plant image and provide the following information:
        1. Common name
        2. Scientific name
        3. Brief description
        4. Common uses or benefits
        Please format the response clearly with headings.`;

      const result = await model.generateContent([prompt, imageData]);
      const response = await result.response;
      const text = response.text();

      if (!text) {
        throw new Error('No response received from the API');
      }

      setPlantInfo(text);
    } catch (err) {
      console.error('API Error:', err);
      setError(`Error: ${err.message || 'Failed to identify plant'}. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  const fileToGenerativePart = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result.split(',')[1];
        resolve({
          inlineData: {
            data: base64Data,
            mimeType: file.type
          }
        });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="plant-identification">
      <div className="upload-section">
        <h2>Plant Identification</h2>
        <p>Upload a clear image of a plant to identify it</p>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          style={{ display: 'none' }}
        />
        <button className="upload-button" onClick={handleUploadClick}>
          <span className="upload-icon"></span>
          Upload Image
        </button>
      </div>

      {previewImage && (
        <div className="preview-image">
          <img src={previewImage} alt="Uploaded plant" />
        </div>
      )}

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Analyzing plant image...</p>
        </div>
      )}

      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}

      {plantInfo && <PlantInfo info={plantInfo} />}
    </div>
  );
};

export default PlantIdentification;