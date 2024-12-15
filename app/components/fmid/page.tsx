import Image from 'next/image'
import React from 'react'
import "./fmid.css"
import Link from 'next/link'

const Fmid = () => {
  return (
    <div className='main-fmid bg-stone-900'>

      <div className='fmid-item'>
        <Image src='/ios.png' alt='ios' width={200} height={200} />
        <h1>Gift Magic.</h1>
        <p>Make their holiday wish come true.</p>
        <button><Link href="components/cart" >Shop Gifts</Link></button>
        </div>

    </div>
  )
}

export default Fmid