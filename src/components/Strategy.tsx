import React from 'react';
import { motion } from 'framer-motion';
import { Target, Brain, Rocket, Users } from 'lucide-react';

const Strategy: React.FC = () => {
  const strategies = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Precision Targeting",
      description: "We identify meme coins with strong fundamentals before they hit mainstream radar."
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Data-Driven Analysis",
      description: "Our team analyzes community growth, tokenomics, and market sentiment for optimal entry points."
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Early Stage Investment",
      description: "We invest in promising projects during their early stages for maximum growth potential."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Community First",
      description: "Strong communities drive long-term success. We prioritize projects with engaged user bases."
    }
  ];

  return (
    <section id="strategy" className="py-16 lg:py-24 relative z-10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-black mb-6 electric-text">
            Investment Strategy
          </h2>
          <p className="text-xl text-muted max-w-4xl mx-auto">
            Our sophisticated approach to meme coin investment combines technical analysis, 
            community assessment, and strategic timing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-primary mb-4 flex justify-center">
                {strategy.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-text">
                {strategy.title}
              </h3>
              <p className="text-muted text-sm">
                {strategy.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-xl"
        >
          <h3 className="text-3xl font-bold mb-6 text-center neon-text">
            Our Investment Philosophy
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted mb-6 leading-relaxed">
              We operate as a sophisticated meme coin investment fund, utilizing transaction fees to identify 
              and invest in high-potential meme tokens before they achieve mainstream adoption. Our rigorous 
              selection process focuses on coins with strong communities, proven staying power, and long-term 
              growth potential.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              Post-graduation, our community will receive proportional $FRSHMEME airdrops based on our 
              portfolio performance. This creates a symbiotic relationship where our success directly 
              benefits our token holders.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Strategy;