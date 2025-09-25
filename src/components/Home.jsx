import React from 'react'
import { Github, ExternalLink, Mail, Linkedin, Twitter, ArrowRight, Code, Palette, Zap, Users, ChevronDown } from 'lucide-react';

export default function Home() {
const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen pt-24 flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto text-center px-6">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">PN</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Pushkar Niraula
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Full Stack Developer
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            I craft digital experiences that combine beautiful design with powerful functionality. 
            Passionate about creating solutions that make a difference.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={scrollToProjects}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
          >
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300 hover:border-white/50">
            Download CV
          </button>
        </div>

        <div className="flex justify-center gap-6">
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Twitter, href: '#', label: 'Twitter' },
            { icon: Mail, href: '#', label: 'Email' }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:scale-110 transform"
              aria-label={label}
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
}
