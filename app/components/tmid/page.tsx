"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Tmid = () => {
  const iphones = [
    {
      id: 1,
      title: 'Apple iPhone 14',
      price: '$999',
      image: '/iphone14.png',
    },
    {
      id: 2,
      title: 'Apple iPhone 15',
      price: '$1299',
      image: '/iphone15.png',
    },
    {
      id: 3,
      title: 'Apple iPhone 16',
      price: '$1499',
      image: '/iphone166.png',
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const smidRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.7 }
    );

    if (smidRef.current) {
      observer.observe(smidRef.current);
    }

    return () => {
      if (smidRef.current) {
        observer.unobserve(smidRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`main-smid ${
        isVisible ? 'animate' : ''
      } flex flex-col items-center justify-center `}
      ref={smidRef}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl p-4 ">
        {iphones.map((iphone) => (
          <div
            key={iphone.id}
            className="iphone-card flex flex-col items-center rounded-lg shadow-lg p-4  "
          >
            <Image
              width={200}
              height={200}
              src={iphone.image}
              alt={iphone.title}
              className="rounded-md transform transition duration-300 hover:scale-105"
            />
            <h3 className="text-lg font-semibold mt-4">{iphone.title}</h3>
            <p className="text-white-700 mt-2">{iphone.price}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tmid;
