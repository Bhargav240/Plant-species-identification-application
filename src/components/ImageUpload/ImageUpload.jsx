// ImageUpload.jsx
import React, { useRef } from 'react';

const ImageUpload = ({ onImageUpload }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onImageUpload(file);
    }
  };

  return (
    <div className="image-upload">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        style={{ display: 'none' }}
      />
      <button onClick={handleButtonClick}>Upload Image</button>
    </div>
  );
};

export default ImageUpload;