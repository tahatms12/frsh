import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, MessageCircle, Send, Users, Activity, Trophy } from 'lucide-react';

const Community: React.FC = () => {
  const socialLinks = [
    {
      name: "Twitter",
      icon: <Twitter className="w-8 h-8" />,
      followers: "25.4K",
      link: "#",
      color: "hover:text-blue-400"
    },
    {
      name: "Discord",
      icon: <MessageCircle className="w-8 h-8" />,
      followers: "18.2K",
      link: "#",
      color: "hover:text-purple-400"
    },
    {
      name: "Telegram",
      icon: <Send className="w-8 h-8" />,
      followers: "32.1K",
      link: "#",
      color: "hover:text-blue-500"
    }
  ];

  const communityStats = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Total Holders",
      value: "12,847",
      change: "+15.2%"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Daily Transactions",
      value: "2,341",
      change: "+8.7%"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Community Score",
      value: "9.2/10",
      change: "+0.3"
    }
  ];

  return (
    <section id="community" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 electric-text">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Connect with fellow meme enthusiasts, stay updated on portfolio performance, 
            and be part of the freshest community in crypto.
          </p>
        </motion.div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {communityStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-xl text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-neon-green mb-4 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {stat.title}
              </h3>
              <p className="text-3xl font-black text-electric-blue mb-2">
                {stat.value}
              </p>
              <p className="text-neon-green text-sm">
                {stat.change} this week
              </p>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card p-8 rounded-xl text-center hover:scale-105 transition-all duration-300 ${social.color} group`}
            >
              <div className="text-white group-hover:scale-110 transition-transform duration-300 mb-4 flex justify-center">
                {social.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {social.name}
              </h3>
              <p className="text-2xl font-black text-electric-blue mb-2">
                {social.followers}
              </p>
              <p className="text-gray-400 text-sm">
                Followers
              </p>
            </motion.a>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-xl max-w-2xl mx-auto text-center"
        >
          <h3 className="text-3xl font-bold mb-4 neon-text">
            Stay in the Loop
          </h3>
          <p className="text-gray-300 mb-6">
            Get exclusive updates on portfolio performance, new investments, and airdrop announcements.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-green"
            />
            <button className="bg-neon-green text-black px-8 py-3 rounded-lg font-bold hover:bg-neon-green/80 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Community Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-xl mt-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center electric-text">
            Community Guidelines
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-neon-green mb-3">✅ Do's</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Share quality meme content</li>
                <li>• Engage respectfully with others</li>
                <li>• Contribute to discussions</li>
                <li>• Support fellow community members</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-red-400 mb-3">❌ Don'ts</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Spam or excessive promotion</li>
                <li>• Share financial advice</li>
                <li>• Engage in toxic behavior</li>
                <li>• Spread misinformation</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;