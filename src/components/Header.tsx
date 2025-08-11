import React, { useState } from 'react';
import { Menu, X, Copy } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x1234567890abcdef1234567890abcdef12345678";
  const contractAddress = '0x1234567890abcdef1234567890abcdef12345678';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Strategy', href: '#strategy' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Community', href: '#community' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass-card border-b border-border backdrop-blur-md">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <motion.span
          className="text-2xl font-bold text-primary"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          $FRSHMEME
        </motion.span>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-text hover:text-primary transition-colors duration-200"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              {item.name}
            </motion.a>
          ))}
          <button
            onClick={copyToClipboard}
            className="hidden md:inline-flex btn bg-primary text-bg ml-6"
            aria-label="Copy contract address"
          >
            {copied ? 'Copied' : 'Copy Contract'}
            <Copy size={16} className="ml-2" />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.nav
          className="md:hidden border-t border-border bg-panel p-4 space-y-3"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block p-3 rounded-xl border border-border bg-panel text-text hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={copyToClipboard}
            className="w-full btn bg-primary text-bg mt-2"
            aria-label="Copy contract address"
          >
            {copied ? 'Copied' : 'Copy Contract'}
            <Copy size={16} className="ml-2" />
          </button>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
