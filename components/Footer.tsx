import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CA Prep Pro</h3>
            <p className="text-gray-400 text-sm">
              India's most trusted online test series platform for CA Foundation, Intermediate, and Final students.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Test Series</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400">CA Foundation</a></li>
              <li><a href="#" className="hover:text-blue-400">CA Intermediate</a></li>
              <li><a href="#" className="hover:text-blue-400">CA Final</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-400">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Connect</h4>
            <p className="text-sm text-gray-400 mb-2">support@capreppro.com</p>
            <p className="text-sm text-gray-400">+91 98765 43210</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} CA Prep Pro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;