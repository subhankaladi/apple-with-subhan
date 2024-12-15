"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import './smid.css';

const Smid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const smidRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = smidRef.current; // Save a stable reference to smidRef.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.7 } // Trigger when 70% of the element is visible
    );

    if (currentRef) {
      observer.observe(currentRef); // Observe the element
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Unobserve the same element
      }
    };
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  return (
    <div
      className={`flex flex-col items-center main-smid ${
        isVisible ? 'animate' : ''
      }`}
      ref={smidRef} // Attach the ref to the target element
    >
      <Image width={800} height={800} src="/heroap.png" alt="iphone" />
      <video className="rounded-xl w-3/5" src="/iphone.mp4" loop autoPlay muted></video>
    </div>
  );
};

export default Smid;
