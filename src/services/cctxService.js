// services/cctxService.js
const CctxRepository = require('../repositories/cctxRepository');

class CctxService {
  static getTradableCoinsWithAveragePrice() {
    const coins = CctxRepository.getTradableCoins();
    return coins;
  }
}

module.exports = CctxService;
