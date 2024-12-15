import React from "react";

const phones = [
  { id: 1, title: "Apple iPhone 15 Plus", image: "/ph1.jpg", price: 899, rating: 4.5 },
  { id: 2, title: "Apple iPhone 14 Pro", image: "/ph2.jpg", price: 799, rating: 4.7 },
  { id: 3, title: "Apple iPhone 15 Pro Max", image: "/ph3.jpg", price: 1099, rating: 4.8 },
  { id: 4, title: "Apple iPhone 12 Mini", image: "/ph4.jpg", price: 599, rating: 4.4 },
  { id: 5, title: "Apple iPhone 12 Pro Max", image: "/ph5.jpg", price: 699, rating: 4.6 },
  { id: 6, title: "Apple iPhone 11", image: "/ph6.jpg", price: 499, rating: 4.3 },
  { id: 7, title: "Apple iPhone 14", image: "/ph7.jpg", price: 849, rating: 4.6 },
  { id: 8, title: "Apple iPhone 13", image: "/ph8.jpg", price: 759, rating: 4.5 },
  { id: 9, title: "Apple iPhone 14 Pro Max", image: "/ph9.jpg", price: 999, rating: 4.9 },
  { id: 10, title: "Apple iPhone XR", image: "/ph10.jpg", price: 429, rating: 4.2 },
  { id: 11, title: "Apple iPhone SE", image: "/ph11.jpg", price: 399, rating: 4.3 },
  { id: 12, title: "Apple iPhone XS", image: "/ph12.jpg", price: 649, rating: 4.4 },
  { id: 13, title: "Apple iPhone 13 Mini", image: "/ph13.jpg", price: 679, rating: 4.5 },
  { id: 14, title: "Apple iPhone 12", image: "/ph14.jpg", price: 599, rating: 4.2 },
  { id: 15, title: "Apple iPhone 15 Ultra", image: "/ph15.jpg", price: 1299, rating: 4.9 },
];

const PhoneGrid = () => {
  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-6 text-center">Phone Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
        {phones.map((phone) => (
          <div
            key={phone.id}
            className="border rounded-lg shadow hover:shadow-lg p-4 bg-slate-100"
          >
            <div className="w-full h-48 flex items-center justify-center">
              <img
                src={phone.image}
                alt={phone.title}
                className="object-contain w-full h-full"
              />
            </div>
            <h2 className="text-lg font-semibold mt-2 text-gray-800">{phone.title}</h2>
            <p className="text-gray-700">${phone.price}</p>
            <p className="text-yellow-500">⭐ {phone.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhoneGrid;
