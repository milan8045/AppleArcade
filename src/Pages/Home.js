// Harshil Katrodiya
import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Home.css';

const Home = () => {
  const productSections = [
    {
      name: 'iPhone',
      image: '/Apple Products/iphone/iphon14promax_1.1.jpg',
      link: '/iphone',
      description: 'Discover latest iPhones with powerful performance and stunning cameras.'
    },
    {
      name: 'AirPods',
      image: '/Apple Products/headphones/1.4 airpods_pro3.jpg',
      link: '/airpod',
      description: 'Experience wireless freedom and incredible sound with AirPods.'
    },
    {
      name: 'iWatch',
      image: '/Apple Products/iwatch/iwatch_series8_1.1.jpeg',
      link: '/iwatch',
      description: 'Stay connected and track your health with the newest Apple Watches.'
    },
    {
      name: 'MacBook',
      image: '/Apple Products/Apple/macbook_pro_13.2.jpg',
      link: '/macbook',
      description: 'Power up your productivity with sleek and powerful MacBooks.'
    }
  ];

  return (
    <div className="home-page">
      <header className="hero-banner">
        <h1>Welcome to Apple Arcade</h1>
        <p>Explore our exclusive Apple product lineup</p>
      </header>

      <section className="product-grid">
        {productSections.map((product, index) => (
          <div key={index} className="product-preview">
            <img src={product.image} alt={product.name} className="preview-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <Link to={product.link} className="explore-button">Explore {product.name}</Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
