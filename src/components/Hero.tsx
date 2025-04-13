
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-hero-pattern">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute right-1/4 top-20 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute left-1/4 bottom-10 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
            <p className="text-sm font-medium text-blue-700 flex items-center">
              <Zap size={16} className="mr-2" />
              Powered by AI + Solana Blockchain
            </p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Your AI agent for the
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana via-solana-tertiary to-solana-secondary"> Solana </span>
            ecosystem
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            DegenAI helps you navigate the Solana blockchain with simple conversational commands. Check balances, send tokens, and analyze markets — all through natural language.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button className="blue-gradient text-base px-6 py-6 h-auto">
                Launch Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="#features">
              <Button variant="outline" className="border-primary text-primary hover:text-primary hover:bg-primary/5 text-base px-6 py-6 h-auto">
                <Bot className="mr-2 h-5 w-5" />
                Explore Features
              </Button>
            </a>
          </div>
          
          {/* Demo Preview */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm shadow-lg border border-gray-100 rounded-2xl overflow-hidden p-4">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl mb-3">
                <p className="text-gray-800 text-left"><span className="font-medium">User:</span> Show me my SOL balance and any new NFTs.</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl">
                <p className="text-gray-800 text-left"><span className="font-medium">DegenAI:</span> Your wallet currently holds 5.24 SOL ($516.23). You received 2 new NFTs in the last 24h from Captains Club collection.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
