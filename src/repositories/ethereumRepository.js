// repositories/ethereumRepository.js
const EthereumTransaction = require('../entities/ethereumEntity');

class EthereumRepository {
  static getLatestTransactions() {
    // Simulated data
    const transactions = [
      new EthereumTransaction('hash1', 'sender1', 'receiver1', 1.5, 1000),
      // ... more transactions
    ];
    return transactions;
  }
}

module.exports = EthereumRepository;
