import React from 'react';

const FloatingParticles: React.FC = () => {
  const particles = ['🚀', '💎', '🌙', '⚡', '🔥', '💰', '🎯', '⭐', '🎪'];

  return (
    <div className="floating-particles">
      {particles.map((particle, index) => (
        <div
          key={index}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        >
          {particle}
        </div>
      ))}
    </div>
  );
};

export default FloatingParticles;