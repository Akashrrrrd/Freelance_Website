// src/components/LearningHub/LearningHub.jsx
import React from 'react';
import './LearningHub.css';

const courses = [
    { id: 1, title: 'Introduction to Web Development', videoUrl: 'https://www.youtube.com/watch?v=example1', description: 'Learn the basics of web development including HTML, CSS, and JavaScript.', rating: 4.5 },
    { id: 2, title: 'Advanced JavaScript', videoUrl: 'https://www.youtube.com/watch?v=example2', description: 'Dive deeper into JavaScript concepts such as closures, promises, and async/await.', rating: 4.0 },
    { id: 3, title: 'React.js Fundamentals', videoUrl: 'https://www.youtube.com/watch?v=example3', description: 'Understand the core concepts of React.js including components, hooks, and state management.', rating: 4.7 },
    { id: 4, title: 'Full Stack MERN Development', videoUrl: 'https://www.youtube.com/watch?v=example4', description: 'Build modern web applications using MongoDB, Express.js, React.js, and Node.js.', rating: 4.8 },
    { id: 5, title: 'Python for Data Science', videoUrl: 'https://www.youtube.com/watch?v=example5', description: 'Learn how to use Python for data analysis, visualization, and machine learning.', rating: 4.6 },
    { id: 6, title: 'Mobile App Development with Flutter', videoUrl: 'https://www.youtube.com/watch?v=example6', description: 'Create cross-platform mobile apps using Flutter and Dart.', rating: 4.3 },
    { id: 7, title: 'DevOps and CI/CD', videoUrl: 'https://www.youtube.com/watch?v=example7', description: 'Understand DevOps practices and implement continuous integration and deployment.', rating: 4.2 },
    { id: 8, title: 'Blockchain and Cryptocurrency', videoUrl: 'https://www.youtube.com/watch?v=example8', description: 'Explore the fundamentals of blockchain technology and cryptocurrency.', rating: 4.4 },
    { id: 9, title: 'Artificial Intelligence and Machine Learning', videoUrl: 'https://www.youtube.com/watch?v=example9', description: 'Dive into AI and ML concepts, algorithms, and practical applications.', rating: 4.9 },
    { id: 10, title: 'Cloud Computing with AWS', videoUrl: 'https://www.youtube.com/watch?v=example10', description: 'Learn to deploy and manage applications on Amazon Web Services.', rating: 4.1 },
    { id: 11, title: 'Cybersecurity Fundamentals', videoUrl: 'https://www.youtube.com/watch?v=example11', description: 'Understand key concepts in cybersecurity and learn to protect against common threats.', rating: 4.5 },
    { id: 12, title: 'UX/UI Design Principles', videoUrl: 'https://www.youtube.com/watch?v=example12', description: 'Learn the fundamentals of user experience and interface design.', rating: 4.6 },
    { id: 13, title: 'Game Development with Unity', videoUrl: 'https://www.youtube.com/watch?v=example13', description: 'Create 2D and 3D games using the Unity game engine and C#.', rating: 4.3 },
    { id: 14, title: 'Data Structures and Algorithms', videoUrl: 'https://www.youtube.com/watch?v=example14', description: 'Master essential computer science concepts for coding interviews and software engineering.', rating: 4.7 },
    { id: 15, title: 'Internet of Things (IoT) Fundamentals', videoUrl: 'https://www.youtube.com/watch?v=example15', description: 'Explore IoT technologies, protocols, and build smart connected devices.', rating: 4.4 },
    { id: 16, title: 'Natural Language Processing', videoUrl: 'https://www.youtube.com/watch?v=example16', description: 'Learn techniques for processing and analyzing human language with AI.', rating: 4.6 },
    { id: 17, title: 'Quantum Computing Basics', videoUrl: 'https://www.youtube.com/watch?v=example17', description: 'Understand the principles of quantum computing and its potential applications.', rating: 4.2 },
    { id: 18, title: 'Augmented and Virtual Reality Development', videoUrl: 'https://www.youtube.com/watch?v=example18', description: 'Create immersive AR and VR experiences using popular frameworks and tools.', rating: 4.8 }
];


const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return (
        <div className="rating">
            {[...Array(fullStars)].map((_, index) => (
                <span key={`full-${index}`} className="star">&#9733;</span>
            ))}
            {halfStar && <span className="star half">&#9733;</span>}
            {[...Array(5 - Math.ceil(rating))].map((_, index) => (
                <span key={`empty-${index}`} className="star empty">&#9734;</span>
            ))}
        </div>
    );
};

const LearningHub = () => {
    return (
        <div className="learning-hub">
            <header className="learning-hub-header">
                <h1>Oryve Learning Hub</h1>
                <p>Explore our curated list of courses and watch the introductory videos to get started for free!</p>
            </header>
            <div className="course-list">
                {courses.map(course => (
                    <div key={course.id} className="course-card">
                        <div className="course-card-header">
                            <h2 className="course-title">{course.title}</h2>
                            <div className="course-ribbon">New</div>
                        </div>
                        <p className="course-description">{course.description}</p>
                        <div className="course-rating">
                            {renderRating(course.rating)}
                        </div>
                        <a href={course.videoUrl} className="course-link" target="_blank" rel="noopener noreferrer">
                            Watch Video
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LearningHub;
