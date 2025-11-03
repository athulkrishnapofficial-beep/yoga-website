// src/components/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react'; // We'll use icons for ratings

// Define your colors
const colors = {
  sectionBg: "#fff9ed", // Match the Hero background
  text: "#586d32",
  starColor: "#F59E0B", // A nice gold/yellow for stars
};

// Dummy testimonial data
const testimonials = [
  {
    quote: "This is more than a yoga studio; it's a community. I've never felt so supported in my practice. The instructors are knowledgeable and truly care.",
    name: 'Sarah K.',
    rating: 5,
  },
  {
    quote: "I was a complete beginner and so nervous. The Hatha classes were the perfect start. Now I have more flexibility and so much less stress!",
    name: 'Michael B.',
    rating: 5,
  },
  {
    quote: "The best Vinyasa Flow classes in the city. Every class is challenging, creative, and leaves me feeling refreshed and grounded.",
    name: 'Jessica L.',
    rating: 5,
  }
];

// Simple component to render 5 stars
const StarRating = ({ rating }) => (
  <div className="flex justify-center md:justify-start" style={{ color: colors.starColor }}>
    {[...Array(rating)].map((_, i) => (
      <Star key={i} fill="currentColor" className="w-5 h-5" />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section 
      className="py-16 md:py-24" 
      style={{ backgroundColor: colors.sectionBg }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 
            className="text-3xl md:text-4xl font-bold"
            style={{ color: colors.text }}
          >
            What Our Students Say
          </h2>
          <p 
            className="mt-4 max-w-2xl mx-auto text-lg"
            style={{ color: colors.text, opacity: 0.85 }}
          >
            Real stories from our amazing community.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="text-center md:text-left p-8 rounded-lg shadow-lg"
              style={{ 
                backgroundColor: '#ffffff' // A clean white card
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
            >
              <StarRating rating={testimonial.rating} />
              <blockquote 
                className="mt-6 text-lg italic"
                style={{ color: colors.text, opacity: 0.9 }}
              >
                "{testimonial.quote}"
              </blockquote>
              <cite 
                className="mt-4 block font-semibold not-italic"
                style={{ color: colors.text }}
              >
                &mdash; {testimonial.name}
              </cite>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;