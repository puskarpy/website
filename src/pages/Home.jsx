import React from "react";
import { motion } from "framer-motion";
import myImage from '../assets/image.jpeg'

export default function Home() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center  text-gray-900 px-6">
      <motion.div
        className="w-64 h-64 rounded-full bg-amber-400 overflow-hidden mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={myImage} className="w-full h-full object-cover" alt="" />
      </motion.div>
      {/* Hero Text */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm <span className="block sm:inline text-blue-400">Pushkar Niraula</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-md md:text-xl text-gray-900 mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Computer Engineering Student | Web Developer | AI Enthusiast
      </motion.p>

      {/* Call to Action */}
      <motion.a
        href="/project"
        className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        View My Work
      </motion.a>
    </section>
  );
}
