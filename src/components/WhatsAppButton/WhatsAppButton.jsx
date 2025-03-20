import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const whatsappNumber = '+212679550640';
    const message = encodeURIComponent('Hello! I\'m interested in your IPTV service.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.div 
      className="whatsapp-button"
      onClick={handleWhatsAppClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <WhatsAppIcon className="whatsapp-icon" />
      <span className="whatsapp-tooltip">Chat with us!</span>
    </motion.div>
  );
};

export default WhatsAppButton;
