import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">MyHealthTracker</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering you with reliable health education and disease prevention knowledge for a healthier life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Health Topics</h3>
            <ul className="space-y-2">
              <li><a href="/diabetes" className="text-gray-400 hover:text-blue-400 transition-colors">Diabetes</a></li>
              <li><a href="/high-blood-pressure" className="text-gray-400 hover:text-blue-400 transition-colors">High Blood Pressure</a></li>
              <li><a href="/depression" className="text-gray-400 hover:text-blue-400 transition-colors">Depression</a></li>
              <li><a href="/cancer" className="text-gray-400 hover:text-blue-400 transition-colors">Cancer</a></li>
              <li><a href="/obesity" className="text-gray-400 hover:text-blue-400 transition-colors">Obesity</a></li>
              <li><a href="/hiv-aids" className="text-gray-400 hover:text-blue-400 transition-colors">HIV/AIDS</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="/disclaimer" className="text-gray-400 hover:text-blue-400 transition-colors">Medical Disclaimer</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">info@myhealthtracker.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 MyHealthTracker. All rights reserved. This information is for educational purposes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;