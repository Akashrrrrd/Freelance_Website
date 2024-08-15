import React, { useState } from 'react';
import './RatingPage.css';

const RatingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  const reviews = [
    { id: 1, name: "Aarav Patel", date: "Aug 12, 2024", review: "Excellent work, highly satisfied!", rating: 4.9, skills: "Web Development, React", achievement: "Built a high-traffic e-commerce platform", contact: "aarav.patel@email.com" },
    { id: 2, name: "Diya Sharma", date: "Jul 30, 2024", review: "Very professional and creative.", rating: 4.7, skills: "Graphic Design, Illustration", achievement: "Designed logo for a Fortune 500 company", contact: "diya.sharma@email.com" },
    { id: 3, name: "Vihaan Gupta", date: "Aug 5, 2024", review: "Impressive attention to detail.", rating: 5, skills: "Content Writing, Copywriting", achievement: "Published in leading industry magazine", contact: "vihaan.gupta@email.com" },
    { id: 4, name: "Ananya Singh", date: "Jul 25, 2024", review: "Great communication and results.", rating: 4.5, skills: "App Development, Flutter", achievement: "Developed a top 10 app in Play Store", contact: "ananya.singh@email.com" },
    { id: 5, name: "Advait Kapoor", date: "Aug 1, 2024", review: "Exceeded all expectations.", rating: 4.8, skills: "Digital Marketing, SEO", achievement: "Increased client's organic traffic by 200%", contact: "advait.kapoor@email.com" },
    { id: 6, name: "Ishaan Mehta", date: "Jul 28, 2024", review: "Timely delivery, outstanding quality.", rating: 4.9, skills: "Data Science, Python", achievement: "Developed an AI model with 99% accuracy", contact: "ishaan.mehta@email.com" },
    { id: 7, name: "Zara Reddy", date: "Aug 8, 2024", review: "Innovative solutions, great teamwork.", rating: 4.6, skills: "UX/UI Design, Prototyping", achievement: "Redesigned UX for a major banking app", contact: "zara.reddy@email.com" },
    { id: 8, name: "Arjun Choudhury", date: "Jul 22, 2024", review: "Highly skilled and efficient.", rating: 4.7, skills: "Backend Development, Node.js", achievement: "Optimized server response time by 50%", contact: "arjun.choudhury@email.com" },
    { id: 9, name: "Myra Joshi", date: "Aug 3, 2024", review: "Excellent problem-solving skills.", rating: 4.8, skills: "Machine Learning, TensorFlow", achievement: "Created a predictive model for stock market", contact: "myra.joshi@email.com" },
    { id: 10, name: "Reyansh Kumar", date: "Jul 27, 2024", review: "Creative and reliable professional.", rating: 4.5, skills: "3D Modeling, Animation", achievement: "Worked on CGI for an award-winning film", contact: "reyansh.kumar@email.com" },
    { id: 11, name: "Anika Desai", date: "Aug 10, 2024", review: "Fantastic work ethic and results.", rating: 4.9, skills: "Social Media Marketing, Content Strategy", achievement: "Grew client's social media following by 1M", contact: "anika.desai@email.com" },
    { id: 12, name: "Kabir Malhotra", date: "Jul 31, 2024", review: "Exceptional skills and dedication.", rating: 5, skills: "Cybersecurity, Ethical Hacking", achievement: "Identified and patched critical security flaw", contact: "kabir.malhotra@email.com" }
  ];

  const sortedReviews = [...reviews]
    .filter(review => review.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => sortBy === 'rating' ? b.rating - a.rating : a.name.localeCompare(b.name));

  const [selectedUser, setSelectedUser] = useState(reviews[0]);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="rating-page">
      <div className="content">
        <div className="profile-section">
          <div className="profile-header">
            <img src="freelancer-photo.jpg" alt="Profile" className="profile-photo" />
            <div className="profile-details">
              <h1>{selectedUser.name}</h1>
              <p className="bio">{selectedUser.bio}</p>
              <p className="skills"><strong>Skills:</strong> {selectedUser.skills}</p>
              <p className="achievements"><strong>Achievements:</strong> {selectedUser.achievement}</p>
              <p className="contact-info"><strong>Contact:</strong> {selectedUser.contact}</p>
              <div className="rating-score">
                <span>{selectedUser.rating}</span>
                <svg className="star-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <polygon points="12 2 15 10 24 10 17 14 19 22 12 18 5 22 7 14 0 10 9 10" />
                </svg>
                <span>/5</span>
              </div>
              <p className="review"><strong>Review:</strong> {selectedUser.review}</p>
            </div>
          </div>
        </div>

        <div className="user-list">
          <h2 className="top-rating-heading">Top Rating</h2>
          <div className="search-sort">
            <input 
              type="text" 
              placeholder="Search by name..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              className="search-input"
            />
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)} 
              className="sort-select"
            >
              <option value="rating">Sort by Rating</option>
              <option value="name">Sort by Name</option>
            </select>
          </div>
          <div className="users-grid">
            {sortedReviews.map((review) => (
              <div
                key={review.id}
                className={`user-card ${selectedUser.id === review.id ? 'selected' : ''}`}
                onClick={() => handleUserClick(review)}
              >
                <h2>{review.name}</h2>
                <p>{review.skills}</p>
                <div className="user-rating">
                  {[...Array(Math.floor(review.rating))].map((_, index) => (
                    <svg key={index} className="star-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <polygon points="12 2 15 10 24 10 17 14 19 22 12 18 5 22 7 14 0 10 9 10" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingPage;
