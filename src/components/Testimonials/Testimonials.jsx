import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import left_arrow_icon from '../../assets/left_arrow_icon.png';
import right_arrow_icon from '../../assets/right_arrow_icon.png';
import test_img_1 from '../../assets/test_img_1.png';
import test_img_2 from '../../assets/test_img_2.png';
import test_img_3 from '../../assets/test_img_3.png';
import test_img_4 from '../../assets/test_img_4.png';

const testimonialsData = [
  {
    id: 1,
    name: 'Ravi Sharma',
    role: 'Marketing Director',
    company: 'Tech Innovations Inc',
    quote: "Oryve transformed our e-commerce strategy with their tailored solutions. Their attention to detail and personalized approach helped us achieve significant growth in online sales.",
    avatar: {test_img_1},
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Chief Operating Officer',
    company: 'Retail Solutions Ltd',
    quote: "Working with Oryve was a game-changer for our company. Their innovative solutions and exceptional service significantly boosted our operational efficiency.",
    avatar: {test_img_2},
  },
  {
    id: 3,
    name: 'Amit Singh',
    role: 'CEO',
    company: 'E-Commerce Experts',
    quote: "Oryve's expertise in e-commerce is unmatched. Their customized solutions helped us expand our market reach and increase our revenue substantially.",
    avatar: {test_img_3},
  },
  {
    id: 4,
    name: 'Sneha Desai',
    role: 'Product Manager',
    company: 'Digital Goods Corp',
    quote: "Oryve provided us with outstanding service and innovative solutions that propelled our product sales to new heights. We couldn't be happier with the results.",
    avatar: {test_img_4},
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentTestimonial]);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentTestimonial((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentTestimonial((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className='testimonials'>
      <h1 className='heading'>What Our Clients Say About <span>Oryve</span></h1>
      <div className='testimonial-slider'>
        <div className={`testimonial-slide ${isAnimating ? 'animating' : ''}`}>
          <div className='testimonial-content'>
            <div className='avatar-container'>
              <img src={testimonialsData[currentTestimonial].avatar} alt={testimonialsData[currentTestimonial].name} className='avatar' />
            </div>
            <div className='testimonial-details'>
              <h4>{testimonialsData[currentTestimonial].name}</h4>
              <p className='role'>{testimonialsData[currentTestimonial].role} | <span>{testimonialsData[currentTestimonial].company}</span></p>
              <p className='quote'>{testimonialsData[currentTestimonial].quote}</p>
            </div>
          </div>
        </div>
        <div className='testimonial-nav'>
          <button className='nav-button prev' onClick={prevTestimonial}>
            <img src={left_arrow_icon} alt='Previous' />
          </button>
          <div className='testimonial-indicators'>
            {testimonialsData.map((_, index) => (
              <span 
                key={index} 
                className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              ></span>
            ))}
          </div>
          <button className='nav-button next' onClick={nextTestimonial}>
            <img src={right_arrow_icon} alt='Next' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
