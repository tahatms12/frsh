import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Strategic Investment",
      description: "We identify and invest in high-potential meme tokens before they achieve mainstream adoption."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Proven Track Record",
      description: "Our rigorous selection process focuses on coins with strong communities and long-term growth potential."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Community Rewards",
      description: "Post-graduation, our community receives proportional $FRSHMEME airdrops based on portfolio performance."
    }
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 neon-text">
            About $FRSHMEME
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            The next generation meme coin investment fund that combines strategic portfolio management 
            with community-driven rewards. We don't just hodl - we strategically deploy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="text-neon-green mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 electric-text">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-xl mt-16"
        >
          <h3 className="text-3xl font-bold mb-6 text-center electric-text">
            Our Mission
          </h3>
          <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            Once our token graduates, we will begin airdropping $FRSHMEME to our community. 
            We strategically deploy transaction fees by sharpshooting promising memes and investing 
            in meme coins before they graduate. We only maintain positions in coins with proven long-term value.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;