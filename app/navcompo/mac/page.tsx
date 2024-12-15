import React from 'react';
import "./Mac.css"
import Image from 'next/image';

const Mac = () => {
  const macItems = [
    {
      title: 'Apple 2024 MacBook Air 13-inch Laptop with M3 chip',
      specs: '13.6-inch Liquid Retina Display, 24GB Unified Memory, 512GB SSD Storage',
      price: '$1,448.00',
      rating: '★ ★ ★ ★ ☆',
      image: '/m1.webp',
    },
    {
      title: 'Apple 2023 MacBook Pro with Apple M2 Pro chip',
      specs: '16.2-inch Liquid Retina XDR Display, 16GB Unified Memory, 512GB SSD Storage',
      price: '$1,869.99',
      rating: '★ ★ ★ ★ ☆',
      image: '/m2.webp',
    },
    {
      title: 'Apple 2022 MacBook Air Laptop with M2 chip',
      specs: '13.6-inch Liquid Retina Display, 16GB RAM, 256GB SSD Storage',
      price: '$1,073.00',
      rating: '★ ★ ★ ★ ★',
      image: '/m3.webp',
    },
    {
      title: '2021 Apple MacBook Pro (14-inch, M1 Pro chip)',
      specs: '10-core CPU and 16-core GPU, 16GB RAM, 1TB SSD',
      price: '$1,656.99',
      rating: '★ ★ ★ ★ ☆',
      image: '/m4.webp',
    },
    {
      title: 'Apple 2024 MacBook Pro Laptop with M4 Pro',
      specs: '14.2-inch Display, 24GB Unified Memory, 512GB SSD Storage',
      price: '$2,078.00',
      rating: '★ ★ ★ ★ ☆',
      image: '/m5.webp',
    },
    {
      title: 'Apple 2024 MacBook Air 15-inch Laptop with M3 chip',
      specs: 'Display, 24GB Unified Memory, 512GB SSD Storage',
      price: '$1623.00',
      rating: '★ ★ ★ ★ ☆',
      image: '/m6.webp',
    },
    {
      title: 'Laptop for Students and Business',
      specs: '128GB Ghost Manta SD Card',
      price: '$318.00',
      rating: '★ ★ ★ ☆ ☆',
      image: '/m7.webp',
    },
    {
      title: 'HP 14" Ultralight Laptop for Students and Business',
      specs: '64GB eMMC+128GB Ghost Manta SD Card',
      price: '$278.00',
      rating: '★ ★ ★ ☆ ☆',
      image: '/m8.webp',
    },
    {
      title: '14 Triple Laptop Screen Extender',
      specs: 'Laptop Monitor Extender for Triple Monitor Display for Mac/Windows',
      price: '$299.00',
      rating: '★ ★ ★ ★ ☆',
      image: '/m9.webp',
    },
    {
      title: 'Apple 2024 MacBook Pro Laptop with M4 Pro',
      specs: '14.2-inch Display, 24GB Unified Memory, 512GB SSD Storage',
      price: '$1,068.00',
      rating: '★ ★ ★ ★ ☆',
      image: '/m10.webp',
    },
  ];

  return (
    <div className="bg-neutral-900 p-6 min-h-screen main-mac">
      <h1 className="text-2xl font-bold mb-6 text-white text-center">
        MacBook Options
      </h1>
      <div className="grid grid-cols-5 gap-6 place-items-center">
        {macItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 shadow-lg rounded-lg flex flex-col items-center text-center"
            style={{ maxWidth: '200px' }}
          >
            <div className="h-52 w-full bg-gray-200 rounded-t-lg overflow-hidden flex items-center justify-center">
              <Image width={200} height={200}
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 space-y-2">
              <h2 className="text-sm font-semibold text-gray-600">{item.title}</h2>
              <p className="text-xs text-gray-600">{item.specs}</p>
              <p className="text-red-500 font-bold">{item.price}</p>
              <p className="text-yellow-400">{item.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mac;
