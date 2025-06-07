const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 8556; // Hardcoded port as specified

// Middleware
app.use(cors()); // Enable CORS for frontend
app.use(express.json()); // Parse JSON bodies

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // Using Gmail as the email service
  auth: {
    user: 'vedantsonavane799@gmail.com', // Hardcoded email
    pass: 'uyvb tlml uabj qnqb', // Hardcoded App Password
  },
});

// API endpoint to handle chatbot conversation
app.post('/send-email', async (req, res) => {
  const { messages, userData } = req.body;

  // Validate required fields
  if (!messages || !userData) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Format conversation transcript
  const conversationTranscript = messages
    .map(msg => {
      const sender = msg.type === 'user' ? userData.name || 'User' : 'Offshore 365 Bot';
      const timestamp = new Date(msg.timestamp).toLocaleString();
      return `[${timestamp}] ${sender}: ${msg.text}`;
    })
    .join('\n');

  // Email content
  const mailOptions = {
    from: 'vedantsonavane799@gmail.com',
    to: 'vedantsonavane799@gmail.com',
    subject: `New Chatbot Conversation from ${userData.name || 'User'}`,
    text: `
      New conversation from Offshore 365 Chatbot

      User Details:
      Name: ${userData.name || 'N/A'}
      Email: ${userData.email || 'N/A'}
      Service: ${userData.service || 'N/A'}
      Usage: ${userData.usage || 'N/A'}

      Conversation Transcript:
      ${conversationTranscript}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// API endpoint to handle meeting scheduling
app.post('/api/schedule-meeting', async (req, res) => {
  const {
    service,
    date,
    time,
    name,
    email,
    phone,
    companyName,
    companyLocation,
    employees,
    message,
  } = req.body;

  // Validate required fields
  if (!service || !date || !time || !name || !email || !companyName) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Format date
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  // Email content
  const mailOptions = {
    from: 'vedantsonavane799@gmail.com',
    to: 'offshore365.in@gmail.com',
    subject: `New Meeting Scheduled: ${service} with ${name}`,
    html: `
      <h2>New Meeting Request</h2>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Date:</strong> ${formattedDate}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Company Name:</strong> ${companyName}</p>
      <p><strong>Company Location:</strong> ${companyLocation || 'N/A'}</p>
      <p><strong>Number of Employees:</strong> ${employees || 'N/A'}</p>
      <p><strong>Message:</strong> ${message || 'N/A'}</p>
      <p><strong>Agenda:</strong></p>
      <ul>
        <li>Understanding Your AEC Staffing Needs</li>
        <li>Exploring Offshore 365's Talent Pool</li>
        <li>Reviewing Flexible Engagement Models</li>
      </ul>
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Meeting scheduled successfully! Email sent.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// API endpoint to handle contact form submission
app.post('/api/contact', async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    teamSize,
    services,
    message,
  } = req.body;

  // Validate required fields
  if (!firstName || !lastName || !email || !teamSize || !services || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Email content
  const mailOptions = {
    from: 'vedantsonavane799@gmail.com',
    to: 'offshore365.in@gmail.com',
    subject: `New Contact Request from ${firstName} ${lastName}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Team Size:</strong> ${teamSize}</p>
      <p><strong>Services:</strong> ${services}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Contact form submitted successfully! Email sent.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});