import React from 'react';
import './cart.css';
import Image from 'next/image';

type CartItemType = {
  id?: number;
  image: string;
  title?: string;
  name?: string;
  description?: string;
  rating?: string;
  price?: string;
  link?: string; // `link` is optional

};


const CartItem = [
  {
    image: '/it.png',
    title: 'Mac',
    link: '/mac',
  },
  {
    image: '/it2.png',
    title: 'iPhone',
  },
  {
    image: '/it3.png',
    title: 'iPad',
  },
  {
    image: '/it4.png',
    title: 'Apple Watch',
  },
  {
    image: '/it5.png',
    title: 'AirPods',
  },
  {
    image: '/it6.png',
    title: 'Accessories',
  },
];

const products = [
  {
    title: 'iPad (10th Generation)',
    description: '10.9-inch Liquid Retina Display, 64GB, Wi-Fi 6, 12MP ',
    price: '$449',
    image: '/pad1.jpg',
  },
  {
    title: 'iPad (10th Generation)',
    description: '10.9-inch, 256GB, Touch ID + 1 Year Limited Warranty',
    price: '$599',
    image: '/pad2.jpg',
  },
  {
    title: 'iPad (2021, 10.2-inch, Wi-Fi)',
    description: '256GB - Silver with AppleCare (2 Years)',
    price: '$429',
    image: '/pad3.jpg',
  },
  {
    title: 'iPad Mini (6th Generation)',
    description: '8.3-inch Liquid Retina Display, 64GB, Wi-Fi 6,',
    price: '$499',
    image: '/pad4.jpg',
  },
  {
    title: 'iPad (10.2-inch, Wi-Fi, 32GB)',
    description: 'Space Gray (Previous Model)',
    price: '$329',
    image: '/pad5.jpg',
  },
];

const watches = [
  { name: 'Apple Watch SE (2nd Gen) 41mm', price: '$249.99', image: '/w1.jpg' },
  { name: 'Apple Watch SE GPS 40mm', price: '$279.99', image: '/w2.jpg' },
  { name: 'Apple Watch Series 9 GPS 41mm', price: '$399.99', image: '/w3.jpg' },
  { name: 'Apple Watch Series 9 GPS 45mm', price: '$429.99', image: '/w4.jpg' },
  { name: 'Apple Watch SE GPS + Cellular 44mm', price: '$359.99', image: '/w6.jpg' },
];

const pods = [
  { name: 'Apple AirPods (2nd Gen) with Lighting Case  ', price: '$129.99', image: '/ap1.jpg' },
  { name: 'Apple AirPods (3rd Gen) `with Lightning Case', price: '$169.99', image: '/ap2.jpg' },
  { name: 'Apple AirPods (3rd Gen) with MagSafe Case', price: '$179.99', image: '/ap3.jpg' },
  { name: 'Apple AirPods Pro (2nd Gen) with MagSafe Case', price: '$249.99', image: '/ap4.jpg' },
  { name: 'Apple AirPods Pro (2nd Gen) USB-C with MagSafe Case', price: '$249.99', image: '/ap5.jpg' },
];

const items = [
  {
    id: 1,
    image: '/c1.jpg',
    title: 'FineWoven Wallet',
    price: '$54.99',
    rating: '4.1 ⭐',
  },
  {
    id: 2,
    image: '/c2.jpg',
    title: 'Apple AirTag',
    price: '$27.00',
    rating: '4.8 ⭐',
  },
  {
    id: 3,
    image: '/c3.jpg',
    title: 'Apple USB-C Cable',
    price: '$15.00',
    rating: '4.6 ⭐',
  },
  {
    id: 4,
    image: '/c4.jpg',
    title: 'Apple to SD Card',
    price: '$29.00',
    rating: '4.7 ⭐',
  },
  {
    id: 5,
    image: '/c5.jpg',
    title: 'Apple AirTag (4 Pack)',
    price: '$94.00',
    rating: '4.9 ⭐',
  },
];

const Cart = () => {
  const renderRow = (data: CartItemType[], isDetailed = false) => (
    <div className="cart-row">
      {data.map((item: CartItemType, index: number) => (
        <div key={index} className="cart-item">
          <Image width={200} height={200} src={item.image} alt={item.title || item.name || 'Item'} />
          <div className="item-details">
            <h3>{item.title || item.name}</h3>
            {isDetailed && <p>{item.description || item.rating}</p>}
            <p>{item.price}</p>
            <button className="cart-button">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
  

  return (
    <div>
      <div className="cart-main">
        <span className="h1">Store.</span>{' '}
        <span className="gift">Gift magic this holiday.</span>
      </div>
      <div className="main-cart">
        {renderRow(CartItem)}
        {renderRow(products, true)}
        {renderRow(watches)}
        {renderRow(pods)}
        {renderRow(items, true)}
      </div>
    </div>
  );
};

export default Cart;
