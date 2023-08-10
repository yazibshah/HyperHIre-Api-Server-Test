// entities/ethereumEntity.js
class EthereumTransaction {
    constructor(transactionHash, senderAddress, receiverAddress, amount, blockNumber) {
      this.transactionHash = transactionHash;
      this.senderAddress = senderAddress;
      this.receiverAddress = receiverAddress;
      this.amount = amount;
      this.blockNumber = blockNumber;
    }
  }
  
  module.exports = EthereumTransaction;
  