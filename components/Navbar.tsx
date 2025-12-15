import React, { useState } from 'react';
import { Menu, X, BookOpen, User as UserIcon } from 'lucide-react';
import { User } from '../types';

interface NavbarProps {
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogin, onLogout, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => handleNav('home')}>
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">CA Prep Pro</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNav('home')} className="text-gray-600 hover:text-blue-600 font-medium">Home</button>
            <button onClick={() => handleNav('tests')} className="text-gray-600 hover:text-blue-600 font-medium">Test Series</button>
            <button onClick={() => handleNav('pricing')} className="text-gray-600 hover:text-blue-600 font-medium">Pricing</button>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <button onClick={() => handleNav('dashboard')} className="text-blue-600 font-semibold hover:bg-blue-50 px-3 py-2 rounded-md">
                  Dashboard
                </button>
                <button onClick={onLogout} className="text-gray-500 hover:text-red-600 text-sm">Logout</button>
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                  {user.name.charAt(0)}
                </div>
              </div>
            ) : (
              <button
                onClick={onLogin}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
              >
                Login / Register
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => handleNav('home')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Home</button>
            <button onClick={() => handleNav('tests')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Test Series</button>
            <button onClick={() => handleNav('pricing')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Pricing</button>
            {user ? (
              <>
                <button onClick={() => handleNav('dashboard')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-blue-600 bg-blue-50">Dashboard</button>
                <button onClick={onLogout} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50">Logout</button>
              </>
            ) : (
              <button onClick={() => { onLogin(); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 mt-4">Login</button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;