/* eslint-disable @next/next/no-img-element */
"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Porfolio() {
  const [darkmode, setDarkmode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleDarkMode = () => setDarkmode(!darkmode);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      id: "1",
      title: "Buy-Me-Coffee Website",
      description:
        "Buy Me a Coffee is an online platform that provides an easy way for independent creators and developers to receive financial support.",
      tags: [
        "Next.js",
        "Express.js",
        "Typescript",
        "TailWind CSS",
        "Postgre",
        "Shadcnui",
        "Javascript",
      ],
      image: "./image.jpg",
    },
    {
      id: "2",
      title: "Task Management App",
      description:
        "A productivity app for organizing tasks with drag-and-drop functionality.",
      tags: ["Next.js", "Tailwind CSS", "Yoga-graphQL", "Framer Motion"],
      image: "./image2.png",
    },
    {
      id: "3",
      title: "Food-Delivery Website",
      description:
        "Food Delivery is an online site that allows users to order food and get it delivered quickly.",
      tags: [
        "Next.js",
        "Express.js",
        "Tailwind",
        "Shadcnui",
        "mongoose",
        "MongoDB",
      ],
      image: "../food.jpg",
    },
  ];

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 75 },
    { name: "Next.js", level: 85 },
    { name: "Node.js", level: 90 },
    { name: "Tailwind CSS", level: 90 },
    { name: "React", level: 82 },
    { name: "Express.js", level: 85 },
  ];

  return (
     <div className={`min-h-screen transition duration-300 ${darkmode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Head>
        <title>Bat-Erdene | Portfolio</title>
      </Head>

      <nav className={`fixed w-full z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-sm`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">🚀 Portfolio</h1>
          <div className="flex items-center space-x-4">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize px-3 py-1 rounded-md hover:bg-blue-500 hover:text-white transition ${activeSection === section ? 'font-bold underline' : ''}`}
              >
                {section}
              </button>
            ))}
            <button onClick={toggleDarkMode} className="text-xl">
              {darkmode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-3xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Hi, Im Enh-Bayasgalan 
            </h1>
            <p className="text-2xl mb-6">A full-stack developer building modern, scalable web apps.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button onClick={() => scrollToSection('projects')} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                View My Work
              </button>
              <button onClick={() => scrollToSection('contact')} className="px-6 py-3 border border-gray-400 dark:border-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                Contact Me
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 flex justify-center mt-10 md:mt-0"
          >
            <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center overflow-hidden ${darkmode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <img src="./pinecone.png" alt="Avatar" className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg object-cover"/>
            </div>
          </motion.div>
        </div>
      </section>

       <motion.section id="about" className={`py-20 px-6 ${darkmode ? 'bg-gray-800' : 'bg-gray-100'}`}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="mb-4">
                 I’m a passionate developer focused on creating performant and accessible web applications. 
                I specialize in React and Next.js, and I love creating intuitive user interfaces.
              </p>
              <p className="mb-4">
                When Im not coding, you can find me hiking, reading sci-fi novels, or experimenting with new cooking recipes.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest web technologies.
              </p>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${darkmode ? 'bg-gray-700' : 'bg-gray-300'}`}>
                      <div className="h-full rounded-full bg-blue-500" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

       <motion.section id="projects" className="py-20 px-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className={`rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ${darkmode ? 'bg-gray-800' : 'bg-white'}`}>
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className={`mb-4 ${darkmode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className={`px-3 py-1 rounded-full text-sm ${darkmode ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-800'}`}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <section id="contact" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600" />
            <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600"></textarea>
            <button type="submit" className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
          <div className="mt-8 flex justify-center space-x-4 text-2xl">
            <a href="#" className="hover:text-blue-500"><FaGithub /></a>
            <a href="#" className="hover:text-blue-500"><FaLinkedin /></a>
            <a href="#" className="hover:text-blue-500"><FaTwitter /></a>
          </div>
        </div>
      </section>

      <footer className="py-6 px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center">
        <p>© {new Date().getFullYear()} Bat-Erdene. All rights reserved.</p>
      </footer>
    </div>
  );
}
