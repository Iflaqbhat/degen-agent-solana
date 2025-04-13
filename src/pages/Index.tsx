
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, CheckCircle2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      
      {/* How it Works Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How DegenAI Works</h2>
            <p className="text-lg text-gray-600">
              Our AI agent seamlessly connects with Solana's blockchain to provide you with real-time insights and actions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-blue-700">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Connect Wallet</h3>
              <p className="text-sm text-gray-600">
                Securely connect your Solana wallet with a single click to get started.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-blue-700">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Chat With AI</h3>
              <p className="text-sm text-gray-600">
                Ask questions in plain English about your assets, markets, or any Solana-related topic.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-blue-700">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Get Insights</h3>
              <p className="text-sm text-gray-600">
                Receive instant insights, perform actions, and make informed decisions with AI assistance.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="p-4 bg-blue-50 rounded-2xl">
                <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-r from-solana/80 via-solana-tertiary/80 to-solana-secondary/80 flex items-center justify-center">
                  <Bot size={80} className="text-white" />
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Why DegenAI?</h2>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Simplifies complex blockchain interactions with natural language',
                  'Provides real-time insights and market analysis',
                  'Securely manages your assets with transparent operations',
                  'Saves time by automating routine tasks and analysis'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/dashboard">
                <Button className="blue-gradient">
                  Try DegenAI Now
                  <Zap className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to revolutionize your Solana experience?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join DegenAI today and start interacting with the Solana blockchain in a whole new way.
          </p>
          <Link to="/dashboard">
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-base px-6 py-6 h-auto">
              Launch Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
