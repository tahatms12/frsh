import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy } from 'lucide-react';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = '0x1234567890abcdef1234567890abcdef12345678';
  const truncated = `${contractAddress.slice(0, 6)}...${contractAddress.slice(-4)}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="pt-28 pb-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-7xl font-black mb-6">
            <span className="neon-text text-primary">$FRSHMEME</span>
          </h1>

          <p className="text-xl md:text-3xl mb-6 electric-text font-bold">
            The Freshest Memes on the Blockchain
          </p>

          <p className="mt-2 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 text-gray-300">
            Strategic meme coin investment fund deploying transaction fees to identify and invest in high-potential tokens before mainstream adoption.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#" className="btn bg-primary text-bg">Get $FRSHMEME</a>
            <a href="#tokenomics" className="btn border border-accent text-accent">Read Tokenomics</a>
          </div>

          <div className="mt-8 panel inline-flex items-center gap-2 mx-auto lg:mx-0 px-3 py-2">
            <code className="font-mono text-sm text-primary">{truncated}</code>
            <button onClick={copyToClipboard} className="p-2" aria-label="Copy contract address">
              <Copy size={16} className={copied ? 'text-primary' : 'text-text'} />
            </button>
          </div>

          <button onClick={copyToClipboard} className="btn bg-primary text-bg mt-6 w-full md:hidden">
            {copied ? 'Copied' : 'Copy Contract'}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-first lg:order-none"
        >
          <a href="https://freshmemes.online" target="_blank" rel="noopener noreferrer">
            <img
              src="https://24vzlu2kzs.ufs.sh/f/4JlBnp1v6U48BXIWOt05OPyAfFeIhl8ozGWJvapM630EjLKD"
              alt="FRSHMEME Logo"
              width={128}
              height={128}
              className="mx-auto mb-8 rounded-full"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
