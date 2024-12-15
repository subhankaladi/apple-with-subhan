import Image from "next/image";
import React from "react";
import "./Accessories.css"

const Accessories = () => {
  const items = [
    {
      id: 1,
      image: "/c1.jpg",
      title: "Apple iPhone FineWoven Wallet",
      price: "$54.99",
      rating: "4.1 ⭐",
    },
    {
      id: 2,
      image: "/c2.jpg",
      title: "Apple AirTag",
      price: "$27.00",
      rating: "4.8 ⭐",
    },
    {
      id: 3,
      image: "/c3.jpg",
      title: "Apple USB-C Woven Charge Cable",
      price: "$15.00",
      rating: "4.6 ⭐",
    },
    {
      id: 4,
      image: "/c4.jpg",
      title: "Apple Lightning to SD Card",
      price: "$29.00",
      rating: "4.7 ⭐",
    },
    {
      id: 5,
      image: "/c5.jpg",
      title: "Apple AirTag (4 Pack)",
      price: "$94.00",
      rating: "4.9 ⭐",
    },
    {
      id: 6,
      image: "/c6.jpg",
      title: "Apple 12W USB Power Adapter",
      price: "$15.00",
      rating: "4.5 ⭐",
    },
    {
      id: 7,
      image: "/c7.jpg",
      title: "Apple AirPods (2nd Gen)",
      price: "$99.00",
      rating: "4.8 ⭐",
    },
    {
      id: 8,
      image: "/c8.jpg",
      title: "Apple iPhone 15 Pro Max Case",
      price: "$49.99",
      rating: "4.3 ⭐",
    },
    {
      id: 9,
      image: "/c9.jpg",
      title: "Apple iPhone 13 Pro Leather Case",
      price: "$30.00",
      rating: "4.4 ⭐",
    },
    {
      id: 10,
      image: "/c10.jpg",
      title: "Apple iPhone 15 Pro FineWoven Case",
      price: "$39.99",
      rating: "4.2 ⭐",
    },
    {
      id: 11,
      image: "/c11.jpg",
      title: "Apple iPhone 15 Silicone Case",
      price: "$23.00",
      rating: "4.5 ⭐",
    },
    {
      id: 12,
      image: "/c12.jpg",
      title: "Apple iPhone 12 Silicone Case",
      price: "$44.00",
      rating: "4.6 ⭐",
    },
    {
      id: 13,
      image: "/c13.jpg",
      title: "Apple iPhone 13 Clear Case",
      price: "$35.00",
      rating: "4.7 ⭐",
    },
    {
      id: 14,
      image: "/c14.jpg",
      title: "Apple Lightning to USB Adapter",
      price: "$19.00",
      rating: "4.6 ⭐",
    },
    {
      id: 15,
      image: "/c15.jpg",
      title: "Apple MagSafe Duo Charger",
      price: "$129.00",
      rating: "4.3 ⭐",
    },
  ];

  return (
    <div style={{ padding: "20px" }} className="main-accessories">
      <h1 className="text-4xl" style={{ textAlign: "center", marginBottom: "20px" }}>Accessories</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "20px",
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "200px", 
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f9f9f9", 
              }}
            >
              <Image width={200} height={200}
                src={item.image}
                alt={item.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain", 
                }}
              />
            </div>
            <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{item.title}</h3>
            <p style={{ color: "green", fontWeight: "bold" }}>{item.price}</p>
            <p>{item.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
