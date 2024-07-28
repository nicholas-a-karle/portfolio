const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // To load environment variables from .env file

const app = express();
const port = process.env.SERVER_PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Setup nodemailer transport with Zoho SMTP settings
const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.HOST_POST, // Use 465 for SSL or 587 for TLS
  secure: (process.env.HOST_POST == 465), // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Set up email data
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // The recipient email
    subject: `Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send message.' });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Message sent successfully!' });
  });
});

app.get('/api/status', (req, res) => {
  res.status(200).json({ status: 'Server is running' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
