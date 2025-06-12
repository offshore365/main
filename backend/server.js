const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 8556; // Hardcoded port as specified

// Middleware
app.use(cors()); // Enable CORS for frontend
app.use(express.json()); // Parse JSON bodies

app.get('/', (req, res) => {
  res.send('Offshore 365 Email API is running 🚀');
});

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // Using Gmail as the email service
  auth: {
    user: 'vedantsonavane799@gmail.com', // Hardcoded email
    pass: 'uyvb tlml uabj qnqb', // Hardcoded App Password
  },
});

// API endpoint to handle newsletter subscription
app.post('/subscribe-newsletter', async (req, res) => {
  const { email } = req.body;

  // Validate email
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Path to the newsletter PDF
  const pdfPath = path.join('NewsletterO365.pdf');

  // Check if PDF file exists
  if (!fs.existsSync(pdfPath)) {
    console.error('Newsletter PDF not found at:', pdfPath);
    return res.status(500).json({ error: 'Newsletter file not found' });
  }

  // HTML email template
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to OffShore 365</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #0d3557;
          margin: 0;
          padding: 0;
          background-color: #f8f9fa;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .header {
          text-align: center;
          background: linear-gradient(135deg, #256bff, #B2E7F1);
          color: white;
          padding: 30px;
          border-radius: 10px 10px 0 0;
          margin: -20px -20px 20px -20px;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: bold;
        }
        .welcome-text {
          font-size: 18px;
          font-weight: bold;
          color: #256bff;
          text-align: center;
          margin-bottom: 20px;
        }
        .content {
          padding: 20px 0;
        }
        .highlight-box {
          background-color: #f0f5ff;
          border-left: 4px solid #256bff;
          padding: 15px;
          margin: 20px 0;
          border-radius: 5px;
        }
        .newsletter-features {
          background-color: #E1F7FE;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
        }
        .newsletter-features h3 {
          color: #256bff;
          margin-top: 0;
        }
        .newsletter-features ul {
          list-style-type: none;
          padding: 0;
        }
        .newsletter-features li {
          padding: 8px 0;
          position: relative;
          padding-left: 25px;
        }
        .newsletter-features li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #256bff;
          font-weight: bold;
        }
        .download-section {
          text-align: center;
          background: linear-gradient(135deg, #256bff, #1e4cd6);
          color: white;
          padding: 25px;
          border-radius: 8px;
          margin: 25px 0;
        }
        .download-section h3 {
          margin-top: 0;
          color: white;
        }
        .social-links {
          text-align: center;
          margin: 30px 0;
        }
        .social-links a {
          display: inline-block;
          margin: 0 10px;
          padding: 10px 15px;
          background-color: #256bff;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          font-size: 14px;
        }
        .footer {
          border-top: 1px solid #e0e0e0;
          padding-top: 20px;
          margin-top: 30px;
          text-align: center;
          color: #666;
          font-size: 14px;
        }
        .contact-info {
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 5px;
          margin: 20px 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Welcome to OffShore 365!</h1>
          <p>Your Global Productivity Partner</p>
        </div>
        
        <div class="content">
          <div class="welcome-text">
            Congratulations and Welcome to the OffShore 365 Family! 🎊
          </div>
          
          <p>Dear Valued Subscriber,</p>
          
          <p>Thank you for subscribing to our newsletter. We're thrilled to have you join our community of forward-thinking professionals in the AEC industry.</p>
          
          <div class="newsletter-features">
            <h3> What's Inside Your Newsletter:</h3>
            <ul>
              <li><strong>Latest Industry Insights</strong> - Stay ahead with cutting-edge trends in Architecture, Engineering, and Construction</li>
              <li><strong>Exclusive Updates</strong> - Be the first to know about our new services and solutions</li>
              <li><strong>Expert Tips & Best Practices</strong> - Enhance your productivity with our professional insights</li>
              <li><strong>Success Stories</strong> - Real case studies from our global clients</li>
              <li><strong>Special Offers</strong> - Exclusive deals on our premium services</li>
            </ul>
          </div>
          
          <div class="download-section">
            <h3>Your Newsletter is Attached!</h3>
            <p>Your complimentary OffShore 365 newsletter is attached to this email as a PDF. Download it now to stay updated with the latest industry insights!</p>
          </div>
          
          <div class="highlight-box">
            <h3>What to Expect Next:</h3>
            <p>• <strong>Monthly Newsletters</strong> packed with valuable content<br>
            • <strong>Priority Access</strong> to our webinars and events<br>
            • <strong>Exclusive Insights</strong> from our industry experts<br>
            • <strong>Early Bird Offers</strong> on our services</p>
          </div>
          
         
          <div class="contact-info">
            <h3> Need Support?</h3>
            <p><strong>Call us:</strong> +1 917 905 1135<br>
            <strong>Visit us:</strong> 1755 Broadway, FRNT 3 #1165, New York, NY 10019, United States</p>
          </div>
          
          <p>Thank you once again for choosing OffShore 365. We look forward to supporting your business growth and helping you achieve new heights of success!</p>
          
          <p><strong>Best regards,</strong><br>
          <strong> OffShore 365 Team</strong><br>
          <em>Your Global Productivity Partner</em></p>
        </div>
        
        <div class="footer">
          <p><strong>P.S.</strong> Don't forget to add our email address to your contacts to ensure you never miss our updates!</p>
          <p>This email was sent because you subscribed to our newsletter. If you no longer wish to receive these emails, you can unsubscribe by replying to this email.</p>
          <p>© ${new Date().getFullYear()} OffShore 365. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  // Plain text version for email clients that don't support HTML
  const textContent = `
    Congratulations and Welcome to the OffShore 365 Family!

    Dear Valued Subscriber,

    Thank you for subscribing to our newsletter. We're thrilled to have you join our community of forward-thinking professionals in the AEC industry.

    What's Inside Your Newsletter:
    - Latest Industry Insights - Stay ahead with cutting-edge trends in Architecture, Engineering, and Construction
    - Exclusive Updates - Be the first to know about our new services and solutions
    - Expert Tips & Best Practices - Enhance your productivity with our professional insights
    - Success Stories - Real case studies from our global clients
    - Special Offers - Exclusive deals on our premium services

    Your Newsletter is Attached!
    Your complimentary OffShore 365 newsletter is attached to this email as a PDF.

    What to Expect Next:
    - Monthly Newsletters packed with valuable content
    - Priority Access to our webinars and events
    - Exclusive Insights from our industry experts
    - Early Bird Offers on our services

    

    Need Support?
    Call us: +1 917 905 1135
    Visit us: 1755 Broadway, FRNT 3 #1165, New York, NY 10019, United States

    Thank you once again for choosing OffShore 365. We look forward to supporting your business growth and helping you achieve new heights of success!

    Best regards,
     OffShore 365 Team
    Your Global Productivity Partner

    © ${new Date().getFullYear()} OffShore 365. All rights reserved.
  `;

  // Email options with PDF attachment
  const mailOptions = {
    from: {
      name: 'OffShore 365',
      address: 'vedantsonavane799@gmail.com'
    },
    to: email,
    subject: 'Welcome to OffShore 365 - Your Newsletter is Here! 🎉',
    text: textContent,
    html: htmlContent,
    attachments: [
      {
        filename: 'NewsletterO365.pdf',
        path: pdfPath,
        contentType: 'application/pdf'
      }
    ]
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    
    console.log(`Newsletter sent successfully to: ${email}`);
    res.status(200).json({ 
      message: 'Newsletter subscription successful! Check your email for the welcome message and newsletter PDF.',
      success: true 
    });
  } catch (error) {
    console.error('Error sending newsletter email:', error);
    res.status(500).json({ 
      error: 'Failed to send newsletter. Please try again later.',
      success: false 
    });
  }
});

// API endpoint to handle chatbot conversation (keeping your existing endpoint)
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
    from: 'Offshore 365 WebPortal',
    to: 'namanmalhotra@offshore365.in',
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

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'OffShore 365 Email API is healthy',
    timestamp: new Date().toISOString()
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 OffShore365 Email API Server running on port ${PORT}`);
  console.log(`📧 Newsletter subscription endpoint: http://localhost:${PORT}/subscribe-newsletter`);
  console.log(`💬 Chatbot email endpoint: http://localhost:${PORT}/send-email`);
});