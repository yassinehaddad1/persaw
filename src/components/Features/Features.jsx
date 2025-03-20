import React from 'react';
import { motion } from 'framer-motion';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import HdIcon from '@mui/icons-material/Hd';
import DevicesIcon from '@mui/icons-material/Devices';
import SupportIcon from '@mui/icons-material/Support';
import MovieIcon from '@mui/icons-material/Movie';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import './Features.css';

const features = [
  {
    icon: <LiveTvIcon sx={{ fontSize: 40 }} />,
    title: 'Live TV Channels',
    description: 'Access to thousands of live TV channels from around the world'
  },
  {
    icon: <HdIcon sx={{ fontSize: 40 }} />,
    title: '4K Quality',
    description: 'Crystal clear streaming quality up to 4K resolution'
  },
  {
    icon: <DevicesIcon sx={{ fontSize: 40 }} />,
    title: 'Multi-Device Support',
    description: 'Watch on your TV, computer, tablet, or smartphone'
  },
  {
    icon: <SupportIcon sx={{ fontSize: 40 }} />,
    title: '24/7 Support',
    description: 'Round-the-clock customer support for all your needs'
  },
  {
    icon: <MovieIcon sx={{ fontSize: 40 }} />,
    title: 'VOD Library',
    description: 'Extensive video-on-demand library with latest releases'
  },
  {
    icon: <SportsSoccerIcon sx={{ fontSize: 40 }} />,
    title: 'Sports Coverage',
    description: 'Complete coverage of major sporting events worldwide'
  }
];

const Features = () => {
  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="features-title">Why Choose Us</h2>
          <p className="features-subtitle">
            Experience the best in IPTV streaming with our premium features
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
