
import React from 'react';
import { Bot, Wallet, LineChart, Sparkles, RefreshCcw, Shield } from 'lucide-react';

const features = [
  {
    icon: <Bot className="w-10 h-10 text-solana" />,
    title: 'AI-Powered Interactions',
    description: 'Interact with the Solana blockchain using natural language prompts. No complex commands needed.'
  },
  {
    icon: <Wallet className="w-10 h-10 text-solana-tertiary" />,
    title: 'Wallet Management',
    description: 'Check balances, send tokens, and manage your Solana assets with simple conversational commands.'
  },
  {
    icon: <LineChart className="w-10 h-10 text-solana-secondary" />,
    title: 'Market Analytics',
    description: 'Get real-time market data and insights about tokens, NFTs, and DeFi opportunities on Solana.'
  },
  {
    icon: <Sparkles className="w-10 h-10 text-solana" />,
    title: 'NFT Discovery',
    description: 'Discover, analyze, and track NFT collections. Get alerts for new drops and price movements.'
  },
  {
    icon: <RefreshCcw className="w-10 h-10 text-solana-tertiary" />,
    title: 'Transaction History',
    description: 'View and analyze your transaction history with human-readable summaries and insights.'
  },
  {
    icon: <Shield className="w-10 h-10 text-solana-secondary" />,
    title: 'Security Alerts',
    description: 'Get notified about suspicious activity and security threats to protect your assets.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-600">
            DegenAI combines the power of artificial intelligence with Solana's high-performance blockchain to deliver a seamless experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-blue-100"
            >
              <div className="mb-4 p-3 rounded-lg bg-blue-50 inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
