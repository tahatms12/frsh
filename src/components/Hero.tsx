import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x1234567890abcdef1234567890abcdef12345678";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://24vzlu2kzs.ufs.sh/f/4JlBnp1v6U48k8uO4IDmleihCX1jUIwbvFKds0kp6Aug7WrS" 
            alt="FRSHMEME Logo" 
            className="w-32 h-32 mx-auto mb-8 rounded-full animate-pulse-glow"
          />
          
          <h1 className="text-4xl md:text-7xl font-black mb-6">
            <span className="neon-text">$FRSHMEME</span>
          </h1>
          
          <p className="text-xl md:text-3xl mb-8 electric-text font-bold">
            The Freshest Memes on the Blockchain
          </p>
          
          <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto text-gray-300">
            Strategic meme coin investment fund deploying transaction fees to identify and invest in 
            high-potential tokens before mainstream adoption. Join the revolution of fresh memes!
          </p>

          {/* Contract Address */}
          <div className="glass-card p-6 max-w-2xl mx-auto mb-8">
            <p className="text-sm text-gray-400 mb-2">Contract Address</p>
            <div className="flex items-center justify-center space-x-2">
              <code className="text-neon-green font-mono text-sm md:text-base break-all">
                {contractAddress}
              </code>
              <button
                onClick={copyToClipboard}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                title="Copy to clipboard"
              >
                <Copy size={16} className={copied ? 'text-neon-green' : 'text-white'} />
              </button>
            </div>
            {copied && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-neon-green text-sm mt-2"
              >
                Copied to clipboard!
              </motion.p>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.button
              className="bg-neon-green text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-neon-green/80 transition-all duration-300 animate-pulse-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Buy $FRSHMEME
            </motion.button>
            
            <motion.button
              className="border-2 border-electric-blue text-electric-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-electric-blue hover:text-black transition-all duration-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Chart</span>
              <ExternalLink size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;