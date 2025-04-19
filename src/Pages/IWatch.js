// Milan Morasiya
import React from 'react';
import AddToCartButton from './AddToCartButton';
import '../components/Iwatch.css'; 

const iWatchModels = [
  {
    name: 'iWatch Series 7',
    imageSrc: '/Apple Products/iwatch/iwatch_series7_1.1.jpg',
    specifications: [
      'Display: Retina display',
      'Features: ECG, Blood Oxygen app',
      'Connectivity: GPS, Cellular',
    ],
    price: '$399.99',
  },
  {
    name: 'iWatch Series 8',
    imageSrc: '/Apple Products/iwatch/iwatch_series8_1.1.jpeg',
    specifications: [
      'Display: Always-On Retina display',
      'Features: Fall detection, Sleep tracking',
      'Connectivity: GPS, Cellular',
    ],
    price: '$499.99',
  },
  {
    name: 'iWatch Series 9 Gps',
    imageSrc: '/Apple Products/iwatch/iwatch_series9_1.1.jpg',
    specifications: [
      'Display: Always-On Retina display',
      'Features: Fall detection, Sleep tracking','calling',
      'Connectivity: GPS',
    ],
    price: '$499.99',
  },
  

  {
    name: 'iWatch Ultra GPS Cellular',
    imageSrc: '/Apple Products/iwatch/iwatch_series9_1.4.jpg',
    specifications: [
      'Display: Super Retina XDR display',
      'Features: Ultra fitness tracking, Cellular connectivity',
      'Connectivity: GPS, Cellular',
    ],
    price: '$599.99',
  },
];

function IWatch() {
  return (
    <div>
      <div className="banner-section">
        <img src='/Apple Products/iwatch/banner.jpg' alt="iPhone Banner" className="banner-image" />
      </div>
      <h2>IWatch</h2>
    
    <div className="product-page">
      {iWatchModels.map((iWatchModel, index) => (
        <div className="product-details" key={index}>
          <img
            src={iWatchModel.imageSrc}
            alt={`iWatch ${iWatchModel.name}`}
            className="iwatch-image"
          />
          <div className="product-content">
            <h3>{iWatchModel.name}</h3>
            <ul className="specifications">
              {iWatchModel.specifications.map((spec, specIndex) => (
                <li key={specIndex}>{spec}</li>
              ))}
            </ul>
            <AddToCartButton />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default IWatch;
