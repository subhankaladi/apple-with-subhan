"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import './smid.css';

const Smid = () => {
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
      className={`flex flex-col items-center main-smid ${
        isVisible ? 'animate' : ''
      }`}
      ref={smidRef} 
    >
      <Image width={800} height={800} src="/heroap.png" alt="iphone" />
      {/* <Image width={800} height={800} src="/iphone16.png" alt="iphone" /> */}
      <video className=' rounded-xl w-3/5' src="/iphone.mp4" loop autoPlay muted></video>

    </div>
  );
};

export default Smid;
