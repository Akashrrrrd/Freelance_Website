import React, { useState } from 'react';
import './ProgramTech.css';

const ProgramTech = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const programs = [
    { id: 1, title: 'Artificial Intelligence', description: 'Learn AI concepts, machine learning, and deep learning.', duration: '6 Months' },
    { id: 2, title: 'Web Development', description: 'Master HTML, CSS, JavaScript, and modern frameworks like React.', duration: '4 Months' },
    { id: 3, title: 'Data Science', description: 'Dive into data analysis, visualization, and machine learning.', duration: '5 Months' },
    { id: 4, title: 'Mobile App Development', description: 'Create mobile apps for Android and iOS using modern tools.', duration: '6 Months' },
    { id: 5, title: 'Cybersecurity', description: 'Learn how to protect systems, networks, and programs from attacks.', duration: '5 Months' },
    { id: 6, title: 'Cloud Computing', description: 'Understand cloud services, deployment, and management.', duration: '4 Months' },
    { id: 7, title: 'Blockchain Technology', description: 'Learn the fundamentals of blockchain and cryptocurrency.', duration: '3 Months' },
    { id: 8, title: 'Game Development', description: 'Build games using popular engines like Unity and Unreal.', duration: '7 Months' },
    { id: 9, title: 'DevOps Engineering', description: 'Master CI/CD pipelines, automation, and containerization.', duration: '4 Months' },
    { id: 10, title: 'Internet of Things (IoT)', description: 'Learn to connect devices and create IoT solutions.', duration: '6 Months' },
  ];

  const filteredPrograms = programs
    .filter(program => program.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === 'shortest') return a.duration.localeCompare(b.duration);
      if (sortOption === 'longest') return b.duration.localeCompare(a.duration);
      return 0;
    });

  return (
    <div className='program-tech'>
      <header className='header'>
        <h1>Technology Programs</h1>
        <p>Explore our tech programs and choose the best one for you!</p>
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

export default ProgramTech;
