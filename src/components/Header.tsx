import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  React.useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeDropdown]);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdownClick = (e: React.MouseEvent, itemName: string) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };
  const navigationItems = [
    { name: 'ACCUEIL', path: '/' },
    {
      name: 'LIPŒDÈME', 
      path: '/lipedema',
      dropdown: [
        { name: 'Maladie du Lipœdème', path: '/lipedema#disease' },
        { name: 'Diagnostic', path: '/lipedema#diagnostic' },
        { name: 'Traitement', path: '/lipedema#treatment' },
        { name: 'WAL Liposuccion', path: '/lipedema#wal' }
      ]
    },
    {
      name: 'DOCTEUR',
      path: '/doctor',
      dropdown: [
        { name: 'Parcours', path: '/doctor#journey' },
        { name: 'Publications scientifiques', path: '/doctor#publications' },
        { name: 'Résultats', path: '/doctor#results' }
      ]
    },
    {
      name: 'CENTRE',
      path: '/center',
      dropdown: [
        { name: 'La clinique', path: '/center#clinic' },
        { name: 'Confort & sécurité', path: '/center#comfort' },
        { name: 'Services sur mesure', path: '/center#services' },
        { name: 'Témoignage patient', path: '/center#testimonials' }
      ]
    },
    {
      name: 'PARCOURS',
      path: '/patient-journey',
      dropdown: [
        { name: 'Consultation', path: '/patient-journey#consultation' },
        { name: 'Bilans pré-opératoires', path: '/patient-journey#preop' },
        { name: 'Chirurgie', path: '/patient-journey#surgery' },
        { name: 'Post opératoire', path: '/patient-journey#postop' },
        { name: 'Organisez votre séjour', path: '/patient-journey#stay' }
      ]
    },
    { name: 'ACTUALITÉS', path: '/news' }
  ];

  const isActivePath = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleLinkClick = (path: string) => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };
  return (
    <header className={`nav-professional fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-2 shadow-2xl' : 'py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className={`logo-enhanced rounded-2xl flex items-center justify-center transition-all duration-300 ${
              isScrolled ? 'w-12 h-12' : 'w-16 h-16'
            }`}>
              <span className={`text-white font-black transition-all duration-300 ${
                isScrolled ? 'text-lg' : 'text-2xl'
              }`}>TS</span>
            </div>
            <div>
              <div className={`font-black bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent transition-all duration-300 ${
                isScrolled ? 'text-xl' : 'text-2xl'
              }`}>
                Dr. Tawfik Sefrioui
              </div>
              <span className={`font-bold text-gray-600 bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-1 rounded-full transition-all duration-300 ${
                isScrolled ? 'text-xs' : 'text-sm'
              }`}>
                Expert International Lipœdème
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
              >
                {item.dropdown ? (
                  <button
                    onClick={(e) => handleDropdownClick(e, item.name)}
                    className={`nav-link-enhanced px-4 py-2 text-sm font-semibold rounded-xl flex items-center space-x-1 ${
                      isActivePath(item.path)
                        ? 'text-blue-800 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg border border-blue-200'
                        : 'text-gray-700 hover:text-blue-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => handleLinkClick(item.path)}
                    className={`nav-link-enhanced px-4 py-2 text-sm font-semibold rounded-xl flex items-center space-x-1 ${
                      isActivePath(item.path)
                        ? 'text-blue-800 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg border border-blue-200'
                        : 'text-gray-700 hover:text-blue-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                )}
                
                {item.dropdown && activeDropdown === item.name && (
                  <div className="dropdown-enhanced show">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        onClick={() => handleLinkClick(dropdownItem.path)}
                        className="dropdown-item-enhanced block px-6 py-4 text-base text-gray-700 hover:text-blue-800 font-medium rounded-lg mx-2"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <a
              href="tel:05223-98689"
              className="nav-cta-enhanced px-6 py-3 rounded-2xl flex items-center space-x-3 font-bold text-base"
            >
              <Phone className="w-5 h-5" />
              <span>05223-98689</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-gray-700 p-3 rounded-xl hover:bg-blue-50 hover:text-blue-800 transition-all duration-300 transform hover:scale-110"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-menu-enhanced show lg:hidden py-6 space-y-3">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  className={`block px-6 py-4 text-base font-bold rounded-2xl transition-all duration-300 mx-4 ${
                    isActivePath(item.path)
                      ? 'text-blue-800 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg border border-blue-200'
                      : 'text-gray-700 hover:text-blue-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                  }`}
                  onClick={() => handleLinkClick(item.path)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="ml-6 space-y-2">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        className="block px-4 py-3 text-sm text-gray-600 hover:text-blue-700 transition-all duration-300 font-medium hover:transform hover:translateX-2 rounded-lg mx-2 hover:bg-blue-50"
                        onClick={() => handleLinkClick(dropdownItem.path)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="tel:05223-98689"
              className="block nav-cta-enhanced px-6 py-4 rounded-2xl text-center font-bold text-base mx-4"
              onClick={() => handleLinkClick('tel:05223-98689')}
            >
              Consultation: 05223-98689
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;