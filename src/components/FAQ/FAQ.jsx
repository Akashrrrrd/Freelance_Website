// FAQ.jsx
import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Oryve?',
      answer: 'Oryve is a freelance platform that connects skilled professionals with businesses and individuals seeking their services.'
    },
    {
      question: 'How do I sign up for Oryve?',
      answer: 'To sign up, visit our homepage and click on the "Join Now" button. You can register as a freelancer or a client, and follow the prompts to complete your profile.'
    },
    {
      question: 'Is Oryve free to use?',
      answer: 'Oryve is free to join and browse. We charge a small commission on completed projects. Freelancers can also opt for premium features for a monthly fee.'
    },
    {
      question: 'How does Oryve ensure the quality of freelancers?',
      answer: 'Oryve uses a rigorous vetting process, skill assessments, and a review system to maintain high-quality talent on our platform.'
    },
    {
      question: 'How does payment work on Oryve?',
      answer: 'Oryve uses a secure escrow system. Clients deposit funds when hiring, and payment is released to the freelancer upon satisfactory project completion.'
    },
    {
      question: 'What types of services can I find on Oryve?',
      answer: 'Oryve offers a wide range of services including web development, graphic design, writing, marketing, virtual assistance, and more.'
    },
    {
      question: 'How does Oryve handle disputes between clients and freelancers?',
      answer: 'Oryve has a dedicated dispute resolution team that mediates any issues between clients and freelancers to ensure fair outcomes.'
    },
    {
      question: 'Can I hire freelancers for long-term projects on Oryve?',
      answer: 'Yes, Oryve supports both short-term and long-term project arrangements, including hourly and fixed-price contracts.'
    },
    {
      question: 'How does Oryve protect my personal and payment information?',
      answer: 'Oryve uses industry-standard encryption and security measures to protect all user data and financial transactions.'
    },
    {
      question: 'Can I use Oryve internationally?',
      answer: 'Yes, Oryve is a global platform supporting multiple currencies and connecting freelancers and clients from around the world.'
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span className="faq-icon">
                {expandedIndex === index ? '-' : '+'}
              </span>
              {faq.question}
            </div>
            <div className={`faq-answer ${expandedIndex === index ? 'expanded' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
