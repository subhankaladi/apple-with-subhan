"use client"
import { useState } from 'react';
import { IoCartOutline } from "react-icons/io5";
import "./navbar.css";
import Link from 'next/link';
import { FaApple } from "react-icons/fa";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'



const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <ClerkProvider>
    <div>
      <div className="main-navbar">
        
        <Link href={"/"}>
          <h2>
          <FaApple />STORE
          </h2>
        </Link>

       
        <div className="hamburger" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <SignedOut>
          <SignInButton/>
          </SignedOut>
        <SignedIn>
        <ul className={isMobileMenuOpen ? "mobile-menu show" : ""}>
          <li> <Link href="/"> Home    </Link> </li>
          <li> <Link href="/navcompo/about"> About   </Link> </li>
          <li> <Link href="/navcompo/contact"> Contact </Link> </li>
          <li> <Link href="/"> </Link> </li>
        </ul>
        </SignedIn>
        
        
<div className='flex gap-5'>
        
        <Link href="/components/cart">
          <b>
            <h2><IoCartOutline /> CART</h2>
            
          </b>
        </Link>

        <UserButton/> 
        </div>
        
      </div>
    </div>
    </ClerkProvider>
  );
};

export default Navbar;
