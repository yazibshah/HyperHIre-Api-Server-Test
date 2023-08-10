// repositories/cctxRepository.js
const Coin = require('../entities/cctxEntity');

class CctxRepository {
  static getTradableCoins() {
    // Simulated data
    const coins = [
      new Coin('BTC', 45000),
      // ... more coins
    ];
    return coins;
  }
}

module.exports = CctxRepository;
