import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaTruck, FaBirthdayCake } from 'react-icons/fa';

function Services() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-[#fff8f7] px-6 md:px-20 py-16 font-body text-gray-800"
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-heading text-[#b23a48] mt-4 mb-4">Our Services</h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          At Quretto Cafe, we go beyond just serving meals — we provide experiences.
          Explore the services that make your visit special.
        </p>
      </div>

      {/* Service Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {[
          {
            icon: <FaUtensils className="text-4xl text-[#b23a48]" />,
            title: "Dine-in Delight",
            desc: "Enjoy a cozy dine-in experience with a menu crafted for every craving."
          },
          {
            icon: <FaTruck className="text-4xl text-[#b23a48]" />,
            title: "Delivery Service",
            desc: "Get your favorite dishes delivered hot and fresh to your doorstep."
          },
          {
            icon: <FaBirthdayCake className="text-4xl text-[#b23a48]" />,
            title: "Private Catering",
            desc: "Book us for parties, birthdays, or corporate events with custom menus."
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-72 bg-white text-center p-6 rounded-xl shadow-md space-y-4"
          >
            <div className="flex justify-center">{item.icon}</div>
            <h4 className="text-xl font-semibold">{item.title}</h4>
            <p className="text-sm md:text-base text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Services;
