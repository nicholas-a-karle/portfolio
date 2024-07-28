import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [serverStatus, setServerStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`API URL: ${process.env.REACT_APP_API_URL}`);
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/contact`, formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear form fields
    } catch (error) {
      setStatus('Failed to send message.');
    }
  };

  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/status`);
        if (response.status === 200) {
          setServerStatus('Server is running');
        } else {
          setServerStatus('Server is not running');
        }
      } catch (error) {
        setServerStatus('Server is not running');
      }
    };
    checkServerStatus();
  }, []);

  return (
    <div className='contactCardContainer'>
      <div className='contactCard'>
        <h2>{serverStatus === 'Server is running' ? 'Contact Me!' : 'Contact Me!'}</h2>
        <p>
          {serverStatus === 'Server is running'
            ? "Just fill in the form below and I'll get back to you!"
            : "nicholasakarle@gmail.com"}
        </p>
        {serverStatus === 'Server is running' && (
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">Send</button>
          </form>
        )}
        {status && <p className={`status-message ${status.includes('success') ? 'success' : 'error'}`}>{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
