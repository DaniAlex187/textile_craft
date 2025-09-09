import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Store contact messages in memory (in production, use a database)
const contactMessages: any[] = [];

app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields' });
  }

  const contactMessage = {
    id: Date.now(),
    name,
    email,
    phone: phone || '',
    subject,
    message,
    timestamp: new Date().toISOString()
  };

  contactMessages.push(contactMessage);
  
  console.log('New contact message received:');
  console.log(`From: ${name} (${email})`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);
  console.log(`Phone: ${phone || 'Not provided'}`);
  console.log('---');

  res.json({ success: true, message: 'Contact form submitted successfully!' });
});

// Endpoint to view all messages (for admin)
app.get('/api/messages', (req, res) => {
  res.json(contactMessages);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`View contact messages at: http://localhost:${PORT}/api/messages`);
});