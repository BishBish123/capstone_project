const express = require('express');
const app = express();
const port = 3001; // Ensure this port is different from your React app's port
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});
