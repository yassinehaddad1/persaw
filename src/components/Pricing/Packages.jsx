import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';
import './Packages.css';

const packages = [
  {
    name: 'Basic',
    price: '9.99',
    period: 'month',
    description: 'Perfect for starters with essential channels and features',
    features: [
      '1000+ Live Channels',
      'HD Quality Streaming',
      '24/7 Customer Support',
      'Compatible on 1 Device',
      '7-Day Catch-up TV',
      'Video on Demand Access'
    ],
    featured: false
  },
  {
    name: 'Premium',
    price: '19.99',
    period: 'month',
    description: 'Most popular package with advanced features and more channels',
    features: [
      '2000+ Live Channels',
      'FHD Quality Streaming',
      'Priority 24/7 Support',
      'Compatible on 2 Devices',
      '14-Day Catch-up TV',
      'Premium VOD Library',
      'Sports & Movie Packages',
      'Multi-language Subtitles'
    ],
    featured: true
  },
  {
    name: 'Ultimate',
    price: '29.99',
    period: 'month',
    description: 'The complete package with all premium features and content',
    features: [
      '3000+ Live Channels',
      '4K Ultra HD Streaming',
      'VIP 24/7 Support',
      'Compatible on 4 Devices',
      '30-Day Catch-up TV',
      'Full VOD Library Access',
      'All Sports & Movies',
      'PPV Events Included',
      'Recording Feature',
      'Custom Channel List'
    ],
    featured: false
  }
];

const Packages = () => {
  return (
    <section className="packages-section" id="packages">
      <div className="packages-container">
        <motion.div
          className="packages-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="packages-title">Choose Your Perfect Plan</h2>
          <p className="packages-subtitle">
            Select from our competitive packages and enjoy premium content with high-quality streaming
          </p>
        </motion.div>

        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`package-card ${pkg.featured ? 'featured' : ''}`}>
                {pkg.featured && <span className="featured-badge">Most Popular</span>}
                
                <div className="package-header">
                  <h3 className="package-name">{pkg.name}</h3>
                  <div className="package-price">
                    <span className="currency">$</span>
                    <span className="amount">{pkg.price}</span>
                    <span className="period">/{pkg.period}</span>
                  </div>
                  <p className="package-description">{pkg.description}</p>
                </div>

                <div className="features-list">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="feature-item">
                      <CheckCircleIcon className="feature-icon" />
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#"
                  className={`package-button ${pkg.featured ? 'primary' : 'secondary'}`}
                >
                  {pkg.featured ? 'Get Started Now' : 'Choose Plan'}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
