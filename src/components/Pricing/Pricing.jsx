import React from 'react';
import { motion } from 'framer-motion';
import CheckIcon from '@mui/icons-material/Check';
import './Pricing.css';

const plans = [
  {
    name: 'Basic',
    price: '9.99',
    duration: '1 Month',
    features: [
      'Full HD Streaming',
      '10,000+ Live Channels',
      'Movies & TV Shows',
      '24/7 Support',
      'Multi-device Access'
    ]
  },
  {
    name: 'Standard',
    price: '24.99',
    duration: '3 Months',
    popular: true,
    features: [
      '4K Ultra HD Streaming',
      '15,000+ Live Channels',
      'Premium Movies & Series',
      'Priority Support',
      'Multi-device Access',
      'No Buffering'
    ]
  },
  {
    name: 'Premium',
    price: '39.99',
    duration: '12 Months',
    features: [
      '4K Ultra HD Streaming',
      '20,000+ Live Channels',
      'Premium Movies & Series',
      'VIP Support',
      'Multi-device Access',
      'No Buffering',
      'PPV Events Included'
    ]
  }
];

const Pricing = () => {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        <motion.div
          className="pricing-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="pricing-title">Choose Your Plan</h2>
          <p className="pricing-subtitle">
            Select the perfect plan for your entertainment needs
          </p>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {plan.popular && <div className="popular-tag">Most Popular</div>}
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price}</span>
                  <span className="duration">/{plan.duration}</span>
                </div>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <CheckIcon className="check-icon" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={plan.name === 'Basic' 
                  ? "https://www.paypal.com/ncp/payment/H6MTWG9Z9UQK4"
                  : plan.name === 'Standard'
                  ? "https://www.paypal.com/ncp/payment/A42B65BLZFTSG"
                  : "https://www.paypal.com/ncp/payment/ZLM4KPZDQF9B6"}
                className={`select-plan-btn ${plan.popular ? 'popular' : ''}`}
              >
                Get Now
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="pricing-footer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="pricing-note">
            All plans include 24/7 customer support and a 100% satisfaction guarantee
          </p>
          <a href="#contact" className="contact-sales-btn">
            Contact Sales for Custom Plans
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
