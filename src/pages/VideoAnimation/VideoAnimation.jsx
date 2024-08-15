import React, { useState } from 'react';
import './VideoAnimation.css';

const VideoAnimation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const services = [
    { id: 1, title: '2D Animation', description: 'Create engaging 2D animations for any purpose.', duration: '3 Weeks' },
    { id: 2, title: '3D Animation', description: 'High-quality 3D animation services.', duration: '4 Weeks' },
    { id: 3, title: 'Explainer Videos', description: 'Explain your concepts with animated videos.', duration: '2 Weeks' },
    { id: 4, title: 'Video Editing', description: 'Professional editing services for your videos.', duration: '1 Week' },
    { id: 5, title: 'Motion Graphics', description: 'Dynamic motion graphics to enhance your content.', duration: '3 Weeks' },
    { id: 6, title: 'Whiteboard Animation', description: 'Illustrative whiteboard animations.', duration: '2 Weeks' },
    { id: 7, title: 'Logo Animation', description: 'Animate your brand’s logo with style.', duration: '2 Weeks' },
    { id: 8, title: 'Promotional Videos', description: 'Promote your products with engaging videos.', duration: '3 Weeks' },
    { id: 9, title: 'Product Demos', description: 'Showcase your product with a demo video.', duration: '2 Weeks' },
    { id: 10, title: 'Live Action Videos', description: 'Professional live-action video production.', duration: '4 Weeks' },
  ];

  const filteredServices = services
    .filter(service => service.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === 'shortest') return a.duration.localeCompare(b.duration);
      if (sortOption === 'longest') return b.duration.localeCompare(a.duration);
      return 0;
    });

  return (
    <div className='video-animation'>
      <header className='header'>
        <h1>Video & Animation Services</h1>
        <p>Bring your ideas to life with our video and animation expertise!</p>
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

export default VideoAnimation;
