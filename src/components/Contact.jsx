import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="bg-[#fff8f7] px-6 md:px-20 py-16 font-body text-gray-800"
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-heading text-[#b23a48] mt-4 mb-4">Get in Touch</h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Whether you have a question, a catering request, or just want to say hi — we’d love to hear from you!
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {[
          {
            icon: <FaEnvelope className="text-3xl text-[#b23a48]" />,
            title: "Email Us",
            desc: "hello@qurettocafe.com"
          },
          {
            icon: <FaPhone className="text-3xl text-[#b23a48]" />,
            title: "Call Us",
            desc: "+1 (234) 567-8901"
          },
          {
            icon: <FaMapMarkerAlt className="text-3xl text-[#b23a48]" />,
            title: "Visit Us",
            desc: "123 Brew Street, Foodville, NY"
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

export default Contact;
