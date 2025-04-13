
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import WalletConnect from './WalletConnect';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    // Only try to scroll if we're on the home page
    if (location.pathname === '/') {
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // If not on home page, navigate to home and then scroll
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-solana to-solana-tertiary"></div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-solana via-solana-tertiary to-solana-secondary">DegenAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">Dashboard</Link>
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-sm font-medium hover:text-primary transition-colors flex items-center"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              How it Works
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </button>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <WalletConnect />
            <Button variant="outline" size="sm" onClick={() => scrollToSection('contact')} className="border-white/20 text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link to="/" className="block text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/dashboard" className="block text-sm font-medium hover:text-primary transition-colors">Dashboard</Link>
            <button 
              onClick={() => scrollToSection('features')} 
              className="block text-sm font-medium hover:text-primary transition-colors w-full text-left"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="block text-sm font-medium hover:text-primary transition-colors w-full text-left"
            >
              How it Works
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block text-sm font-medium hover:text-primary transition-colors w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block text-sm font-medium hover:text-primary transition-colors w-full text-left"
            >
              Contact Us
            </button>
            <div className="pt-2">
              <WalletConnect />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
