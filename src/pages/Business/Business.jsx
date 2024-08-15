import React, { useState } from 'react';
import './Business.css';

const Business = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState('');

  const businesses = [
    { id: 1, name: 'Tech Innovators', industry: 'Technology', location: 'New York', revenue: '$5M' },
    { id: 2, name: 'Green Ventures', industry: 'Sustainability', location: 'San Francisco', revenue: '$3M' },
    { id: 3, name: 'Health Solutions', industry: 'Healthcare', location: 'Chicago', revenue: '$10M' },
    { id: 4, name: 'EduTech', industry: 'Education', location: 'Boston', revenue: '$2.5M' },
    { id: 5, name: 'Financial Experts', industry: 'Finance', location: 'Miami', revenue: '$8M' },
    { id: 6, name: 'Retail World', industry: 'Retail', location: 'Los Angeles', revenue: '$4M' },
    { id: 7, name: 'Real Estate Hub', industry: 'Real Estate', location: 'Seattle', revenue: '$6M' },
    { id: 8, name: 'Auto Innovations', industry: 'Automotive', location: 'Detroit', revenue: '$7M' },
    { id: 9, name: 'Travel Experts', industry: 'Travel', location: 'Orlando', revenue: '$2M' },
    { id: 10, name: 'Food & Beverage Co.', industry: 'Food & Beverage', location: 'Philadelphia', revenue: '$3.5M' }
  ];

  const filteredBusinesses = businesses
    .filter(business => business.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(business => {
      if (filterOption === 'tech') return business.industry === 'Technology';
      if (filterOption === 'health') return business.industry === 'Healthcare';
      if (filterOption === 'finance') return business.industry === 'Finance';
      return true;
    });

  return (
    <div className='business'>
      <header className='business-header'>
        <h1>Business Directory</h1>
        <p>Explore and discover businesses by industry and location.</p>
      </header>

      <div className='business-filters'>
        <input 
          type='text' 
          placeholder='Search businesses...' 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <select 
          value={filterOption} 
          onChange={(e) => setFilterOption(e.target.value)}
        >
          <option value=''>Filter by Industry</option>
          <option value='tech'>Technology</option>
          <option value='health'>Healthcare</option>
          <option value='finance'>Finance</option>
        </select>
      </div>

      <div className='business-listings'>
        {filteredBusinesses.length > 0 ? (
          filteredBusinesses.map(business => (
            <div key={business.id} className='business-card'>
              <h2>{business.name}</h2>
              <p>Industry: {business.industry}</p>
              <p>Location: {business.location}</p>
              <p>Revenue: {business.revenue}</p>
              <button>View Details</button>
            </div>
          ))
        ) : (
          <p className='no-results'>No businesses found.</p>
        )}
      </div>
    </div>
  );
}

export default Business;
