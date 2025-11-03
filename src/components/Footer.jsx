// src/components/Footer.jsx
import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react'; // Add any icons you need
import { motion } from 'framer-motion';

// Define your colors
const colors = {
  footerBg: "#fff9ed", // Matches your navbar
  text: "#586d32",
};

// Define your social links
const socialLinks = [
  { 
    name: 'Instagram', 
    href: 'https://www.instagram.com/swasthyayogastudio?utm_source=qr&igsh=MWJiM2F5dnU4aGxpeA==', // **REPLACE with your link**
    icon: Instagram 
  },
  { 
    name: 'Facebook', 
    href: 'https://www.facebook.com', // **REPLACE with your link**
    icon: Facebook 
  },
  { 
    name: 'Twitter', 
    href: 'https://www.twitter.com', // **REPLACE with your link**
    icon: Twitter 
  },
];

const Footer = () => {
  return (
    <footer 
      className="border-t border-t-['#586d32']/20" 
      style={{ backgroundColor: colors.footerBg, color: colors.text }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
          
          {/* Copyright Text */}
          <p className="text-sm text-center md:text-left" style={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} Swasthya Yoga Studio. All Rights Reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex justify-center md:justify-end gap-6">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank" // Opens in a new tab
                  rel="noopener noreferrer" // Security best practice
                  whileHover={{ scale: 1.2, color: '#A8BCA1' }} // Use old sage for hover
                  className="transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <Icon className="w-6 h-6" />
                </motion.a>
              );
            })}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;