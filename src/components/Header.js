import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/90 backdrop-blur-sm border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-brand-blue hover:text-brand-blue/80 transition-colors"
            >
              Ange<span className="text-brand-red">L</span>o
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white  transition-colors uppercase text-sm tracking-wider"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-white  transition-colors uppercase text-sm tracking-wider"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white  transition-colors uppercase text-sm tracking-wider"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white  transition-colors uppercase text-sm tracking-wider"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-brand-blue transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-bg/95 border-t border-white/10">
              <button
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-white hover:text-brand-blue transition-colors uppercase text-sm tracking-wider w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="block px-3 py-2 text-white hover:text-brand-blue transition-colors uppercase text-sm tracking-wider w-full text-left"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-white hover:text-brand-blue transition-colors uppercase text-sm tracking-wider w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-white hover:text-brand-blue transition-colors uppercase text-sm tracking-wider w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
