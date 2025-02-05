const express = require('express');
const app = express();
const ethPriceRoutes = require('./src/routes/ethPriceRoutes');

app.use('/api', ethPriceRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;