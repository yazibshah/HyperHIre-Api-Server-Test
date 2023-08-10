// services/ethereumService.js
const EthereumRepository = require('../repositories/ethereumRepository');

class EthereumService {
  static getLatestTransactionsSortedByAmount() {
    const transactions = EthereumRepository.getLatestTransactions();
    transactions.sort((a, b) => b.amount - a.amount);
    return transactions;
  }
}

module.exports = EthereumService;
