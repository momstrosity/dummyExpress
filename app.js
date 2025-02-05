const express = require('express');
const ethPriceRoutes = require('./src/routes/ethPriceRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use('/api', ethPriceRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;