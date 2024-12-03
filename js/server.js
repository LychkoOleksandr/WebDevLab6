const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let toasts = [];

app.post('/toasts', (req, res) => {
  toasts = req.body;
  res.sendStatus(200);
});

app.get('/toasts', (req, res) => {
  res.json(toasts);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
