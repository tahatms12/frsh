import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Coins,
  Users,
  Flame,
  Lock,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';

const Tokenomics: React.FC = () => {
  const [price, setPrice] = useState(1);
  const [change, setChange] = useState<{ percent: number; up: boolean }>({
    percent: 0,
    up: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const up = Math.random() > 0.5;
      const percent = up
        ? Math.random() * (7265423 - 7) + 7
        : Math.random() * (32 - 7) + 7;
      const multiplier = up ? 1 + percent / 100 : 1 - percent / 100;
      setPrice((prev) => prev * multiplier);
      setChange({ percent, up });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const tokenStats = [
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Total Supply",
      value: "1,000,000,000",
      subtitle: "FRSHMEME"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Circulating Supply",
      value: "750,000,000",
      subtitle: "75% of total"
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Burned Tokens",
      value: "100,000,000",
      subtitle: "10% burned"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Locked Liquidity",
      value: "150,000,000",
      subtitle: "15% locked"
    }
  ];

  const distribution = [
    { label: "Public Sale", percentage: 40, color: "bg-primary" },
    { label: "Liquidity Pool", percentage: 25, color: "bg-accent" },
    { label: "Team & Development", percentage: 15, color: "bg-purple-500" },
    { label: "Marketing", percentage: 10, color: "bg-yellow-500" },
    { label: "Airdrops & Rewards", percentage: 10, color: "bg-pink-500" }
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
          <h2 className="font-black mb-6 electric-text text-accent">
            Tokenomics
          </h2>
          <p className="text-xl text-muted max-w-4xl mx-auto">
            Transparent and sustainable token economics designed for long-term growth and community rewards.
          </p>
        </motion.div>

        {/* Live Price */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-muted">Live $FRSHMEME Price</p>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-4xl font-extrabold text-text">
          <p className="text-gray-300">Live $FRSHMEME Price</p>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-4xl font-extrabold text-white">
              $
              {price.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </span>
            {change.up ? (
              <ArrowUpRight className="w-6 h-6 text-primary" />
              <ArrowUpRight className="w-6 h-6 text-neon-green" />
            ) : (
              <ArrowDownRight className="w-6 h-6 text-red-500" />
            )}
          </div>
          <p
            className={`text-lg font-bold ${
              change.up ? 'text-primary' : 'text-red-500'
              change.up ? 'text-neon-green' : 'text-red-500'
            }`}
          >
            {change.up ? '+' : '-'}
            {change.percent.toFixed(2)}%
          </p>
        </motion.div>

        {/* Token Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tokenStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="panel p-6 text-center hover:-translate-y-0.5 hover:scale-[1.01] transition-transform duration-200"
            >
              <div className="text-primary mb-4 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-lg font-bold text-text mb-2">
                {stat.title}
              </h3>
              <p className="text-2xl font-black text-accent mb-1">
                {stat.value}
              </p>
              <p className="text-muted text-sm">
                {stat.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
        <p className="text-sm text-muted text-center mb-16">Supply capped at 1B tokens with 10% permanently burned.</p>

        {/* Token Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="panel p-8"
        >
          <h3 className="text-3xl font-bold mb-8 text-center neon-text">
            Token Distribution
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Distribution Chart */}
            <div className="relative">
              <div className="w-64 h-64 mx-auto relative">
                {distribution.map((item, index) => {
                  const angle = (item.percentage / 100) * 360;
                  const rotation = distribution.slice(0, index).reduce((sum, prev) => sum + (prev.percentage / 100) * 360, 0);
                  
                  return (
                    <div
                      key={index}
                      className={`absolute inset-0 rounded-full ${item.color}`}
                      style={{
                        clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.sin((angle * Math.PI) / 180)}% ${50 - 50 * Math.cos((angle * Math.PI) / 180)}%, 50% 50%)`,
                        transform: `rotate(${rotation}deg)`,
                      }}
                    />
                  );
                })}
                <div className="absolute inset-4 bg-bg rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-2xl font-bold neon-text">$FRSHMEME</p>
                    <p className="text-muted text-sm">Distribution</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Distribution Legend */}
            <div className="space-y-4">
              {distribution.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className={`w-4 h-4 rounded ${item.color}`}></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="text-text font-semibold">{item.label}</span>
                      <span className="text-muted">{item.percentage}%</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Airdrop Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="panel p-8 mt-8"
        >
          <h3 className="text-3xl font-bold mb-6 text-center electric-text">
            Airdrop Eligibility
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-primary text-4xl font-bold mb-2">1000+</div>
              <p className="text-muted">Minimum $FRSHMEME Holdings</p>
            </div>
            <div className="text-center">
              <div className="text-accent text-4xl font-bold mb-2">30</div>
              <p className="text-muted">Days Holding Period</p>
            </div>
            <div className="text-center">
              <div className="text-primary text-4xl font-bold mb-2">5+</div>
              <p className="text-muted">Community Interactions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;
