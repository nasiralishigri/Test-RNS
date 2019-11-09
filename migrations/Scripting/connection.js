const contract = require('truffle-contract');
const Web3 = require('web3');
const trabic_artifact = require('../build/contracts/Token.json');

const crowdSale_artifact = require('../build/contracts/TokenWhitelisting.json');
const metacoin_artifact = require('../build/contracts/MetaCoin.json');


const web3Provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
var MetaCoin = contract(metacoin_artifact);
var TrabicCoin=contract(trabic_artifact)
var CrowdSale = contract(crowdSale_artifact);


module.exports = {

  start: function(callback) {    //// Get All Accounts /////
    var self = this;

    // Bootstrap the MetaCoin abstraction for Use.
    MetaCoin.setProvider(self.web3.currentProvider);

    // Get the initial account balance so it can be displayed.
    self.web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
         console.log("There was an error fetching your accounts.");
        return;
      }

      if (accs.length == 0) {
        console.log("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }
      self.accounts = accs;
      self.account = self.accounts[2];

     callback(self.accounts);
    });
  },


  tokenName:async function(){ ////   Get Token Name From Token Contract   //////
    let token;
    var self =this;
   await TrabicCoin.setProvider(self.web3.currentProvider)
   
   token=await TrabicCoin.deployed();
   const tokenName=await token.name();
    return tokenName;
},
tokenSymbol:async function(){  ////// Get Token Symbol from Token Contract   ///////////
  let token;
  var self =this;
 await TrabicCoin.setProvider(self.web3.currentProvider)
 
 token = await TrabicCoin.deployed();
 const tokenSymbol=await token.symbol();

return tokenSymbol;
},

tokenDecimal:async function(){  ////// Get Decemal of Token  ///////////
  let token;
  var self =this;
 await TrabicCoin.setProvider(self.web3.currentProvider)
 
 token = await TrabicCoin.deployed();
 const tokenDecimal=await token.decimals();

return tokenDecimal;
},

tokenRate:async function(){  ////// Get Token Price  ///////////
  let token;
  var self =this;
  try{
 await CrowdSale.setProvider(self.web3.currentProvider)

 
 token = await CrowdSale.deployed();
 const tokenRate=await token.rate();
return tokenRate;
  }
  catch(err){
    console.log("Erorr is : "+ err);
  }
},

totalSupply:async function(){  ////// Total Supply is///////////
  let token;
  var self =this;
  try{
 await CrowdSale.setProvider(self.web3.currentProvider)

 
 token = await TrabicCoin.deployed();
 const totalSupply=await token.totalSupply();
return totalSupply;
  }
  catch(err){
    console.log("Erorr is : "+ err);
  }
}

}
