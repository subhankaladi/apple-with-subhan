import React from 'react';
import './Pods.css';

const pods = [
  { name: 'Apple AirPods (2nd Gen)', price: '$129.99', image: '/ap1.jpg' },
  { name: 'Apple AirPods (3rd Gen) with Lightning Case', price: '$169.99', image: '/ap2.jpg' },
  { name: 'Apple AirPods (3rd Gen) with MagSafe Case', price: '$179.99', image: '/ap3.jpg' },
  { name: 'Apple AirPods Pro (2nd Gen) with MagSafe Case', price: '$249.99', image: '/ap4.jpg' },
  { name: 'Apple AirPods Pro (2nd Gen) USB-C with MagSafe Case', price: '$249.99', image: '/ap5.jpg' },
  { name: 'Apple AirPods Max Over-Ear Headphones', price: '$549.99', image: '/ap6.jpg' },
  { name: 'Apple AirPods Pro (1st Gen)', price: '$199.99', image: '/ap7.jpg' },
  { name: 'Apple AirPods Pro (2nd Gen, USB-C)', price: '$249.99', image: '/ap8.jpg' },
  { name: 'Apple AirPods (3rd Gen, Lightning Case)', price: '$169.99', image: '/ap9.jpg' },
  { name: 'Apple AirPods (3rd Gen, MagSafe Case)', price: '$179.99', image: '/ap10.jpg' }
];

const Pods = () => {
  return (
    <div className="pods-container">
      {pods.map((pod, index) => (
        <div className="pod-item" key={index}>
          <img src={pod.image} alt={pod.name} />
          <h3>{pod.name}</h3>
          <p>{pod.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Pods;
