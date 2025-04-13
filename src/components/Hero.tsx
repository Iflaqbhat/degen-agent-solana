
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-hero-gradient text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 opacity-75 animate-gradient-shift"></div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
            <p className="text-sm font-medium flex items-center justify-center">
              <Zap size={16} className="mr-2 text-solana-secondary" />
              AI x Solana: Powering the Next Wave of Blockchain Innovation
            </p>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/70">
            Conversational AI for 
            <span className="block text-solana-secondary"> Solana Ecosystem</span>
          </h1>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            DegenAI transforms complex blockchain interactions into simple, natural language conversations. 
            Manage assets, analyze markets, and explore Solana with unprecedented ease.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto px-8 py-4 text-base bg-solana-secondary text-black hover:bg-solana-secondary/90 transition-all">
                Launch Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/#features" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                className="w-full sm:w-auto px-8 py-4 text-base border-white/30 text-white hover:bg-white/10 transition-all"
              >
                <Bot className="mr-2 h-5 w-5 text-solana-tertiary" />
                Explore Features
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/5 to-transparent"></div>
    </div>
  );
};

export default Hero;
