const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.post('/api/register', (req, res) => {
  console.log('Received:', req.body);
  res.json({ message: 'Registration successful' });
});

app.listen(5000, () => console.log('Backend running on http://localhost:5000'));
