import React from 'react';
import './Watch.css';

const watches = [
  { name: 'Apple Watch SE (2nd Gen) 41mm', price: '$249.99', image: '/w1.jpg' },
  { name: 'Apple Watch SE GPS 40mm', price: '$279.99', image: '/w2.jpg' },
  { name: 'Apple Watch Series 9 GPS 41mm', price: '$399.99', image: '/w3.jpg' },
  { name: 'Apple Watch Series 9 GPS 45mm', price: '$429.99', image: '/w4.jpg' },
  { name: 'Apple Watch SE GPS + Cellular 44mm', price: '$359.99', image: '/w6.jpg' },
  { name: 'Apple Watch Series 9 GPS + Cellular 41mm', price: '$499.99', image: '/w7.jpg' },
  { name: 'Apple Watch SE (2nd Gen) 44mm', price: '$279.99', image: '/w9.jpg' },
  { name: 'Apple Watch Series 8 GPS 41mm', price: '$349.99', image: '/w10.jpg' },
  { name: 'Apple Watch Series 8 GPS 45mm', price: '$379.99', image: '/w11.jpg' },
  { name: 'Apple Watch SE GPS 44mm', price: '$259.99', image: '/w12.jpg' },
  { name: 'Apple Watch Series 9 GPS 44mm', price: '$419.99', image: '/w13.jpg' },
  { name: 'Apple Watch Series 9 GPS + Cellular 44mm', price: '$539.99', image: '/w14.jpg' },
  { name: 'Apple Watch Series 8 GPS + Cellular 41mm', price: '$449.99', image: '/w15.jpg' },
  { name: 'Apple Watch Series 8 GPS + Cellular 45mm', price: '$479.99', image: '/w16.jpg' },
  { name: 'Apple Watch Ultra GPS + Cellular', price: '$799.99', image: '/w17.jpg' },
  { name: 'Apple Watch Ultra 2 GPS + Cellular', price: '$849.99', image: '/w18.jpg' },
  { name: 'Apple Watch SE (Product RED) GPS', price: '$279.99', image: '/w19.jpg' },
  { name: 'Apple Watch SE GPS 40mm Starlight', price: '$249.99', image: '/w20.jpg' }
];

const Watch = () => {
  return (
    <div className="watch-container">
      {watches.map((watch, index) => (
        <div className="watch-item" key={index}>
          <img src={watch.image} alt={watch.name} />
          <h3>{watch.name}</h3>
          <p>{watch.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Watch;
