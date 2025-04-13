
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AIChat from '@/components/AIChat';
import TransactionHistory from '@/components/TransactionHistory';
import { ArrowDownRight, ArrowUpRight, Coins, ExternalLink, Landmark, LineChart, MoreHorizontal, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const portfolioData = [
  { name: '1D', value: 516 },
  { name: '2D', value: 490 },
  { name: '3D', value: 530 },
  { name: '4D', value: 510 },
  { name: '5D', value: 485 },
  { name: '6D', value: 520 },
  { name: '7D', value: 516 }
];

const tokens = [
  { symbol: 'SOL', name: 'Solana', amount: '5.24', value: 516.23, change: '+2.3%', icon: '/placeholder.svg' },
  { symbol: 'USDC', name: 'USD Coin', amount: '245.00', value: 245.00, change: '0.0%', icon: '/placeholder.svg' },
  { symbol: 'RAY', name: 'Raydium', amount: '12.50', value: 16.25, change: '-1.5%', icon: '/placeholder.svg' },
  { symbol: 'BONK', name: 'Bonk', amount: '680,000.00', value: 34.00, change: '+15.2%', icon: '/placeholder.svg' }
];

const Dashboard = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Portfolio Summary */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Portfolio</CardTitle>
                    <CardDescription>Your asset overview</CardDescription>
                  </div>
                  <div>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold">$811.48</div>
                    <div className="flex items-center text-sm text-green-500 font-medium">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      +3.2% ($25.12)
                    </div>
                  </div>
                  <div className="text-right">
                    <Button className="blue-gradient">
                      <Wallet className="h-4 w-4 mr-2" />
                      Deposit
                    </Button>
                  </div>
                </div>
                
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={portfolioData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis hide />
                      <Tooltip />
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#4F46E5" 
                        strokeWidth={2}
                        fillOpacity={1} 
                        fill="url(#colorValue)" 
                        activeDot={{ r: 6 }} 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            {/* Tokens */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Tokens</CardTitle>
                    <CardDescription>Your token holdings</CardDescription>
                  </div>
                  <div>
                    <Button variant="outline" size="sm" className="h-8 px-2 text-xs">
                      <Coins className="h-3 w-3 mr-1" />
                      Manage
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="py-3 px-4 text-left text-xs font-medium text-muted-foreground">Asset</th>
                        <th className="py-3 px-4 text-right text-xs font-medium text-muted-foreground">Amount</th>
                        <th className="py-3 px-4 text-right text-xs font-medium text-muted-foreground">Value</th>
                        <th className="py-3 px-4 text-right text-xs font-medium text-muted-foreground">Change</th>
                        <th className="py-3 px-4 text-right text-xs font-medium text-muted-foreground"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {tokens.map((token) => (
                        <tr key={token.symbol} className="border-b hover:bg-muted/30 transition-colors">
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center overflow-hidden">
                                <img src={token.icon} alt={token.name} className="w-6 h-6" />
                              </div>
                              <div>
                                <div className="font-medium">{token.symbol}</div>
                                <div className="text-xs text-muted-foreground">{token.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-right">{token.amount}</td>
                          <td className="py-3 px-4 text-right">${token.value.toFixed(2)}</td>
                          <td className={`py-3 px-4 text-right ${token.change.startsWith('+') ? 'text-green-500' : token.change.startsWith('-') ? 'text-red-500' : ''}`}>
                            {token.change}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            
            {/* Transactions */}
            <TransactionHistory />
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="h-auto py-3 px-4 flex flex-col items-center justify-center border-dashed">
                    <ArrowUpRight className="h-5 w-5 mb-1" />
                    <span className="text-xs">Send</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-3 px-4 flex flex-col items-center justify-center border-dashed">
                    <ArrowDownRight className="h-5 w-5 mb-1" />
                    <span className="text-xs">Receive</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-3 px-4 flex flex-col items-center justify-center border-dashed">
                    <Coins className="h-5 w-5 mb-1" />
                    <span className="text-xs">Swap</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-3 px-4 flex flex-col items-center justify-center border-dashed">
                    <Landmark className="h-5 w-5 mb-1" />
                    <span className="text-xs">Stake</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Market Overview */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Market</CardTitle>
                  <LineChart className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium">SOL</span>
                    </div>
                    <div>
                      <div className="font-medium">Solana</div>
                      <div className="text-xs text-muted-foreground">SOL</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$98.51</div>
                    <div className="text-xs text-green-500">+2.3%</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pb-2 border-b">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium">JUP</span>
                    </div>
                    <div>
                      <div className="font-medium">Jupiter</div>
                      <div className="text-xs text-muted-foreground">JUP</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$0.68</div>
                    <div className="text-xs text-green-500">+5.7%</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pb-2 border-b">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium">BONK</span>
                    </div>
                    <div>
                      <div className="font-medium">Bonk</div>
                      <div className="text-xs text-muted-foreground">BONK</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$0.00005</div>
                    <div className="text-xs text-green-500">+15.2%</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* AI Chat */}
            <div className="h-[500px]">
              <AIChat />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
