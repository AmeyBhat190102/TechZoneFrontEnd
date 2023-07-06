import React from 'react'


import mastercard from '../../images/mastercard.png'
import visa from '../../images/visa.png'
import paypal from '../../images/paypal.png'

const FooterComponent = () => {
  return (
    <footer className="bg-gray-800 py-8 w-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-start justify-between">
                    
          <div className=" w-full sm:w-auto mb-4 sm:mb-0">
            <p className="text-gray-400 mt-2">TechZone</p>
            <p className="text-gray-400">Phone: 9370103810</p>
            <p className="text-gray-400">Email: ameyBhat19@gmail.com</p>
          </div>
          <div className="w-full sm:w-auto text-sm text-gray-400 mt-4 sm:mt-0">
            <ul className="flex flex-wrap justify-center sm:justify-start w-full">
              <li className="mr-4 mb-2 w-1/4"><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li className="mr-4 mb-2 w-1/4"><a href="#" className="text-gray-400 hover:text-white">Shop</a></li>
              <li className="mr-4 mb-2 w-1/4"><a href="#" className="text-gray-400 hover:text-white">Categories</a></li>
              <li className="mr-4 mb-2 w-1/4"><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li className="mr-4 mb-2 w-1/4"><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li className="mr-4 mb-2 w-1/4"><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li className="mr-4 mb-2 w-1/4"><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li className="mr-4 mb-2 w-1/4"><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li className="mr-4 mb-2 w-1/4"><a href="#" className="text-gray-400 hover:text-white">Shipping & Returns</a></li>
              <li className="mr-4 mb-2 w-1/4"><a href="#" className="text-gray-400 hover:text-white">Track Order</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-auto text-sm text-gray-400 mt-4 sm:mt-0">
            <p>&copy; {new Date().getFullYear()} TechZone Ecommerce Website. All rights reserved.</p>
            <p className="mt-2">Accepted payment methods:</p>
            <div className="flex mt-1">
              <img src={visa} alt="Visa" className="w-16 h-10 mr-2 rounded-lg" />
              <img src={mastercard} alt="Mastercard" className="w-16 h-10 mr-2 rounded-lg" />
              <img src={paypal} alt="PayPal" className="w-16 h-10 mr-2 rounded-lg" />
            </div>
            <div className="flex mt-4 justify-center sm:justify-start">
              <a href="#" className="text-blue-400 hover:underline mr-4">Facebook</a>
              <a href="#" className="text-blue-400 hover:underline mr-4">Twitter</a>
              <a href="#" className="text-blue-400 hover:underline mr-4">Instagram</a>
              <a href="#" className="text-blue-400 hover:underline">YouTube</a>
            </div>
            <div className="mt-4">
              <form className="flex flex-col sm:flex-row items-center">
                <input type="email" placeholder="Enter your email" className="bg-gray-700 text-white rounded-l py-2 px-4 focus:outline-none mb-2 sm:mb-0 sm:mr-2" />
                <button type="submit" className="bg-blue-500 text-white rounded-r py-2 px-4 hover:bg-blue-600 focus:outline-none">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent