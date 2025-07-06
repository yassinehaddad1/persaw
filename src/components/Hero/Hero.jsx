import React from 'react';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './Hero.css';

const channels = [
  { id: 1, logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' },
  { id: 2, logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Shahid.net_New_Logo.png' },
  { id: 4, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/1280px-ESPN_wordmark.svg.png' },
  { id: 5, logo: 'https://alzabeele.com/ar/wp-content/uploads/2023/10/beIN-Sports-logo-White-500-300x124.png' },
  { id: 3, logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg' },
  { id: 6, logo: 'https://www.pngall.com/wp-content/uploads/15/HBO-Logo-PNG-Image.png' },
  { id: 8, logo: 'https://brandlogos.net/wp-content/uploads/2022/01/amazon_prime_video-logo-brandlogo.net_.png' },
  { id: 7, logo: 'https://hyken.com/wp-content/uploads/2023/01/Apple-TV-Logo-2019-present.png' },
  // Duplicate channels for seamless scrolling
  { id: 9, logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' },
  { id: 10, logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Shahid.net_New_Logo.png' },
  { id: 11, logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg' },
  { id: 12, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/1280px-ESPN_wordmark.svg.png' }
];

const Hero = () => {
  return (
    <>
      <section className="hero-section" id="home">
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover Premium IPTV Service
              <div className="highlight-text">Movies, TV shows and more</div>
            </motion.h1>
            <motion.p 
              className="hero-tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
            </motion.p>
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="https://wa.me/+212679550640" target="_blank" rel="noopener noreferrer" className="discover-button">
                <span>Get Started</span>
                <ArrowForwardIcon className="arrow-icon" />
              </a>
              <a href="https://wa.me/+212679550640" target="_blank" rel="noopener noreferrer" className="watch-button">
                <PlayArrowIcon className="play-icon" />
                <span>Watch Demo</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <div className="channels-strip">
        <div className="channels-scroll">
          <div className="channels-container">
            {channels.map((channel) => (
              <motion.div
                key={channel.id}
                className="channel-item"
                whileHover={{ scale: 1.1 }}
              >
                <img src={channel.logo} alt="channel logo" className="channel-logo" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
