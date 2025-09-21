import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'القائمة', href: '#menu' },
    { name: 'حولنا', href: '#about' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className="bg-red-600 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>+212 600-576794</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>توصيل سريع في جميع أنحاء مدينة العيون</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/public/image.png" 
              alt="Pizzeria Primo" 
              className="h-12 w-12 transform hover:scale-110 transition-transform duration-300"
            />
            <div className="ml-3">
              <h1 className={`text-2xl font-bold ${scrolled ? 'text-red-600' : 'text-white'} transition-colors duration-300`}>
                Pizzeria Primo
              </h1>
              <p className={`text-sm ${scrolled ? 'text-gray-600' : 'text-red-100'} transition-colors duration-300`}>
                أفضل بيتزا في العيون
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-reverse space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`font-medium transition-all duration-300 hover:text-red-500 relative group ${
                    scrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-lg shadow-xl">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-gray-800 hover:text-red-500 hover:bg-red-50 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;