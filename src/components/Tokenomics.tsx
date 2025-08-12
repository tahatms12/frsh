import React from 'react';
import { Coins, Users, Flame, Lock } from 'lucide-react';

const Tokenomics: React.FC = () => {
  const tokenStats = [
    { icon: <Coins className="w-8 h-8" />, title: 'Total Supply', value: '1,000,000,000' },
    { icon: <Users className="w-8 h-8" />, title: 'Circulating Supply', value: '750,000,000' },
    { icon: <Flame className="w-8 h-8" />, title: 'Burned Tokens', value: '100,000,000' },
    { icon: <Lock className="w-8 h-8" />, title: 'Locked Liquidity', value: '150,000,000' },
  ];

  return (
    <section id="tokenomics" className="py-16 lg:py-24 relative z-10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-black mb-6 electric-text text-accent text-center">Tokenomics</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {tokenStats.map(stat => (
            <div key={stat.title} className="glass-card p-6 rounded-xl text-center">
              <div className="mb-2 flex justify-center">{stat.icon}</div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-muted text-sm">{stat.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
