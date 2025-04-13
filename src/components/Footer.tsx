
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-solana to-solana-tertiary"></div>
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-solana via-solana-tertiary to-solana-secondary">DegenAI</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              DegenAI combines the power of artificial intelligence with Solana's high-performance blockchain to create a seamless, conversational interface to manage your crypto assets.
            </p>
            <div className="text-xs text-gray-500">
              © 2025 DegenAI. All rights reserved.
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary">Features</a></li>
              <li><a href="#" className="hover:text-primary">Dashboard</a></li>
              <li><a href="#" className="hover:text-primary">Pricing</a></li>
              <li><a href="#" className="hover:text-primary">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary">Twitter</a></li>
              <li><a href="#" className="hover:text-primary">Discord</a></li>
              <li><a href="#" className="hover:text-primary">GitHub</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-xs text-gray-500 mb-4 sm:mb-0">
            Built for Encode AI London Hackathon
          </div>
          <div className="text-xs flex items-center text-gray-500">
            Built with <Heart className="h-3 w-3 text-red-500 mx-1" /> on Solana
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
