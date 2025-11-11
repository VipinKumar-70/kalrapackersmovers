import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = () => {
    setIsOpen(false);
    // Scroll to top when navigating
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { 
      name: "Services", 
      path: "/services",
      submenu: [
  { name: "Home Relocation", path: "/services/Home-Relocation" },
  { name: "Office Relocation", path: "/services/Office-Relocation" },
  { name: "Car Bike Relocation", path: "/services/Car-Bike-Relocation" },
  { name: "Packaging of Goods", path: "/services/Packaging-of-Goods" },
  { name: "Trained Team", path: "/services/Trained-Team" },
  { name: "Warehouse and Storage Services", path: "/services/Warehouse-and-Storage-Services" },
      ]
    },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-600 py-1.5 sm:py-2 px-2 sm:px-4 lg:px-6 border-b border-blue-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm sm:text-base">
          {/* Social Links - moved to extreme left */}
          <div className="flex items-center space-x-3 lg:space-x-4">
            <a href="https://www.facebook.com/KalraPackers/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={16} className="text-white hover:text-yellow-200 cursor-pointer transition-colors duration-200 sm:w-[18px] sm:h-[18px]" />
            </a>
            <a href="https://www.instagram.com/kalrapackersmovers?igsh=MTFlNXhocHdheHYyZg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={16} className="text-white hover:text-yellow-200 cursor-pointer transition-colors duration-200 sm:w-[18px] sm:h-[18px]" />
            </a>
          </div>
          {/* Contact Info - both numbers */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Phone size={14} className="text-white sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-white font-semibold text-xs sm:text-sm lg:text-base whitespace-nowrap">+91 - 72 92 01 01 02</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Phone size={14} className="text-white sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-white font-semibold text-xs sm:text-sm lg:text-base whitespace-nowrap">+91 - 98 105 84 326</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-lg w-full">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center py-1 sm:py-2">
            {/* Logo */}
            <Link to="/" className="flex items-center" aria-label="Home" onClick={handleNavClick}>
              <span className="bg-white rounded-lg px-2 sm:px-3 py-1 sm:py-1.5 shadow border border-blue-900 flex flex-col items-center font-extrabold text-blue-900 tracking-widest whitespace-nowrap drop-shadow mr-2 sm:mr-4 lg:mr-8" style={{ letterSpacing: '0.12em', fontFamily: 'serif', minWidth: '140px' }}>
                <span className="font-extrabold text-xs sm:text-sm lg:text-base tracking-widest text-blue-900" style={{ letterSpacing: '0.08em', fontFamily: 'serif' }}>KALRA Packers Movers</span>
                <span className="font-bold text-[0.5rem] sm:text-[0.6rem] lg:text-[0.7rem] tracking-widest mt-0.5 px-1 sm:px-2 py-0.5 rounded" style={{ background: '#0a2e73', color: '#fff', letterSpacing: '0.2em', boxShadow: '0 1px 4px rgba(10,46,115,0.10)' }}>SINCE 1992</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Primary">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={cn(
                      "font-bold text-sm xl:text-base px-2 xl:px-3 py-2 rounded-xl transition-all duration-200 hover:text-primary hover:bg-white hover:shadow-sm",
                      isActive(item.path) ? "text-primary bg-white shadow-sm" : "text-foreground"
                    )}
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </Link>
                  {/* Submenu */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-2 w-64 xl:w-72 bg-blue-600 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 border border-blue-800">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2.5 text-sm xl:text-base text-white hover:bg-blue-700 hover:text-yellow-200 transition-all duration-200 hover:shadow-sm rounded-md mx-2"
                            onClick={handleNavClick}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Button
                asChild
                variant="default"
                className="bg-blue-700 text-white hover:bg-blue-800 hover:text-yellow-200 hover:shadow-button transition-all duration-200 ml-4 xl:ml-6"
              >
                <Link to="/contact#quote-form" className="w-20 xl:w-24 h-full flex items-center justify-center text-sm xl:text-base font-semibold" onClick={handleNavClick}>
                  Get Quote
                </Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 touch-manipulation"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-yellow-200 border-t border-blue-100 shadow-lg"
            aria-modal="true"
            role="dialog"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={cn(
                      "block py-2.5 sm:py-3 font-medium transition-colors duration-200 text-base sm:text-lg touch-manipulation",
                      isActive(item.path) ? "text-primary font-bold" : "text-foreground hover:text-primary"
                    )}
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 sm:ml-6 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block py-2 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors duration-200 touch-manipulation"
                          onClick={handleNavClick}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2 sm:pt-4">
                <Button className="w-full bg-gradient-primary hover:shadow-button py-3 sm:py-4 text-base sm:text-lg font-semibold touch-manipulation">
                  <Link to="/contact#quote-form" onClick={handleNavClick}>Get Quote</Link>
                </Button>
              </div>
              
              {/* Mobile Social Links */}
              <div className="flex justify-center items-center space-x-6 pt-4 sm:pt-6 border-t border-blue-800 mt-4">
                <a href="https://www.facebook.com/KalraPackers/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="touch-manipulation">
                  <Facebook size={24} className="text-white hover:text-yellow-200 transition-colors duration-200" />
                </a>
                <a href="https://www.instagram.com/kalrapackersmovers?igsh=MTFlNXhocHdheHYyZg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="touch-manipulation">
                  <Instagram size={24} className="text-white hover:text-yellow-200 transition-colors duration-200" />
                </a>
                <div className="flex items-center space-x-2">
                  <Phone size={20} className="text-white" />
                  <span className="text-white font-semibold text-base">+91-7292010102</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </header>
    </nav>
  );
};

export default Navbar;