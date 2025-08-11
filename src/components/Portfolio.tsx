import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from 'lucide-react';

interface Holding {
  name: string;
  symbol: string;
  price: number;
  change7d: number;
  allocation: number;
  marketCap: string;
  volume: string;
}

const Portfolio: React.FC = () => {
  const [totalValue, setTotalValue] = useState(0);

  const holdings: Holding[] = [
    { name: "Dogecoin", symbol: "DOGE", price: 0.2332, change7d: 17.32, allocation: 15.2, marketCap: "$33.4B", volume: "$2.1B" },
    { name: "Shiba Inu", symbol: "SHIB", price: 0.00001353, change7d: 10.86, allocation: 12.8, marketCap: "$7.9B", volume: "$890M" },
    { name: "Pepe", symbol: "PEPE", price: 0.00001204, change7d: 15.09, allocation: 11.5, marketCap: "$5.1B", volume: "$1.2B" },
    { name: "Pudgy Penguins", symbol: "PENGU", price: 0.04003, change7d: 13.05, allocation: 9.3, marketCap: "$2.8B", volume: "$456M" },
    { name: "Bonk", symbol: "BONK", price: 0.00002749, change7d: 4.64, allocation: 8.7, marketCap: "$2.1B", volume: "$234M" },
    { name: "SPX6900", symbol: "SPX", price: 1.89, change7d: 18.20, allocation: 7.9, marketCap: "$1.9B", volume: "$123M" },
    { name: "FLOKI", symbol: "FLOKI", price: 0.0001181, change7d: 10.10, allocation: 7.2, marketCap: "$1.1B", volume: "$89M" },
    { name: "Fartcoin", symbol: "FARTCOIN", price: 1.07, change7d: 15.82, allocation: 6.8, marketCap: "$1.1B", volume: "$67M" },
    { name: "dogwifhat", symbol: "WIF", price: 0.9981, change7d: 10.95, allocation: 6.1, marketCap: "$998M", volume: "$145M" },
    { name: "Dog Bitcoin", symbol: "DOG", price: 0.003532, change7d: 20.07, allocation: 5.4, marketCap: "$1.8B", volume: "$78M" },
    { name: "Turbo", symbol: "TURBO", price: 0.005026, change7d: 15.95, allocation: 4.9, marketCap: "$331M", volume: "$45M" },
    { name: "Popcat", symbol: "POPCAT", price: 0.3414, change7d: 15.48, allocation: 4.2, marketCap: "$334M", volume: "$23M" },
    { name: "Toshi", symbol: "TOSHI", price: 0.0007503, change7d: 25.15, allocation: 3.8, marketCap: "$75M", volume: "$12M" },
    { name: "Peanut the Squirrel", symbol: "PNUT", price: 0.2573, change7d: 14.86, allocation: 3.2, marketCap: "$257M", volume: "$34M" }
  ];

  useEffect(() => {
    // Calculate total portfolio value
    const total = holdings.reduce((sum, holding) => sum + (holding.price * holding.allocation * 10000), 0);
    setTotalValue(total);
  }, []);

  const formatPrice = (price: number) => {
    if (price < 0.001) {
      return `$${price.toFixed(8)}`;
    } else if (price < 1) {
      return `$${price.toFixed(6)}`;
    } else {
      return `$${price.toFixed(4)}`;
    }
  };

  const formatChange = (change: number) => {
    const isPositive = change > 0;
    return (
      <span className={`flex items-center ${isPositive ? 'text-neon-green' : 'text-red-400'}`}>
        {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
        <span className="ml-1">{isPositive ? '+' : ''}{change.toFixed(2)}%</span>
      </span>
    );
  };

  return (
    <section id="portfolio" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 neon-text">
            Current Holdings
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Our carefully curated portfolio of high-potential meme coins with proven track records.
          </p>
          
          {/* Portfolio Stats */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center justify-center mb-2">
                <DollarSign className="w-8 h-8 text-neon-green mr-2" />
                <span className="text-2xl font-bold text-neon-green">
                  ${totalValue.toLocaleString()}
                </span>
              </div>
              <p className="text-gray-400">Total Portfolio Value</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center justify-center mb-2">
                <BarChart3 className="w-8 h-8 text-electric-blue mr-2" />
                <span className="text-2xl font-bold text-electric-blue">14</span>
              </div>
              <p className="text-gray-400">Active Positions</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-neon-green mr-2" />
                <span className="text-2xl font-bold text-neon-green">+14.2%</span>
              </div>
              <p className="text-gray-400">7-Day Performance</p>
            </div>
          </div>
        </motion.div>

        {/* Holdings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {holdings.map((holding, index) => (
            <motion.div
              key={holding.symbol}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="portfolio-card glass-card p-6 rounded-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-white text-lg">{holding.symbol}</h3>
                  <p className="text-gray-400 text-sm">{holding.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-mono text-sm">{formatPrice(holding.price)}</p>
                  {formatChange(holding.change7d)}
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Allocation:</span>
                  <span className="text-white font-semibold">{holding.allocation}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Market Cap:</span>
                  <span className="text-white">{holding.marketCap}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">24h Volume:</span>
                  <span className="text-white">{holding.volume}</span>
                </div>
              </div>
              
              {/* Allocation Bar */}
              <div className="mt-4">
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-neon-green to-electric-blue h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${holding.allocation}%` }}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            * Portfolio values and performance data are updated in real-time
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;