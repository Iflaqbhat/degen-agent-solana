
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import WalletConnect from './WalletConnect';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <WalletConnect />
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
            <a href="#features" className="block text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="#about" className="block text-sm font-medium hover:text-primary transition-colors">About</a>
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
