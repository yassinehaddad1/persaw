import React from 'react';
import { motion } from 'framer-motion';
import './Reviews.css';

const reviews = [
  {
    id: 1,
    image: 'https://s11.aconvert.com/convert/p3r68-cdx67/324g7-51qus.jpg', // Replace with your actual review screenshot URL
    platform: '',
    name: 'From French',
    rating: 5,
    comment: '★★★★★ Exceptional service! The picture quality is crystal clear and the channel selection is vast. Customer support responds within minutes!'
  },
  {
    id: 2,
    platform: '',
    name: 'From Morocco',
    image: 'https://s11.aconvert.com/convert/p3r68-cdx67/41fqi-v6tn0.jpg', // Replace with your actual review screenshot URL
    
    rating: 5,
    comment: '★★★★★ Been using this service for 6 months now. Never had any buffering issues. The VOD library is amazing!'
  },
  {
    id: 3,
    image: 'https://s11.aconvert.com/convert/p3r68-cdx67/kp8vy-7j364.jpg', // Replace with your actual review screenshot URL
    platform: '',
    name: 'Saudi Arabia',
    rating: 5,
    comment: '★★★★★ Perfect for international channels. Works great on my Smart TV and mobile devices. Highly recommended!'
  }
];

const Reviews = () => {
  return (
    <section className="reviews-section" id="reviews">
      <motion.div 
        className="reviews-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="reviews-title">Our Happy Customers</h2>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              className="review-card"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="review-image-container">
                <img src={review.image} alt={`${review.platform} review by ${review.name}`} className="review-image" />
              </div>
              <div className="review-content">
                <div className="review-platform">{review.platform}</div>
                <h3 className="review-name">{review.name}</h3>
                <p className="review-comment">{review.comment}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Reviews;
