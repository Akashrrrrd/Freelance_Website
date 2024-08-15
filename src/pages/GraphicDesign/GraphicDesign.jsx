import React, { useState } from 'react';
import './GraphicDesign.css';

const GraphicDesign = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const programs = [
    { id: 1, title: 'Logo Design', description: 'Master the art of creating impactful logos.', duration: '3 Months' },
    { id: 2, title: 'Typography', description: 'Learn to create visually appealing text designs.', duration: '2 Months' },
    { id: 3, title: 'Illustration', description: 'Explore the world of digital and hand-drawn illustrations.', duration: '4 Months' },
    { id: 4, title: 'Brand Identity', description: 'Develop complete brand identities for businesses.', duration: '5 Months' },
    { id: 5, title: 'Motion Graphics', description: 'Create animated graphics for videos and web.', duration: '6 Months' },
    { id: 6, title: 'UI/UX Design', description: 'Design user interfaces and experiences for digital products.', duration: '5 Months' },
    { id: 7, title: 'Photo Manipulation', description: 'Master advanced photo editing and manipulation techniques.', duration: '3 Months' },
    { id: 8, title: 'Packaging Design', description: 'Create attractive and functional packaging for products.', duration: '4 Months' },
    { id: 9, title: 'Print Design', description: 'Design for print media, including posters, brochures, and more.', duration: '3 Months' },
    { id: 10, title: '3D Modeling', description: 'Learn to create 3D models for various applications.', duration: '6 Months' },
  ];

  const filteredPrograms = programs
    .filter(program => program.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === 'shortest') return a.duration.localeCompare(b.duration);
      if (sortOption === 'longest') return b.duration.localeCompare(a.duration);
      return 0;
    });

  return (
    <div className='graphic-design'>
      <header className='header'>
        <h1>Graphic Design Programs</h1>
        <p>Explore our graphic design programs and enhance your creativity!</p>
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

export default GraphicDesign;
