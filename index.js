// index.js
const express = require('express');
const app = express();
const itemRoutes = require('./routes/itemRoutes');

app.use(express.json()); // Middleware to parse JSON requests

// Use the item routes
app.use('/api', itemRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
