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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/contact`, formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear form fields
    } catch (error) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <div className='contactCardContainer'>
      <div className='contactCard'>
        <h2>Contact Me!</h2>
        <p>Just fill in the form below and I'll get back to you!</p>
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
        {status && <p className={`status-message ${status.includes('success') ? 'success' : 'error'}`}>{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
