import Link from 'next/link'
import React from 'react'
import "./snav.css"

const SNAV = () => {
  return (
    <div>

      <div className="category-bar">
        <div className="category">
          <Link href="/navcompo/mac">Mac</Link>
        </div>
        <div className="category">
          <Link href="/navcompo/ipad">iPad</Link>
        </div>
        <div className="category">
          <Link href="/navcompo/watch">Watch</Link>
        </div>
        <div className="category">
          <Link href="/navcompo/airpods">AirPods</Link>
        </div>
        <div className="category">
          <Link href="/navcompo/accessories">Accessories</Link>
        </div>
        <div className="category">
          <Link href="/navcompo/phones">iPhones</Link>
        </div>
        <div className="category">
          <Link href="/">Vision</Link>
        </div>
      </div>
    </div>
  )
}

export default SNAV