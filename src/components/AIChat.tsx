
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const AIChat = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'assistant', 
      content: 'Hello! I\'m your Solana AI assistant. You can ask me about your wallet, the Solana ecosystem, or specific tokens. How can I help you today?' 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Mock responses based on user input
  const getMockResponse = (userInput: string) => {
    const lowercaseInput = userInput.toLowerCase();
    
    if (lowercaseInput.includes('balance') || lowercaseInput.includes('sol')) {
      return "Your wallet currently holds 5.24 SOL (approximately $516.23 USD). You also have 245 USDC and 12.5 RAY tokens.";
    }
    
    if (lowercaseInput.includes('nft') || lowercaseInput.includes('collect')) {
      return "You currently own 7 NFTs across 3 collections. Your most valuable NFT is from the Captains Club collection, with a floor price of 2.8 SOL.";
    }
    
    if (lowercaseInput.includes('market') || lowercaseInput.includes('price')) {
      return "SOL is currently trading at $98.51, up 2.3% in the last 24 hours. The total Solana market cap is $48.5B with a daily volume of $1.2B.";
    }
    
    if (lowercaseInput.includes('transaction') || lowercaseInput.includes('history')) {
      return "In the past 7 days, you've made 5 transactions: 2 token swaps on Jupiter, 1 NFT purchase, and 2 SOL transfers. The total value was approximately 1.4 SOL.";
    }
    
    if (lowercaseInput.includes('send') || lowercaseInput.includes('transfer')) {
      return "To send tokens, please provide the recipient address and amount. For example: 'Send 0.5 SOL to CXv76RRVs6QZYzV6VqVYzJJAaW3sVQ3NE7K5vfjjVumT'";
    }
    
    return "I understand you're asking about " + userInput + ". As a Solana AI assistant, I can help with wallet information, token prices, NFTs, and transaction history. Could you provide more specific details about what you're looking for?";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      const aiMessage: ChatMessage = { role: 'assistant', content: getMockResponse(input) };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
      
      // Show toast for specific actions
      if (input.toLowerCase().includes('send') || input.toLowerCase().includes('transfer')) {
        toast({
          title: "Transaction prepared",
          description: "Review transaction details before confirming.",
        });
      }
    }, 1500);
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-full rounded-xl border bg-card shadow-sm">
      <div className="border-b p-4 flex items-center">
        <Bot className="w-5 h-5 mr-2 text-solana" />
        <h3 className="font-medium">DegenAI Assistant</h3>
      </div>
      
      <div className="flex-grow p-4 overflow-y-auto space-y-4">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`
                max-w-[80%] p-3 rounded-lg 
                ${message.role === 'user' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-accent text-accent-foreground'}
              `}
            >
              <div className="flex items-center space-x-2 mb-1">
                {message.role === 'user' ? 
                  <User className="w-4 h-4" /> : 
                  <Bot className="w-4 h-4" />
                }
                <span className="text-xs font-medium">
                  {message.role === 'user' ? 'You' : 'DegenAI'}
                </span>
              </div>
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-[80%] p-3 rounded-lg bg-accent text-accent-foreground">
              <div className="flex items-center space-x-2">
                <Bot className="w-4 h-4" />
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-current rounded-full animate-pulse delay-150"></div>
                  <div className="w-2 h-2 bg-current rounded-full animate-pulse delay-300"></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="border-t p-4">
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <Input 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about your wallet, tokens, or the Solana ecosystem..."
            className="flex-grow"
            disabled={isTyping}
          />
          <Button 
            type="submit" 
            size="icon" 
            disabled={isTyping} 
            className={isTyping ? "bg-gray-400" : "blue-gradient"}
          >
            {isTyping ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AIChat;
