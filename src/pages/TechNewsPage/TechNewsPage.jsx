import React from 'react';
import { FaRocket, FaRegClock } from 'react-icons/fa';
import './TechNewsPage.css';

const TechNewsPage = () => {
  const news = [
    {
      title: 'AI Advances in 2024: What to Expect',
      description: 'Explore the latest breakthroughs in artificial intelligence and what they mean for the future.',
      url: 'https://example.com/news/ai-advances-2024',
      urlToImage: 'https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?ga=GA1.1.459390110.1704085853&semt=ais_hybrid',
      publishedAt: '2024-08-15T10:00:00Z',
    },
    {
      title: 'The Rise of Quantum Computing: How Close Are We?',
      description: 'A deep dive into the progress of quantum computing and its potential impacts.',
      url: 'https://example.com/news/quantum-computing-rise',
      urlToImage: 'https://img.freepik.com/premium-photo/artificial-intelligence-quantum-computer-technology-concept_327072-12955.jpg?ga=GA1.1.459390110.1704085853&semt=ais_hybrid',
      publishedAt: '2024-08-14T09:00:00Z',
    },
    {
      title: '5G vs. 6G: What You Need to Know',
      description: 'An overview of the key differences between 5G and the upcoming 6G technology.',
      url: 'https://example.com/news/5g-vs-6g',
      urlToImage: 'https://img.freepik.com/premium-photo/smart-city-communication-network-concept_146508-991.jpg?ga=GA1.1.459390110.1704085853&semt=ais_hybrid',
      publishedAt: '2024-08-13T08:00:00Z',
    },
    {
      title: 'Blockchain Technology: The Next Big Thing?',
      description: 'Examining how blockchain technology is evolving and its potential applications beyond cryptocurrencies.',
      url: 'https://example.com/news/blockchain-technology',
      urlToImage: 'https://img.freepik.com/free-photo/beautiful-cryptocurrency-hologram-design_23-2149250209.jpg?ga=GA1.1.459390110.1704085853&semt=ais_hybrid',
      publishedAt: '2024-08-12T07:00:00Z',
    },
    {
      title: 'The Future of Augmented Reality in Everyday Life',
      description: 'How augmented reality is set to change various aspects of our daily lives, from shopping to education.',
      url: 'https://example.com/news/ar-future',
      urlToImage: 'https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?ga=GA1.1.459390110.1704085853&semt=ais_hybrid',
      publishedAt: '2024-08-11T06:00:00Z',
    },
    {
      title: 'Edge Computing: Transforming Data Processing',
      description: 'An insight into how edge computing is changing data processing by bringing computation closer to data sources.',
      url: 'https://example.com/news/edge-computing',
      urlToImage: 'https://img.freepik.com/premium-photo/computer-screen-with-clock-it_662214-422227.jpg?ga=GA1.1.459390110.1704085853&semt=ais_hybrid',
      publishedAt: '2024-08-10T05:00:00Z',
    },
    {
      title: 'Cybersecurity Trends for 2024',
      description: 'What to expect in the world of cybersecurity as new threats and defenses emerge.',
      url: 'https://example.com/news/cybersecurity-trends-2024',
      urlToImage: 'https://img.freepik.com/premium-photo/hand-reaching-towards-digital-interface-with-security-icons-glowing-circuits-blue-background_163305-333872.jpg?ga=GA1.1.459390110.1704085853&semt=ais_hybrid',
      publishedAt: '2024-08-09T04:00:00Z',
    },
    {
      title: 'The Impact of 3D Printing on Modern Manufacturing',
      description: 'How 3D printing is revolutionizing manufacturing processes and product design.',
      url: 'https://example.com/news/3d-printing-manufacturing',
      urlToImage: 'https://img.freepik.com/premium-photo/robot-factory-3d-concept-automated-robot-arm-assembly-linegenerative-ai_391052-10915.jpg?ga=GA1.1.459390110.1704085853&semt=ais_hybrid',
      publishedAt: '2024-08-08T03:00:00Z',
    },
  ];

  const trendingTech = [
    {
      name: 'Artificial Intelligence',
      description: 'AI is revolutionizing industries with advancements in machine learning and neural networks.',
      link: 'https://example.com/tech/ai',
    },
    {
      name: 'Quantum Computing',
      description: 'Quantum computers promise exponential increases in computing power, opening new possibilities.',
      link: 'https://example.com/tech/quantum-computing',
    },
    {
      name: '5G Technology',
      description: '5G is transforming connectivity with faster speeds and lower latency.',
      link: 'https://example.com/tech/5g',
    },
    {
      name: 'Blockchain',
      description: 'Blockchain technology is reshaping how data is managed with secure, decentralized ledgers.',
      link: 'https://example.com/tech/blockchain',
    },
    {
      name: 'Augmented Reality',
      description: 'AR enhances user experiences by overlaying digital information on the real world.',
      link: 'https://example.com/tech/ar',
    },
    {
      name: 'Edge Computing',
      description: 'Edge computing brings computation closer to data sources, reducing latency and improving performance.',
      link: 'https://example.com/tech/edge-computing',
    },
    {
      name: 'Internet of Things (IoT)',
      description: 'IoT connects everyday devices to the internet, enabling smart interactions and automation.',
      link: 'https://example.com/tech/iot',
    },
    {
      name: 'Cybersecurity',
      description: 'Cybersecurity focuses on protecting systems, networks, and data from digital attacks and breaches.',
      link: 'https://example.com/tech/cybersecurity',
    },
  ];

  return (
    <div className="tech-news-page">
      <header className="tech-news-header">
        <h1>Tech News & Trends</h1>
        <p>Your daily dose of technology updates and trends</p>
      </header>
      
      <section className="news-section">
        <h2>Trending News</h2>
        <div className="news-list">
          {news.map((article, index) => (
            <div key={index} className="news-card">
              <div className="news-image" style={{ backgroundImage: `url(${article.urlToImage})` }}></div>
              <div className="news-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                <div className="news-meta">
                  <FaRegClock /> {new Date(article.publishedAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="trending-tech-section">
        <h2>Trending Technologies</h2>
        <div className="tech-list">
          {trendingTech.map((tech, index) => (
            <div key={index} className="tech-card">
              <FaRocket className="tech-icon" />
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
              <a href={tech.link} target="_blank" rel="noopener noreferrer">Learn more</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechNewsPage;
