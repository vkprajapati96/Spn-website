import React from 'react'


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between gap-8 mb-8">
        
        {/* Logo and Description Section */}
        <div className="text-center md:text-left">
          <h4 className="text-white font-bold mb-4">ECommerceServices4u</h4>
<p className="max-w-full  md:max-w-sm mx-auto md:mx-0 text-sm leading-relaxed">
  ecomerceservies4u helps businesses grow online with complete eCommerce solutions
  from store setup and product listing to marketing, optimization, and sales growth
  across leading marketplaces and websites.
</p>
        </div>

        {/* Company Links Section */}
        <div className="text-center md:text-left">
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Service</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links Section */}
        <div className="text-center md:text-left">
          <h4 className="text-white font-bold mb-4">Follow Us</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Facebook</a></li>
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white">Twitter</a></li>
          </ul>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="border-t border-gray-700 pt-8 text-center text-sm">
        <p>&copy; 2025 ECommerceServices4u. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
