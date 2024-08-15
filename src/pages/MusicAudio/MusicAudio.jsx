import React, { useState } from 'react';
import './MusicAudio.css';

const MusicAudio = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const tracks = [
    { id: 1, title: 'Chill Vibes', artist: 'DJ Chill', genre: 'Ambient', duration: '3:45' },
    { id: 2, title: 'Upbeat Tempo', artist: 'The Tempo', genre: 'Electronic', duration: '4:20' },
    { id: 3, title: 'Rock Anthem', artist: 'Rock Band', genre: 'Rock', duration: '5:00' },
    { id: 4, title: 'Classical Symphony', artist: 'Orchestra', genre: 'Classical', duration: '6:30' },
    { id: 5, title: 'Jazz Standards', artist: 'Jazz Trio', genre: 'Jazz', duration: '4:10' },
    { id: 6, title: 'Pop Hits', artist: 'Pop Star', genre: 'Pop', duration: '3:55' },
    { id: 7, title: 'Country Classics', artist: 'Country Legends', genre: 'Country', duration: '4:05' },
    { id: 8, title: 'Hip Hop Beats', artist: 'Hip Hop Crew', genre: 'Hip Hop', duration: '3:50' },
    { id: 9, title: 'Reggae Sunshine', artist: 'Reggae Vibes', genre: 'Reggae', duration: '4:25' },
    { id: 10, title: 'Electronic Dreams', artist: 'Dream DJs', genre: 'Electronic', duration: '5:10' }
  ];

  const filteredTracks = tracks
    .filter(track => track.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === 'recent') return b.id - a.id;
      if (sortOption === 'longest') return b.duration.localeCompare(a.duration);
      if (sortOption === 'shortest') return a.duration.localeCompare(b.duration);
      return 0;
    });

  return (
    <div className='music-audio'>
      <header className='header'>
        <h1>Music & Audio</h1>
        <p>Discover and enjoy a variety of music tracks.</p>
      </header>

      <div className='filters'>
        <input 
          type='text' 
          placeholder='Search tracks...' 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <select 
          value={sortOption} 
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value=''>Sort by</option>
          <option value='recent'>Most Recent</option>
          <option value='longest'>Longest Duration</option>
          <option value='shortest'>Shortest Duration</option>
        </select>
      </div>

      <div className='track-listings'>
        {filteredTracks.length > 0 ? (
          filteredTracks.map(track => (
            <div key={track.id} className='track'>
              <h2>{track.title}</h2>
              <p>Artist: {track.artist}</p>
              <p>Genre: {track.genre}</p>
              <p>Duration: {track.duration}</p>
              <button>Play</button>
            </div>
          ))
        ) : (
          <p className='no-results'>No tracks found.</p>
        )}
      </div>
    </div>
  );
}

export default MusicAudio;
