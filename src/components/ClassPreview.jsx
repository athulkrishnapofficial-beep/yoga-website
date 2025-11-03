// src/components/ClassPreview.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Use Link for internal routing

// Define your colors
const colors = {
  sectionBg: "#F5F3E7", // Use the light cream for this section
  text: "#586d32",
  cardBg: "#fff9ed", // Use the light nav background for the cards
  hoverText: "#A8BCA1",
};

// Data for our class cards
const classes = [
  {
    name: 'Ashtanga Yoga',
    description: 'A dynamic, set sequence for building strength and discipline.',
    href: '/ashtanga',
    imageUrl: '/ashtanga-image.png' // Use the same images
  },
  {
    name: 'Hatha Yoga',
    description: 'A slower-paced, foundational practice perfect for beginners.',
    href: '/hatha',
    imageUrl: '/hatha-image.png'
  },
  {
    name: 'Iyengar Yoga',
    description: 'A meticulous approach to yoga that emphasizes alignment and precision.',
    href: '/iyengar',
    imageUrl: '/iyengar.png'
  },
  {
    name: 'Vinyasa Flow',
    description: 'A fluid, creative, and breath-synchronized practice.',
    href: '/vinyasa',
    imageUrl: '/vinyasa.jpg'
  },
  {
    name: 'Meditation',
    description: 'Guided practice to calm the mind and cultivate presence.',
    href: '/meditation',
    imageUrl: '/meditation-image.jpeg'
  }
];

// Animation for the card
const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const ClassCard = ({ yogaClass }) => {
  return (
    <motion.div
      className="flex flex-col rounded-lg shadow-lg overflow-hidden"
      variants={cardVariants}
      style={{ backgroundColor: colors.cardBg }}
    >
      <div className="flex-shrink-0">
        <img 
          className="h-56 w-full object-cover" 
          src={yogaClass.imageUrl} 
          alt={yogaClass.name} 
          loading="lazy" 
        />
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <h3 
            className="mt-2 text-2xl font-semibold"
            style={{ color: colors.text }}
          >
            {yogaClass.name}
          </h3>
          <p 
            className="mt-3 text-base"
            style={{ color: colors.text, opacity: 0.85 }}
          >
            {yogaClass.description}
          </p>
        </div>
        <div className="mt-6">
          <Link
            to={yogaClass.href}
            className="font-semibold"
            style={{ color: colors.text }}
          >
            Learn More 
            <motion.span 
              className="ml-1 inline-block"
              whileHover={{ x: 5 }}
            >
              &rarr;
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const ClassPreview = () => {
  return (
    <section 
      className="py-16 md:py-24" 
      style={{ backgroundColor: colors.sectionBg }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} // Animates when it scrolls into view
          viewport={{ once: true, amount: 0.5 }} // Triggers animation once
          transition={{ duration: 0.5 }}
        >
          <h2 
            className="text-3xl md:text-4xl font-bold"
            style={{ color: colors.text }}
          >
            Find Your Perfect Practice
          </h2>
          <p 
            className="mt-4 max-w-2xl mx-auto text-lg"
            style={{ color: colors.text, opacity: 0.85 }}
          >
            Whether you're new to yoga or an experienced practitioner, 
            we have a class that fits your journey.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {classes.map((yogaClass) => (
            <ClassCard key={yogaClass.name} yogaClass={yogaClass} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassPreview;