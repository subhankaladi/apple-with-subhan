import React from 'react'
import './about.css'
import Image from 'next/image'

const Page = () => {
  return (
    <div className='about-container'>
      <div className='image-container'>
        <Image
          src='/subhan.png' 
          alt='Subhan Kaladi' 
          className='about-image' 
          width={1024} 
          height={576} 
        ></Image>
      </div>
      <div className='content-container'>
        <h1 className='heading'>Welcome to My iOS Tech Hub: Exploring the Future of iPhones</h1>
        <p className='intro-text'>
          Hello, I am <strong>Subhan Kaladi</strong>, the creator of this iOS-focused website.
          After putting in <strong>19 hours</strong> of relentless effort, I’ve developed a platform dedicated to everything iOS.
          From the latest iPhones to exciting tech accessories, this website is your go-to resource for iOS enthusiasts.
        </p>
        <div className='content'>
          <p>What you will find here:</p>
          <ul>
            <li>Detailed insights on the latest iPhones and their features</li>
            <li>Reviews of iOS accessories and apps</li>
            <li>Exclusive tips for maximizing iPhone performance</li>
            <li>Tech updates related to Apple ecosystem</li>
          </ul>
        </div>
        <p className='thanks'>
          Thank you for exploring this platform. Stay connected for more updates and in-depth content about iOS technology!
        </p>
      </div>
    </div>
  )
}

export default Page;
