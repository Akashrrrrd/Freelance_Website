import React, { useState } from 'react';
import './WritingTranslation.css';

const WritingTranslation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const services = [
    { id: 1, title: 'Technical Writing', description: 'Crafting precise and clear technical documents.', duration: '3 Weeks' },
    { id: 2, title: 'Creative Writing', description: 'Express your ideas with creative flair.', duration: '4 Weeks' },
    { id: 3, title: 'Blog Writing', description: 'Engage your audience with compelling blog posts.', duration: '2 Weeks' },
    { id: 4, title: 'Copywriting', description: 'Write persuasive copy that sells.', duration: '3 Weeks' },
    { id: 5, title: 'Business Writing', description: 'Professional business communication services.', duration: '3 Weeks' },
    { id: 6, title: 'Proofreading & Editing', description: 'Ensure your content is error-free and polished.', duration: '1 Week' },
    { id: 7, title: 'Translation Services', description: 'Accurate and culturally sensitive translations.', duration: '4 Weeks' },
    { id: 8, title: 'Legal Writing', description: 'Drafting legal documents with precision.', duration: '5 Weeks' },
    { id: 9, title: 'SEO Writing', description: 'Optimize content for better search engine rankings.', duration: '3 Weeks' },
    { id: 10, title: 'Academic Writing', description: 'High-quality academic papers and research.', duration: '5 Weeks' },
  ];

  const filteredServices = services
    .filter(service => service.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === 'shortest') return a.duration.localeCompare(b.duration);
      if (sortOption === 'longest') return b.duration.localeCompare(a.duration);
      return 0;
    });

  return (
    <div className='writing-translation'>
      <header className='header'>
        <h1>Writing & Translation Services</h1>
        <p>Enhance your content with our professional writing and translation services!</p>
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

export default WritingTranslation;
