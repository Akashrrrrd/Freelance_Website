import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './AI.css';

const AI = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const chatboxRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    inputRef.current.focus();
    if (messages.length === 0) {
      setMessages([
        { text: "Welcome to Oryve's AI! How can I assist you today?", sender: 'ai' }
      ]);
    }
  }, []);

  const handleSendMessage = async () => {
    if (inputValue.trim()) {
      const newMessages = [...messages, { text: inputValue, sender: 'user' }];
      setMessages(newMessages);
      setInputValue('');

      try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
          model: 'gpt-4',
          messages: [{ role: 'user', content: inputValue }],
        }, {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        });

        const aiResponse = response.data.choices[0].message.content;
        setMessages([...newMessages, { text: aiResponse, sender: 'ai' }]);
      } catch (error) {
        console.error('Error sending message to AI:', error);
        setMessages([...newMessages, { text: 'Sorry, there was an error. Please try again later.', sender: 'ai' }]);
      }
    }
  };

  return (
    <div className="ai-container">
      <div className="ai-header">
        <h1>Oryve's AI</h1>
        <p className="ai-intro">Your intelligent assistant for all your needs.</p>
      </div>
      <div className="ai-chatbox" ref={chatboxRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}-message`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="ai-input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
          ref={inputRef}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <button
          onClick={handleSendMessage}
          disabled={!inputValue.trim()}
          className={`send-button ${inputValue.trim() ? 'active' : ''}`}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AI;
