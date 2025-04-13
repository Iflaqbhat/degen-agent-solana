
import React from 'react';
import { ArrowDownRight, ArrowUpRight, RefreshCw, Sparkles, Wallet } from 'lucide-react';

interface Transaction {
  id: string;
  type: 'send' | 'receive' | 'swap' | 'nft';
  amount: string;
  token: string;
  address: string;
  timestamp: string;
  status: 'confirmed' | 'processing';
}

const transactions: Transaction[] = [
  {
    id: '3Xmk8c2',
    type: 'receive',
    amount: '1.52',
    token: 'SOL',
    address: 'B1aG4...7Jk9p',
    timestamp: '5 min ago',
    status: 'confirmed'
  },
  {
    id: '9pLm5r1',
    type: 'swap',
    amount: '0.75',
    token: 'SOL → USDC',
    address: 'Jupiter',
    timestamp: '2 hours ago',
    status: 'confirmed'
  },
  {
    id: '7Kj2p0q',
    type: 'nft',
    amount: '0.8',
    token: 'NFT',
    address: 'Captains Club #247',
    timestamp: '1 day ago',
    status: 'confirmed'
  },
  {
    id: '5Rt9m3b',
    type: 'send',
    amount: '15',
    token: 'USDC',
    address: 'F3kL7...9rT2s',
    timestamp: '2 days ago',
    status: 'confirmed'
  },
  {
    id: '2Hw6j8z',
    type: 'receive',
    amount: '0.05',
    token: 'SOL',
    address: 'D7pQ5...1Lm3n',
    timestamp: '3 days ago',
    status: 'confirmed'
  }
];

const TransactionIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'send':
      return <ArrowUpRight className="text-red-500" />;
    case 'receive':
      return <ArrowDownRight className="text-green-500" />;
    case 'swap':
      return <RefreshCw className="text-blue-500" />;
    case 'nft':
      return <Sparkles className="text-purple-500" />;
    default:
      return <Wallet className="text-gray-500" />;
  }
};

const TransactionHistory = () => {
  return (
    <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
      <div className="border-b p-4">
        <h3 className="font-medium">Recent Transactions</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="py-3 px-4 text-left text-xs font-medium text-muted-foreground">Type</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-muted-foreground">Amount</th>
              <th className="hidden sm:table-cell py-3 px-4 text-left text-xs font-medium text-muted-foreground">Address/Details</th>
              <th className="py-3 px-4 text-right text-xs font-medium text-muted-foreground">Time</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-b hover:bg-muted/30 transition-colors">
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <TransactionIcon type={tx.type} />
                    </div>
                    <span className="capitalize text-sm font-medium">{tx.type}</span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="text-sm font-medium">
                    {tx.type === 'receive' ? '+' : tx.type === 'send' ? '-' : ''}{tx.amount} {tx.token}
                  </div>
                </td>
                <td className="hidden sm:table-cell py-3 px-4 text-sm text-muted-foreground">
                  {tx.address}
                </td>
                <td className="py-3 px-4 text-right">
                  <span className="text-xs text-muted-foreground">{tx.timestamp}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
