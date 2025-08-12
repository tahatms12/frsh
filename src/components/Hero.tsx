import React, { useState } from 'react';
import { Copy } from 'lucide-react';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = '0x1234567890abcdef1234567890abcdef12345678';
  const truncated = `${contractAddress.slice(0,6)}...${contractAddress.slice(-4)}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="pt-28 pb-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="font-black neon-text text-primary">$FRSHMEME</h1>
          <p className="mt-4 text-xl text-muted max-w-xl mx-auto lg:mx-0">
            The Freshest Memes on the Blockchain. Strategic meme coin investment fund deploying transaction fees to identify and invest in high-potential tokens before mainstream adoption.
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
        </div>
        <div className="order-first lg:order-none">
          <a href="https://freshmemes.online" target="_blank" rel="noopener noreferrer">
            <img
              src="https://24vzlu2kzs.ufs.sh/f/4JlBnp1v6U48BXIWOt05OPyAfFeIhl8ozGWJvapM630EjLKD"
              alt="FRSHMEME Logo"
              width={128}
              height={128}
              className="mx-auto mb-8 rounded-full"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
