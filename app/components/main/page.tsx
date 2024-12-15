"use client"

import React, { useState , useEffect} from 'react'
import "./main.css"
import Image from 'next/image';


const Main = () => {

  const [currentImage, setCurrentImage] = useState(0);
const images = [
  "/ipp11.png",
  "/ipp22.png",
  "/ipp33.png",
  "/ipp44.png",
  "/ipp55.png",
  "/ipp66.png",
 
]

useEffect (() => {
  const interval = setInterval(() => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  }, 3000);
  return () => clearInterval(interval);
} , [images.length])

  return (
    <div className='main-content'>

      <div className="carousel">

        <Image width={1000} height={1000} src={images   [currentImage]} alt={`slide ${currentImage + 1}`} />
        <div className="dots">
          {images.map((_,index) =>(
            <span key={index} className={`dot ${index === currentImage ? "active" : ""}`} onClick={() => setCurrentImage(index)}></span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Main