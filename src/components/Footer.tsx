
import React from 'react';
import { Heart, Twitter, Github, MessageCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const Footer = () => {
  const handleExternalNavigation = (url: string, name: string) => {
    toast.success(`Navigating to ${name}`, {
      description: "You'll be redirected to an external site."
    });
    window.open(url, '_blank');
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const input = document.getElementById('email-input') as HTMLInputElement;
    if (input.value) {
      toast.success('Subscribed successfully!', {
        description: `We'll keep you updated on ${input.value}`
      });
      input.value = '';
    } else {
      toast.error('Please enter your email address');
    }
  };

  return (
    <footer className="bg-transparent backdrop-blur-md border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-solana via-solana-tertiary to-solana-secondary purple-glow"></div>
              <span className="text-lg font-bold gradient-text">DegenAI</span>
            </div>
            <p className="text-sm text-white/80 mb-4">
              DegenAI combines the power of artificial intelligence with Solana's high-performance blockchain to create a seamless, conversational interface to manage your crypto assets.
            </p>
            <div className="mt-4">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input 
                  id="email-input"
                  type="email" 
                  placeholder="Your email address" 
                  className="px-3 py-2 rounded-md bg-white/5 border border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-solana/50"
                />
                <button 
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-solana to-solana-tertiary text-white rounded-md text-sm hover:opacity-90 transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="text-xs text-white/60 mt-4">
              © 2025 DegenAI. All rights reserved.
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3 text-white/90">Product</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/#features" className="hover:text-solana-secondary transition-colors">Features</Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-solana-secondary transition-colors">Dashboard</Link>
              </li>
              <li>
                <button 
                  onClick={() => toast.info("Pricing coming soon!")} 
                  className="hover:text-solana-secondary transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => toast.info("Roadmap coming soon!")}
                  className="hover:text-solana-secondary transition-colors"
                >
                  Roadmap
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-3 text-white/90">Connect</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <button 
                  onClick={() => handleExternalNavigation("https://twitter.com/solana", "Twitter")}
                  className="flex items-center hover:text-solana-secondary transition-colors"
                >
                  <Twitter className="h-3.5 w-3.5 mr-2" />
                  Twitter
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleExternalNavigation("https://discord.gg/solana", "Discord")}
                  className="flex items-center hover:text-solana-secondary transition-colors"
                >
                  <MessageCircle className="h-3.5 w-3.5 mr-2" />
                  Discord
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleExternalNavigation("https://github.com/solana-labs", "GitHub")}
                  className="flex items-center hover:text-solana-secondary transition-colors"
                >
                  <Github className="h-3.5 w-3.5 mr-2" />
                  GitHub
                </button>
              </li>
              <li>
                <button 
                  onClick={() => toast.info("Contact form coming soon!")}
                  className="flex items-center hover:text-solana-secondary transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5 mr-2" />
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-xs text-white/60 mb-4 sm:mb-0">
            Built for Encode AI London Hackathon
          </div>
          <div className="text-xs flex items-center text-white/60">
            Built with <Heart className="h-3 w-3 text-solana-secondary mx-1 animate-pulse-slow" /> on Solana
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
