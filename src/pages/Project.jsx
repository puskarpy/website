import React from 'react'
import { motion } from 'framer-motion'
import Card from '../components/Card'
import image1 from '../assets/interface.png'
import image2 from '../assets/rps.png'
import image3 from '../assets/desktop.png'
import image4 from '../assets/final2.png'

export default function Project() {
  const baseProjects = [
    { title: "Weather Forecast", imgSrc: image1, description: "A simple and interactive weather application that provides real-time weather information based on user input. It fetches weather data from a reliable API and displays it in an easy-to-read format, including temperature, humidity, and weather conditions." },
    { title: "Rock, Paper & Scissors", imgSrc: image2, description: "It is a simple Rock Paper Scissor built with HTML, CSS, and JavaScript. It provides a smooth user experience with responsive design, a custom UI, and easy-to-use controls for playing the game smoothly. It also accesses local storage to keep track of the score." },
    { title: "Weather Forecast", imgSrc: image3, description: "A simple and interactive weather application that provides real-time weather information based on user input. It fetches weather data from a reliable API and displays it in an easy-to-read format, including temperature, humidity, and weather conditions." },
  ]
  const reactProjects = [
    {
      title: "Password Generator", imgSrc: image4, description: "A simple password generator built with React that allows users to customize the length and character set of their password, with options for including numbers and special characters."
    }
  ]
  return (
    <section className='flex flex-col sm:p-12 px-4 py-12 dark:text-[#C9D1D9]'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className='text-4xl text-blue-400 font-bold mb-8'>Projects</motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className='text-2xl font-semibold mb-4'>
          HTML CSS JS
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {
            baseProjects.map((project, index) => (
              <Card key={index} title={project.title} description={project.description} imgSrc={project.imgSrc} />
            ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className='mt-16 border-t border-gray-300 pt-8'>
        <h2 className='text-3xl font-semibold mb-4'>
          REACT
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {
            reactProjects.map((project, index) => (
              <Card key={index} title={project.title} description={project.description} imgSrc={project.imgSrc} />
            ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className='mt-16 border-t border-gray-300 pt-8'>
        <h2 className='text-3xl font-semibold mb-4'>PYTHON</h2>
        <div>

        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className='mt-16 border-t border-gray-300 pt-8'>
        <h2 className='text-3xl font-semibold mb-4'>C++</h2>
        <div></div>
      </motion.div>
    </section>
  )
}
