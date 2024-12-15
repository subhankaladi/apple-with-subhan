"use client";

import React from "react";
import "./mid.css";
import Image from "next/image";

const Mid = () => {
  const items = [
    { 
      title: "iPhone 16 Pro", 
      price: "From $1599 or $41.58/mo. for 12 mo.", 
      img: "/s1.jpg",
      link: "/"
    },
    { 
      title: "Apple Watch Series 10", 
      price: "From $399 or $33.25/mo. for 12 mo.", 
      img: "/s2.jpg",
      link: "/"
    },
    { 
      title: "Apple Watch Ultra 2", 
      price: "From $799 or $88.25/mo. for 12 mo.", 
      img: "/s3.jpg",
      link: "/"
    },
    { 
      title: "iPad Air", 
      price: "From $599 or $48/mo. for 12 mo.", 
      img: "/s4.jpg",
      link: "/"
    },
    { 
      title: "MacBook Pro", 
      price: "From $999 or $83/mo. for 12 mo.", 
      img: "/s5.jpg",
      link: "/"
    },
    { 
      title: "Mac Mini", 
      price: "From $899 or $83/mo. for 12 mo.", 
      img: "/s6.jpg",
      link: "/"
    },
    { 
      title: "iPad Pro", 
      price: "From $999 or $88/mo. for 12 mo.", 
      img: "/s7.jpg",
      link: "/"
    },
    { 
      title: "iPhone 16", 
      price: "From $1499 or $88/mo. for 12 mo.", 
      img: "/s8.jpg",
      link: "/"
    },
    { 
      title: "MacBook Pro", 
      price: "From $1599 or $183/mo. for 12 mo.", 
      img: "/s11.jpg",
      link: "/"
    },
    { 
      title: "iMac", 
      price: "From $1299 or $108/mo. for 12 mo.", 
      img: "/s12.jpg",
      link: "/"
    },
  ];

  return (
    <div className="grid-container">
      <h2>
        <span className="highlight">The latest.</span> Let them unwrap wonders.
      </h2>
      <div className="grid">
        {items.map((item, index) => (
          <a 
            href={item.link} 
            className="grid-item" 
            key={index} 
            // target="_blank" 
            rel="noopener noreferrer"
          >
            <Image width={1000} height={1000} src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Mid;
