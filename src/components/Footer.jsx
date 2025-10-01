import { Github, ExternalLink, Mail, Linkedin, Twitter, ArrowRight, Code, Palette, Zap, Users, ChevronDown } from 'lucide-react';

export default function Footer() {
return (
    <footer id="contact" className="bg-black/30 backdrop-blur-sm border-t border-white/10 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Have a project in mind? I'd love to help bring your ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:puskarniraula01@gmail.com"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-white mb-4 md:mb-0">
            Portfolio
          </div>

          <div className="flex gap-6 mb-4 md:mb-0">
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
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Pushkar Niraula. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
