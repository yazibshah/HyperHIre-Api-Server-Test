// app.js
const express = require('express');
const ethereumController = require('./src/controllers/ethereumController');
const cctxController = require('./src/controllers/cctxController');

const app = express();

app.use('/ethereum', ethereumController);
app.use('/cctx', cctxController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
