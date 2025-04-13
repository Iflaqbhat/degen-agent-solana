
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, CheckCircle2, Zap, ExternalLink, Download, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadWhitepaper = () => {
    toast.success("Whitepaper Download", {
      description: "The whitepaper would start downloading now in a real application."
    });
  };

  return (
    <Layout>
      <Hero />
      
      {/* Features Section with proper ID */}
      <section id="features">
        <Features />
      </section>
      
      {/* How it Works Section with proper ID */}
      <section id="how-it-works" className="py-20 bg-transparent backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text">How DegenAI Works</h2>
            <p className="text-lg text-white/80">
              Our AI agent seamlessly connects with Solana's blockchain to provide you with real-time insights and actions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-card p-6 text-center animate-hover">
              <div className="w-12 h-12 mx-auto mb-4 bg-solana/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-solana">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">Connect Wallet</h3>
              <p className="text-sm text-white/80">
                Securely connect your Solana wallet with a single click to get started.
              </p>
              <Button 
                variant="outline" 
                className="mt-4 border-white/20 text-white hover:bg-white/10"
                onClick={() => scrollToSection('hero')}
              >
                Get Started
              </Button>
            </div>
            
            <div className="glass-card p-6 text-center animate-hover">
              <div className="w-12 h-12 mx-auto mb-4 bg-solana-tertiary/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-solana-tertiary">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">Chat With AI</h3>
              <p className="text-sm text-white/80">
                Ask questions in plain English about your assets, markets, or any Solana-related topic.
              </p>
              <Link to="/dashboard">
                <Button 
                  variant="outline"
                  className="mt-4 border-white/20 text-white hover:bg-white/10"
                >
                  Try Dashboard
                </Button>
              </Link>
            </div>
            
            <div className="glass-card p-6 text-center animate-hover">
              <div className="w-12 h-12 mx-auto mb-4 bg-solana-secondary/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-solana-secondary">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">Get Insights</h3>
              <p className="text-sm text-white/80">
                Receive instant insights, perform actions, and make informed decisions with AI assistance.
              </p>
              <Button 
                variant="outline" 
                className="mt-4 border-white/20 text-white hover:bg-white/10"
                onClick={handleDownloadWhitepaper}
              >
                <Download className="mr-2 h-4 w-4" />
                Whitepaper
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section with proper ID */}
      <section id="about" className="py-20 bg-transparent backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="p-4 glass-card">
                <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-r from-solana/80 via-solana-tertiary/80 to-solana-secondary/80 flex items-center justify-center">
                  <Bot size={80} className="text-white" />
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 gradient-text">Why DegenAI?</h2>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Simplifies complex blockchain interactions with natural language',
                  'Provides real-time insights and market analysis',
                  'Securely manages your assets with transparent operations',
                  'Saves time by automating routine tasks and analysis'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-solana-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/dashboard">
                  <Button className="bg-gradient-to-r from-solana to-solana-tertiary text-white">
                    Try DegenAI Now
                    <Zap className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10"
                  onClick={() => toast.info("Community chat coming soon!")}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section with proper ID */}
      <section id="contact" className="py-16 bg-transparent backdrop-blur-md">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
            Ready to revolutionize your Solana experience?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto text-white/80">
            Join DegenAI today and start interacting with the Solana blockchain in a whole new way.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/dashboard">
              <Button 
                variant="default"
                className="bg-gradient-to-r from-solana to-solana-tertiary text-white text-base px-6 py-6 h-auto"
              >
                Launch Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 text-base px-6 py-6 h-auto"
              onClick={() => toast.info("Documentation coming soon!")}
            >
              Documentation
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
