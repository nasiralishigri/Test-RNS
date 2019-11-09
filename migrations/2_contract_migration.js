const Token = artifacts.require("Token");

const TokenSale = artifacts.require("TokenWhitelisting");

module.exports = async function(deployer) {
 await deployer.deploy(Token, "Name", "Sym", 8);

 const tokenAdd = await TokenSale.deployed();

deployer.deploy(TokenSale, )

};
