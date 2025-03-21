import React from "react";
import myImage from '../assets/webi.webp'
import { motion } from 'framer-motion'

export default function About() {
  const skills = [
    { name: "React", level: "Intermediate", desc: "Built projects using React with Tailwind, component-based architecture." },
    { name: "Node.js", level: "Beginner", desc: "Can create basic APIs, handle routing, and work with Express." },
    { name: "Django", level: "Beginner", desc: "Understanding of MVC pattern, database models, and Django REST framework." },
    { name: "Tailwind CSS", level: "Intermediate", desc: "Experienced in styling and designing responsive web pages." },
    { name: "Python", level: "Intermediate", desc: "Good at scripting, automation, and basic AI/ML concepts." },
    { name: "JavaScript", level: "Intermediate", desc: "Knowledge of ES6+, DOM manipulation, and asynchronous programming." },
    { name: "AI/ML", level: "Beginner", desc: "Exploring machine learning algorithms and data science concepts." },
    { name: "Git & GitHub", level: "Intermediate", desc: "Comfortable with version control, branching, and GitHub workflows." }
  ];
  return (
    <section className="text-gray-900 py-20 px-6 flex flex-col gap-12">
      <div className="about flex flex-col">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-5xl font-bold mb-8 text-blue-400">About me</motion.h1>
        <div className="flex  flex-col-reverse gap-4 sm:flex-row sm:justify-between sm:px-6">
          <div className="sm:max-w-10/15 text-md sm:text-lg ">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-sm sm:text-lg text-gray-700 dark:text-[#C9D1D9] leading-relaxed">
              Hey! I'm Pushkar Niraula, a Computer Engineering student at Lalitpur Engineering College, currently in my third semester (second year).
              I have a deep interest in software development and web technologies, constantly exploring new frameworks and tools to improve my skills.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-4 text-sm sm:text-lg text-gray-700 dark:text-[#C9D1D9] leading-relaxed">
              Ever since I started coding, I've been fascinated by how technology can turn ideas into reality. Whether it's building interactive web applications,
              experimenting with artificial intelligence, or optimizing backend systems, I love solving challenges through code.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-4 text-sm sm:text-lg text-gray-700 dark:text-[#C9D1D9] leading-relaxed">
              Beyond coding, I enjoy listening to music, capturing pictures, playing football, and gaming. I believe that continuous learning and creativity
              are key to innovation, and I’m always eager to explore new possibilities in the tech world.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-4 text-sm sm:text-lg text-gray-700 dark:text-[#C9D1D9] leading-relaxed">
              My goal is to become a skilled full-stack developer and work on impactful projects. I’m always open to collaboration and excited about
              opportunities that push me to grow.
            </motion.p>
          </div>
          <motion.div className="w-80"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <img src={myImage} className="w-ful h-full object-cover shadow-lg rounded-lg" alt="" />
          </motion.div>
        </div>
      </div>
      {/* Skills Section */}
      <div className="mt-18">
        <h3 className="text-3xl font-semibold text-blue-400/90">Skills & Expertise</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-lg text-gray-800">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-neutral-200 dark:bg-[#161B22] p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold dark:text-[#C9D1D9]">{skill.name}</h4>
              <p className="text-sm text-gray-600 dark:text-[#8B949E]">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
