// Jay Barot 
import React from 'react';
import AddToCartButton from './AddToCartButton';
import '../components/Iphone.css';


const iphoneModels = [
  {
    name: 'iPhone 13',
    imageSrc: '/Apple Products/iphone/iphon13_1.2.jpg',
    specifications: [
      'Display: Super Retina XDR display',
      'Processor: A15 Bionic chip',
      'Storage: 128GB',
    ],
  },
  {
    name: 'iPhone 14',
    imageSrc: '/Apple Products/iphone/iphon14_1.1.jpg',
    specifications: [
      'Display: Super Retina XDR display',
      'Processor: A16 Bionic chip',
      'Storage: 256GB',
    ],
  },
  {
    name: 'iPhone 14 Pro',
    imageSrc: '/Apple Products/iphone/iphon14promax_1.1.jpg',
    specifications: [
      'Display: Retina display',
      'Processor: A17 Bionic chip',
      'Storage: 128GB',
    ],
  },
 
];

function IPhone() {
  return (
    <div>
      <div className="banner-section">
        <img src='/Apple Products/iphone/banner.jpg' alt="iPhone Banner" className="banner-image" />
      </div>

    <h2>IPhone</h2>
   
    <div>
      
        <div className="product-page">
        {iphoneModels.map((iphoneModel, index) => (
          <div className="product-details">
            <div className="product-description">
              <img
                src={iphoneModel.imageSrc}
                alt={`iPhone ${iphoneModel.name}`}
                className="iphone-image"
              />
              <div className="product-content">
                <h3>{`${iphoneModel.name} Specifications`}</h3>
                <ul>
                  {iphoneModel.specifications.map((spec, specIndex) => (
                    <li key={specIndex}>{spec}</li>
                  ))}
                </ul>
              </div>
            </div>
            <AddToCartButton />
          </div>
          ))}
        </div>
      
    </div>
    </div>
  );
}

export default IPhone;
