import React, { useState } from 'react';
import './DigitalMarket.css';

const DigitalMarket = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const programs = [
    { id: 1, title: 'SEO Fundamentals', description: 'Learn the basics of search engine optimization.', duration: '3 Months' },
    { id: 2, title: 'Social Media Marketing', description: 'Master the art of social media marketing.', duration: '4 Months' },
    { id: 3, title: 'Content Marketing', description: 'Create compelling content that drives engagement.', duration: '2 Months' },
    { id: 4, title: 'Email Marketing', description: 'Build effective email campaigns to convert leads.', duration: '2 Months' },
    { id: 5, title: 'PPC Advertising', description: 'Learn pay-per-click advertising techniques.', duration: '3 Months' },
    { id: 6, title: 'Web Analytics', description: 'Understand and analyze web traffic data.', duration: '4 Months' },
    { id: 7, title: 'Affiliate Marketing', description: 'Create and manage successful affiliate programs.', duration: '3 Months' },
    { id: 8, title: 'Conversion Rate Optimization', description: 'Optimize websites for better conversion rates.', duration: '4 Months' },
    { id: 9, title: 'Influencer Marketing', description: 'Leverage influencers to promote products.', duration: '3 Months' },
    { id: 10, title: 'Digital Strategy', description: 'Develop comprehensive digital marketing strategies.', duration: '5 Months' },
  ];

  const filteredPrograms = programs
    .filter(program => program.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === 'shortest') return a.duration.localeCompare(b.duration);
      if (sortOption === 'longest') return b.duration.localeCompare(a.duration);
      return 0;
    });

  return (
    <div className='digital-marketing'>
      <header className='header'>
        <h1>Digital Marketing Programs</h1>
        <p>Boost your skills with our top-notch digital marketing programs!</p>
      </header>

      <div className='filters'>
        <input 
          type='text' 
          placeholder='Search programs...' 
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

      <div className='program-listings'>
        {filteredPrograms.length > 0 ? (
          filteredPrograms.map(program => (
            <div key={program.id} className='program'>
              <h2>{program.title}</h2>
              <p>Description: {program.description}</p>
              <p>Duration: {program.duration}</p>
              <button>Learn More</button>
            </div>
          ))
        ) : (
          <p className='no-results'>No programs found.</p>
        )}
      </div>
    </div>
  );
}

export default DigitalMarket;
