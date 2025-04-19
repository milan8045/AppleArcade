// Jenilkumar Goti
import React from 'react';
import '../components/Macbook.css';
import AddToCartButton from './AddToCartButton';

const macbookModels = [
  {
    name: 'MacBook Air 13-inch',
    imageSrc: '/Apple Products/Apple/macbook_air_pro_13.jpg',
    description: 'Thin and light, powerful performance with Apple M1 chip.',
    price: '$999.99',
  },
  {
    name: 'MacBook Pro 13-inch',
    imageSrc: '/Apple Products/Apple/macbook_air.jpg',
    description: 'Powerful, professional-grade performance with Apple M1 Pro chip.',
    price: '$1299.99',
  },
  {
    name: 'MacBook Pro 14-inch',
    imageSrc: '/Apple Products/Apple/macbook_pro_13.2.jpg',
    description: 'Stunning 14-inch Retina display, advanced performance with Apple M1 Pro chip.',
    price: '$1499.99',
  },
  {
    name: 'MacBook Air 11-inch',
    imageSrc: '/Apple Products/Apple/macbook_pro13.3.jpg',
    description: 'Compact and lightweight, ideal for on-the-go computing.',
    price: '$899.99',
  },
  {
    name: 'MacBook Pro 16-inch',
    imageSrc: '/Apple Products/Apple/macbook_pro13.4.jpg',
    description: 'Large 16-inch Retina display, desktop-class performance with Intel Core i9 chip.',
    price: '$2399.99',
  }
  
];

function Macbook() {
  return (
    <div>
      
      <div className="banner-section">
        <img src='/Apple Products/Apple/banner.jpg' alt="iPhone Banner" className="banner-image" />
      </div>
      <h2>MacBook</h2>
    
    <div className="product-page">
      

      {macbookModels.map((macbookModel, index) => (
        <div key={index} className="product-details">
          <img
            src={macbookModel.imageSrc}
            alt={`MacBook ${macbookModel.name}`}
            className="macbook-image"
          />
          <div className="product-content">
            <h3>{macbookModel.name}</h3>
            <p>{macbookModel.description}</p>
            <p className="product-price">{macbookModel.price}</p>
          </div>
          <AddToCartButton />
        </div>
      ))}
    </div>
    </div>
  );
}

export default Macbook;
