// controllers/cctxController.js
const express = require('express');
const CctxService = require('../services/cctxService');

const router = express.Router();

router.get('/tradable-coins', (req, res) => {
  const coins = CctxService.getTradableCoinsWithAveragePrice();
  res.json(coins);
});

module.exports = router;
