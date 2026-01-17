import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="animate-fadeIn">
            <h3 className="font-serif text-xl font-bold text-white mb-4">About Us</h3>
            <p className="text-sm leading-relaxed mb-4">
              Prophet Femi Abraham Ministries International is dedicated to spreading the Gospel 
              and bringing transformation to lives through faith and divine revelation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-400 transition-colors duration-300 hover:scale-110 transform">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300 hover:scale-110 transform">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300 hover:scale-110 transform">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300 hover:scale-110 transform">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeIn delay-100">
            <h3 className="font-serif text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors duration-300 text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/ministries" className="hover:text-amber-400 transition-colors duration-300 text-sm">
                  Ministries
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div className="animate-fadeIn delay-200">
            <h3 className="font-serif text-xl font-bold text-white mb-4">Service Times</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-amber-400 font-semibold">Sunday:</span> 8:00 AM & 10:30 AM
              </li>
              <li>
                <span className="text-amber-400 font-semibold">Wednesday:</span> 6:00 PM
              </li>
              <li>
                <span className="text-amber-400 font-semibold">Friday:</span> 7:00 PM
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fadeIn delay-300">
            <h3 className="font-serif text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <span>123 Faith Avenue, Lagos, Nigeria</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Phone size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <span>+234 800 123 4567</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Mail size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <span>info@prophetfemi.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="font-serif text-lg mb-2 hover:text-amber-400 transition-colors duration-300">
            Prophet Femi Abraham Ministries International
          </p>
          <p className="text-sm">&copy; 2026 All Rights Reserved. Built with Faith & Purpose.</p>
        </div>
      </div>
    </footer>
  );
}
