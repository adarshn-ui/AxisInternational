import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-3">
              <Logo variant="white" />
            </div>
            <p className="text-gray-400 mb-6">
              One Axis. Unified Solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-red-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-red-400 transition-colors">About Us</a></li>
              <li><a href="#divisions" className="hover:text-red-400 transition-colors">Our Divisions</a></li>
              <li><a href="#gallery" className="hover:text-red-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-red-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-6">Services</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li className="hover:text-red-400 transition-colors cursor-pointer">Managed Software Platforms</li>
              <li className="hover:text-red-400 transition-colors cursor-pointer">IoT, Cloud Infra, Data Centers</li>
              <li className="hover:text-red-400 transition-colors cursor-pointer">Contracting</li>
              <li className="hover:text-red-400 transition-colors cursor-pointer">Material & Equipment Trading</li>
              <li className="hover:text-red-400 transition-colors cursor-pointer">Oil & Gas</li>
              <li className="hover:text-red-400 transition-colors cursor-pointer">Security & Surveillance Systems</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-6">Get in Touch</h3>
            <ul className="space-y-4 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-red-400 mt-1 flex-shrink-0" />
                <span>P.O. Box 22454, Safat 13084, Kuwait</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-red-400 flex-shrink-0" />
                <span>+965 96005101</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-red-400 flex-shrink-0" />
                <span>info@axiskw.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-red-400 flex-shrink-0" />
                <span>sales@axiskw.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 AXIS International Trading Co.W.L.L. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-red-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-red-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}