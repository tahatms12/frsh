import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Coins, Users, Flame, Lock, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Tokenomics: React.FC = () => {
  const [price, setPrice] = useState(1);
  const [change, setChange] = useState<{ percent: number; up: boolean }>({ percent: 0, up: true });

  useEffect(() => {
    const interval = setInterval(() => {
      const up = Math.random() > 0.5;
      const percent = up ? Math.random() * (7265423 - 7) + 7 : Math.random() * (32 - 7) + 7;
      const multiplier = up ? 1 + percent / 100 : 1 - percent / 100;
      setPrice((prev) => prev * multiplier);
      setChange({ percent, up });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const tokenStats = [
    { icon: <Coins className="w-8 h-8" />, title: 'Total Supply', value: '1,000,000,000', subtitle: 'FRSHMEME' },
    { icon: <Users className="w-8 h-8" />, title: 'Circulating Supply', value: '750,000,000', subtitle: '75% of total' },
    { icon: <Flame className="w-8 h-8" />, title: 'Burned Tokens', value: '100,000,000', subtitle: '10% burned' },
    { icon: <Lock className="w-8 h-8" />, title: 'Locked Liquidity', value: '150,000,000', subtitle: '15% locked' },
  ];

  const distribution = [
    { label: 'Public Sale', percentage: 40, color: 'bg-primary' },
    { label: 'Liquidity Pool', percentage: 25, color: 'bg-accent' },
    { label: 'Team & Development', percentage: 15, color: 'bg-purple-500' },
    { label: 'Marketing', percentage: 10, color: 'bg-yellow-500' },
    { label: 'Airdrops & Rewards', percentage: 10, color: 'bg-pink-500' },
  ];

  return (
    <section id="tokenomics" className="py-16 lg:py-24 relative z-10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-black mb-6 electric-text text-accent">Tokenomics</h2>
