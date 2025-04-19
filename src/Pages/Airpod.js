// Milan Morasiya anh Harshil Katrodiya
import React from 'react';
import '../components/Airpod.css'; 
import AddToCartButton from './AddToCartButton';

const airpodModels = [
  {
    name: 'AirPods 3rd Gen',
    imageSrc: '/Apple Products/headphones/1.1 airpods_pro3.jpg',
    description: 'Spatial audio, Adaptive EQ, and a redesigned contoured shape.',
    price: '$179.99',
  },

  {
    name: 'AirPods 2nd Gen',
    imageSrc: '/Apple Products/headphones/1.3 airpods_pro3.jpg',
    description: 'Improved battery life and the introduction of the wireless charging case.',
    price: '$159.99',
  },
  {
    name: 'AirPods Pro',
    imageSrc: '/Apple Products/headphones/1.4 airpods_pro3.jpg',
    description: 'Active Noise Cancellation, Transparency mode, and customizable fit.',
    price: '$249.99',
  },
  {
    name: 'AirPods 1st Gen',
    imageSrc: '/Apple Products/headphones/1.2 airpods_pro3.jpg',
    description: 'Classic AirPods with the iconic design and great sound quality.',
    price: '$129.99',
  },
  {
    name: 'AirPods Max',
    imageSrc: '/Apple Products/headphones/2.1 airpods_por2.jpg',
    description: 'Over-ear headphones with high-fidelity audio and adaptive EQ.',
    price: '$549.99',
  },
  {
    name: 'AirPods Pro 2',
    imageSrc: '/Apple Products/headphones/2.2 airpods_por2.jpg',
    description: 'Rumored to feature enhanced noise cancellation and improved sound quality.',
    price: '$545.78',
  },
  {
    name: 'AirPods 4th Gen',
    imageSrc: '/Apple Products/headphones/2.3 airpods_por2.jpg',
    description: 'Expected to come with new features and improvements.',
    price: '$245.89',
  },
  {
    name: 'headphone Studio',
    imageSrc: '/Apple Products/headphones/3.1 Apple AirPods Max.jpg',
    description: 'Over-ear headphones with premium audio quality and active noise cancellation.',
    price: '$456.78',
  },
  {
    name: 'Headphone Pro Lite',
    imageSrc: '/Apple Products/headphones/3.2 Apple AirPods Max.jpg',
    description: 'Rumored to be a more affordable version of the AirPods Pro.',
    price: '$456.77',
  },
  {
    name: 'AirPods X',
    imageSrc: '/Apple Products/headphones/airpods_pro_2.jpg',
    description: 'Speculated to be a sports-oriented version with water resistance.',
    price: '$399.99',
  },
];

function Airpod() {
  return (
    <div>
      
      <div className="banner-section">
        <img src='/Apple Products/iphone/banner.jpg' alt="iPhone Banner" className="banner-image" />
      </div>
      <h2>Airpod</h2>
   
    <div className="product-page">
      
      {airpodModels.map((airpodModel, index) => (
        <div key={index} className="product-details">
          <img
            src={airpodModel.imageSrc}
            alt={`Airpod ${airpodModel.name}`}
            className="airpod-image"
          />
          <div className="product-content">
            <h3>{airpodModel.name}</h3>
            <p>{airpodModel.description}</p>
            <p className="product-price">{airpodModel.price}</p>
          </div>
          <AddToCartButton />
        </div>
      ))}
    </div>
    </div>
  );
}

export default Airpod;
