import Link from "next/link";
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaSnapchat,
  FaTiktok,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
   
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
         
          <div>
            <h4 className="font-bold text-lg mb-4 border-b-2 border-gray-600 pb-2">ABOUT</h4>
            <ul className="flex flex-col space-y-2">
              <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
              <li><a href="/navcompo/about" className="hover:text-gray-400">About-us</a></li>
              <li><a href="#" className="hover:text-gray-400">Media Page</a></li>
              <li><a href="/navcompo/contact" className="hover:text-gray-400">Conatct-us</a></li>
             
            </ul>
          </div>

          
          <div>
            <h4 className="font-bold text-lg mb-4 border-b-2 border-gray-600 pb-2">SUPPORT</h4>
            <ul className="flex flex-col space-y-2">
              <li><a href="#" className="hover:text-gray-400">Return Form</a></li>
              <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-400">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-gray-400">Track Your Order</a></li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-bold text-lg mb-4 border-b-2 border-gray-600 pb-2">QUICK LINKS</h4>
            <ul className="flex flex-col space-y-2">
              <li><a href="/navcompo/mac" className="hover:text-gray-400">Mac</a></li>
              <li><a href="/navcompo/ipad" className="hover:text-gray-400">iPad</a></li>
              <li><a href="/navcompo/watch" className="hover:text-gray-400">Watch</a></li>
              <li><a href="/navcompo/airpods" className="hover:text-gray-400">AirPods</a></li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-bold text-lg mb-4 border-b-2 border-gray-600 pb-2">GET IN TOUCH</h4>
            <p className="flex items-center gap-2 mb-2">
              <FaPhoneAlt /> 92 329 3086256
            </p>
            <p className="flex items-center gap-2 mb-4">
              <FaEnvelope /> <a href="mailto:subhankaladi@gmail.com" className="hover:text-gray-400">Email us</a>
            </p>
            <h4 className="font-bold text-lg mb-4">Follow us</h4>
            <div className="flex items-center gap-4">
              <Link target="_blank" href="https://www.linkedin.com/in/subhan-kaladi-6242bb31b/" className="hover:text-gray-400"><FaLinkedin />   </Link>
              <Link target="_blank" href="https://www.facebook.com/subhanallahkaladi" className="hover:text-gray-400"><FaFacebook />   </Link>
              <Link target="_blank" href="https://www.youtube.com/channel/UCb_ooGAIKEtI8bWSWnsQqCw" className="hover:text-gray-400"><FaYoutube />    </Link>
              {/* <Link target="_blank" href="#" className="hover:text-gray-400"><FaTwitter />    </Link> */}
              <Link target="_blank" href="https://www.instagram.com/subhan_kaladi/" className="hover:text-gray-400"><FaInstagram />  </Link>
              <Link target="_blank" href="https://snapchat.com/t/fhjXKTfW" className="hover:text-gray-400"><FaSnapchat />   </Link>
              <Link target="_blank" href="https://www.tiktok.com/@subhan_kaladi" className="hover:text-gray-400"><FaTiktok />     </Link>
            </div>
          </div>
        </div>

       
        <hr className="border-gray-700 my-8" />
        <p className="text-center text-sm">
          © 2024 Apple Pvt Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
