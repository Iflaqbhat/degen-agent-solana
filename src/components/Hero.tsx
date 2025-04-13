
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Zap, ExternalLink, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const Hero = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDemoRequest = () => {
    toast.success("Demo Request", {
      description: "Thank you for your interest! Our team will contact you shortly."
    });
  };

  return (
    <div id="hero" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-purple-blue-gradient opacity-30 animate-gradient-shift"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-solana/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-solana-tertiary/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block mb-6 px-4 py-2 glass-card animate-hover">
            <p className="text-sm font-medium flex items-center justify-center text-white/90">
              <Zap size={16} className="mr-2 text-solana-secondary" />
              AI x Solana: Powering the Next Wave of Blockchain Innovation
            </p>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight gradient-text">
            Conversational AI for 
            <span className="block"> Solana Ecosystem</span>
          </h1>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            DegenAI transforms complex blockchain interactions into simple, natural language conversations. 
            Manage assets, analyze markets, and explore Solana with unprecedented ease.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto px-8 py-4 text-base bg-gradient-to-r from-solana to-solana-tertiary hover:opacity-90 text-white purple-glow transition-all">
                Launch Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto px-8 py-4 text-base border-white/30 text-white bg-white/5 hover:bg-white/10 transition-all"
              onClick={scrollToFeatures}
            >
              <Bot className="mr-2 h-5 w-5 text-solana-tertiary" />
              Explore Features
            </Button>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto px-8 py-4 text-base border-white/30 text-white bg-white/5 hover:bg-white/10 transition-all"
              onClick={handleDemoRequest}
            >
              <ExternalLink className="mr-2 h-5 w-5 text-solana-secondary" />
              Request Demo
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <Button 
            variant="ghost" 
            className="text-white/70 hover:text-white hover:bg-transparent animate-bounce"
            onClick={scrollToFeatures}
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
