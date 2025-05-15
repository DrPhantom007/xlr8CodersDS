const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/apply', (req, res) => {
  const { name, amount } = req.body;
  console.log(`Loan request: ₹${amount} by ${name}`);
  res.json({ message: 'Loan application received' });
});

app.listen(3000, () => {
  console.log('Backend running on http://localhost:3000');
});
