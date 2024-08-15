import React, { useState } from 'react';
import './AIServices.css';

const AIServices = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const services = [
    { id: 1, title: 'Machine Learning Models', description: 'Develop predictive models using ML algorithms.', duration: '3 Weeks' },
    { id: 2, title: 'Natural Language Processing', description: 'Implement NLP for text analysis and understanding.', duration: '4 Weeks' },
    { id: 3, title: 'Computer Vision', description: 'Create computer vision systems for image recognition.', duration: '5 Weeks' },
    { id: 4, title: 'AI Chatbots', description: 'Design intelligent chatbots for customer service.', duration: '2 Weeks' },
    { id: 5, title: 'AI-Based Automation', description: 'Automate processes with AI-driven solutions.', duration: '3 Weeks' },
    { id: 6, title: 'Recommendation Systems', description: 'Build personalized recommendation engines.', duration: '4 Weeks' },
    { id: 7, title: 'Predictive Analytics', description: 'Analyze data to predict future trends.', duration: '3 Weeks' },
    { id: 8, title: 'AI for Healthcare', description: 'AI solutions tailored for the healthcare industry.', duration: '6 Weeks' },
    { id: 9, title: 'Voice Recognition', description: 'Develop systems that understand and respond to voice commands.', duration: '4 Weeks' },
    { id: 10, title: 'Robotic Process Automation', description: 'Implement RPA to automate repetitive tasks.', duration: '3 Weeks' },
  ];

  const filteredServices = services
    .filter(service => service.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === 'shortest') return a.duration.localeCompare(b.duration);
      if (sortOption === 'longest') return b.duration.localeCompare(a.duration);
      return 0;
    });

  return (
    <div className='ai-services'>
      <header className='header'>
        <h1>AI Services</h1>
        <p>Leverage cutting-edge AI solutions to transform your business.</p>
      </header>

      <div className='filters'>
        <input 
          type='text' 
          placeholder='Search services...' 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <select 
          value={sortOption} 
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value=''>Sort by</option>
          <option value='shortest'>Shortest Duration</option>
          <option value='longest'>Longest Duration</option>
        </select>
      </div>

      <div className='service-listings'>
        {filteredServices.length > 0 ? (
          filteredServices.map(service => (
            <div key={service.id} className='service'>
              <h2>{service.title}</h2>
              <p>Description: {service.description}</p>
              <p>Duration: {service.duration}</p>
              <button>Learn More</button>
            </div>
          ))
        ) : (
          <p className='no-results'>No services found.</p>
        )}
      </div>
    </div>
  );
}

export default AIServices;
