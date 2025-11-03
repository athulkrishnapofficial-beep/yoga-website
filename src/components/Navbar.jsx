import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Color palette
  const colors = {
    navBg: "#fff9ed",
    text: "#586d32",
    mobileMenuBg: "#F5F3E7",
    hoverText: "#A8BCA1",
    buttonText: "#fff9ed"
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Ashtanga Vinyasa Yoga', href: '/ashtanga' },
    { name: 'Hatha Yoga', href: '/hatha' },
    { name: 'Iyengar Yoga', href: '/iyengar' },
    { name: "Vinyasa Flow", href: "/vinyasa" },
    { name: "Meditation", href: "/meditation" },
  ];

  const leftLinks = navLinks.slice(0, 3);
  const rightLinks = navLinks.slice(3, 6);

  return (
    <nav
      className="shadow-md sticky top-0 z-50"
      style={{ backgroundColor: colors.navBg, color: colors.text }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center md:justify-between h-20">
          
          {/* MOBILE MENU BUTTON */}
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-opacity-30 focus:outline-none transition"
              style={{ color: colors.text }}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>

          {/* DESKTOP NAV - LEFT */}
          <div className="hidden md:flex md:flex-1 items-center justify-start space-x-6">
            {leftLinks.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05, color: colors.hoverText }}
                transition={{ type: "spring", stiffness: 300 }}
                className="font-medium transition-colors duration-200"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* LOGO - CENTER */}
          <div className="flex-shrink-0 flex items-center">
            <motion.img
              src="/logo.jpg"
              alt="Yoga Logo"
              loading="lazy"
              className="h-12 w-auto rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>

          {/* DESKTOP NAV - RIGHT */}
          <div className="hidden md:flex md:flex-1 items-center justify-end space-x-6">
            {rightLinks.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05, color: colors.hoverText }}
                transition={{ type: "spring", stiffness: 300 }}
                className="font-medium transition-colors duration-200"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="https://wa.me/919496601244?text=Hello!"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="ml-6 inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-full shadow-sm transition-colors duration-200"
              style={{
                backgroundColor: colors.text,
                color: colors.buttonText,
              }}
            >
              Contact
            </motion.a>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            className="md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ backgroundColor: colors.mobileMenuBg }}
          >
            <div 
              className="px-4 pt-3 pb-4 space-y-2 divide-y divide-[#586d32]/25"
            >
              {navLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ x: 5, color: colors.hoverText }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="block px-3 py-3 rounded-md text-base font-medium"
                  style={{ color: colors.text }}
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm pt-4"
                style={{
                  backgroundColor: colors.text,
                  color: colors.buttonText,
                }}
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
