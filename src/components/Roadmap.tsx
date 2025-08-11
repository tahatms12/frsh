import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle, Clock } from 'lucide-react';

const Roadmap: React.FC = () => {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Foundation & Launch",
      status: "completed",
      items: [
        "Token contract deployment",
        "Initial liquidity provision",
        "Community building",
        "Website launch"
      ]
    },
    {
      phase: "Phase 2",
      title: "Portfolio Development",
      status: "in-progress",
      items: [
        "Strategic meme coin investments",
        "Portfolio tracking system",
        "Community governance setup",
        "First airdrop preparation"
      ]
    },
    {
      phase: "Phase 3",
      title: "Expansion & Growth",
      status: "upcoming",
      items: [
        "DEX listings expansion",
        "Partnership announcements",
        "Advanced trading features",
        "Mobile app development"
      ]
    },
    {
      phase: "Phase 4",
      title: "Ecosystem Maturity",
      status: "upcoming",
      items: [
        "Cross-chain integration",
        "NFT marketplace",
        "Staking rewards program",
        "Global community events"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-neon-green" />;
      case 'in-progress':
        return <Clock className="w-6 h-6 text-electric-blue" />;
      default:
        return <Circle className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-neon-green';
      case 'in-progress':
        return 'border-electric-blue';
      default:
        return 'border-gray-400';
    }
  };

  return (
    <section id="roadmap" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 neon-text">
            Roadmap
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Our strategic plan for building the ultimate meme coin investment ecosystem.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12"
            >
              {/* Timeline Line */}
              {index < roadmapItems.length - 1 && (
                <div className="absolute left-1/2 top-20 w-0.5 h-32 bg-gray-600 transform -translate-x-1/2 hidden md:block" />
              )}

              <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <div className="glass-card p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">{item.phase}</h3>
                      {getStatusIcon(item.status)}
                    </div>
                    <h4 className="text-xl font-semibold text-electric-blue mb-4">
                      {item.title}
                    </h4>
                    <ul className="space-y-2">
                      {item.items.map((listItem, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-neon-green rounded-full mr-3 flex-shrink-0" />
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="w-full md:w-2/12 flex justify-center my-4 md:my-0">
                  <div className={`w-16 h-16 rounded-full border-4 ${getStatusColor(item.status)} bg-dark-bg flex items-center justify-center`}>
                    {getStatusIcon(item.status)}
                  </div>
                </div>

                {/* Spacer */}
                <div className="w-full md:w-5/12" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 electric-text">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6">
              Follow our progress and get notified about major milestones and announcements.
            </p>
            <button className="bg-neon-green text-black px-8 py-3 rounded-lg font-bold hover:bg-neon-green/80 transition-colors">
              Join Community
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;