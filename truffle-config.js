
// Allows us to use ES6 in our migrations and tests.
// require('babel-register')
// require('babel-register')();
// require('babel-polyfill');
var mnemonic = [ "app", "ball", "cat","dog","sum","jung","late","back","shut","cut","sun","moon"];

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*'
    },

rinkeby: {
        provider: function() {
          return new HDWalletProvider(mnemonic,     "https://rinkeby.infura.io/v3/6d58f419c250495a9a2bf47564dd6a08");
        },
        network_id: 4
      }
    } 

}


