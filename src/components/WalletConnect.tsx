
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, Wallet } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const WalletConnect = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const { toast } = useToast();

  const handleConnect = async () => {
    // Mock wallet connection - in a real app, this would use Solana wallet adapter
    setIsConnecting(true);
    
    setTimeout(() => {
      const mockAddress = 'CXv76RRVs6QZYzV6VqVYzJJAaW3sVQ3NE7K5vfjjVumT';
      setWalletAddress(mockAddress.slice(0, 4) + '...' + mockAddress.slice(-4));
      setIsConnected(true);
      setIsConnecting(false);
      
      toast({
        title: "Wallet connected",
        description: `Connected to ${mockAddress.slice(0, 4)}...${mockAddress.slice(-4)}`,
      });
    }, 1500);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setWalletAddress('');
    toast({
      title: "Wallet disconnected",
    });
  };

  if (isConnected) {
    return (
      <Button 
        variant="outline" 
        onClick={handleDisconnect}
        className="text-xs h-9 px-3 flex items-center gap-2 border-border"
      >
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        {walletAddress}
      </Button>
    );
  }

  return (
    <Button 
      onClick={handleConnect} 
      disabled={isConnecting}
      className="h-9 px-3 blue-gradient"
    >
      {isConnecting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Connecting...
        </>
      ) : (
        <>
          <Wallet className="mr-2 h-4 w-4" />
          Connect Wallet
        </>
      )}
    </Button>
  );
};

export default WalletConnect;
