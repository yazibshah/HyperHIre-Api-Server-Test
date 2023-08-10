// controllers/ethereumController.js
const express = require('express');
const EthereumService = require('../services/ethereumService');

const router = express.Router();

router.get('/latest-transactions', (req, res) => {
  const transactions = EthereumService.getLatestTransactionsSortedByAmount();
  res.json(transactions);
});

module.exports = router;
