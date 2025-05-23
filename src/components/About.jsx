import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaCoffee, FaSmile } from 'react-icons/fa';
import salad from '../image/salad.jpeg';

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-[#fff8f7] px-6 md:px-20 py-16 font-body text-gray-800"
    >
      {/* Top Section: Text + Image */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20 border-b border-red-100 pb-12">
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-4xl font-heading text-[#b23a48] mb-6 tracking-wide">
            An Unforgettable Foodie Experience
          </h2>
          <p className="mb-8 text-base md:text-lg leading-relaxed">
            At Quretto, we are passionate about providing <br />
            an unforgettable and unique foodie experience. <br />
            As charcuterie board artists, we craft each presentation <br />
            with creativity and love to delight your senses.
          </p>
          <button
            className="relative inline-block px-10 py-3 font-semibold text-[#b23a48] border-2 border-[#b23a48] rounded-lg
                       overflow-hidden transition-colors duration-300 hover:text-white hover:bg-[#b23a48]
                       focus:outline-none focus:ring-4 focus:ring-[#b23a48]/40"
          >
            About Us
          </button>
        </div>

        <div className="w-72 h-72 mt-5 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg group">
          <img
            src={salad}
            alt="About Quretto Cafe"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Scroll Indicator Bar */}
      <div className="relative flex justify-center my-8">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="h-1 bg-[#b23a48] rounded-full"
        />
      </div>

      {/* Bottom Section: Why Choose Us */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        <h3 className="text-3xl font-heading text-[#b23a48] mb-12 text-center">
          Why Choose Quretto?
        </h3>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {[{
            icon: <FaLeaf className="text-4xl text-[#b23a48]" />,
            title: "Fresh Ingredients",
            desc: "Carefully selected fresh and organic ingredients in every dish."
          }, {
            icon: <FaCoffee className="text-4xl text-[#b23a48]" />,
            title: "Signature Beverages",
            desc: "Handcrafted drinks brewed with love to elevate your meal."
          }, {
            icon: <FaSmile className="text-4xl text-[#b23a48]" />,
            title: "Cozy Atmosphere",
            desc: "A warm cafe environment designed for comfort and joy."
          }].map(({ icon, title, desc }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center space-y-4 p-6 w-72 bg-white rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              {icon}
              <h4 className="text-xl font-semibold">{title}</h4>
              <p className="text-sm md:text-base text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}

export default About;
