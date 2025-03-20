import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="contact-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in Touch
          </motion.h2>
          
          <motion.div 
            className="contact-cards"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="contact-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <WhatsAppIcon className="contact-icon" />
              <h3>WhatsApp</h3>
              <p>Message us anytime</p>
              <a href="https://wa.me/+212679550640" target="_blank" rel="noopener noreferrer" className="contact-button">
                Chat Now
              </a>
            </motion.div>

            <motion.div 
              className="contact-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <PhoneIcon className="contact-icon" />
              <h3>Phone</h3>
              <p>24/7 Support Available</p>
              <a href="tel:+212679550640" className="contact-button">
                Call Now
              </a>
            </motion.div>

            <motion.div 
              className="contact-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LocationOnIcon className="contact-icon" />
              <h3>Location</h3>
              <p>United States</p>
              <span className="contact-info">Available Worldwide</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
