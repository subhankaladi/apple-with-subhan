import React from 'react';
import './iPad.css';
import Image from 'next/image';
const products = [
    {
      title: "iPad (10th Generation)",
      description: "10.9-inch Liquid Retina Display, 64GB, Wi-Fi 6, 12MP Front/Back Camera",
      price: "$449",
      image: "/pad1.jpg",
    },
    {
      title: "iPad (10th Generation, Wi-Fi, Pink)",
      description: "10.9-inch, 256GB, Touch ID + 1 Year Limited Warranty",
      price: "$599",
      image: "/pad2.jpg",
    },
    {
      title: "iPad (2021, 10.2-inch, Wi-Fi)",
      description: "256GB - Silver with AppleCare (2 Years)",
      price: "$429",
      image: "/pad3.jpg",
    },
    {
      title: "iPad Mini (6th Generation)",
      description: "8.3-inch Liquid Retina Display, 64GB, Wi-Fi 6, 12MP Front/Back Camera",
      price: "$499",
      image: "/pad4.jpg",
    },
    {
      title: "iPad (10.2-inch, Wi-Fi, 32GB)",
      description: "Space Gray (Previous Model)",
      price: "$329",
      image: "/pad5.jpg",
    },
    {
      title: "iPad Air 4 (64GB, Rose Gold)",
      description: "Unlocked (Renewed), All-Day Battery Life",
      price: "$419",
      image: "/pad6.jpg",
    },
    {
      title: "iPad (8th Generation, 10.2-inch)",
      description: "Wi-Fi, 32GB - Silver",
      price: "$299",
      image: "/pad7.jpg",
    },
    {
      title: "Amazon Fire Max 11 Tablet",
      description: "11-inch, 128GB, All-in-one, 14-hour Battery Life",
      price: "$229",
      image: "/pad8.jpg",
    },
    {
      title: "iPad 10th Gen Case with Keyboard",
      description: "7-Color Backlit, Folio Case, Compatible with Pencil Holder",
      price: "$33",
      image: "/pad9.jpg",
    },
    {
      title: "iPad Air 13-inch (M2)",
      description: "256GB, Wi-Fi 6, 12MP Front/Back Camera, Landscape Display",
      price: "$799",
      image: "/pad10.jpg",
    },
    {
      title: "iPad (10.2-inch, Wi-Fi, 128GB)",
      description: "Space Gray (Previous Model)",
      price: "$429",
      image: "/pad11.jpg",
    },
    {
      title: "iPad Stand for Desk",
      description: "360° Rotating Tablet Stand, Foldable, Super Stable for All iPads",
      price: "$33",
      image: "/pad12.jpg",
    },
  ];
  

const iPad = () => {
  return (
    <div className="ipad-container">
      {products.map((product, index) => (
        <div className="card" key={index}>
          <Image width={1000} height={1000} src={product.image} alt={product.title} className="card-image" />
          <h3 className="card-title">{product.title}</h3>
          <p className="card-description">{product.description}</p>
          <p className="card-price">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default iPad;
