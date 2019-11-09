pragma solidity >=0.4.21 <0.6.0;

import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "../node_modules/openzeppelin-solidity/contracts/crowdsale/validation/WhitelistCrowdsale.sol";
import "../node_modules/openzeppelin-solidity/contracts/crowdsale/Crowdsale.sol";


contract TokenWhitelisting is Crowdsale, WhitelistCrowdsale ,Ownable {

mapping(address => bool) airdrops;

uint256[] public _recipient;

//  mapping (address => Instructor) instructors;
//     address[] public instructorAccts;

  
// Constructor of CrowdSale Contract
  constructor(uint256 _rate, address payable  _wallet, IERC20 _token,uint _cap,uint256 openingTime, uint256 closingTime, uint256 _goal)

  Crowdsale(_rate,_wallet,_token) public {

  }

 
 uint256 private constant decimalFactor = 10**uint256(18);
  enum AllocationType { PRESALE, FOUNDER, AIRDROP, ADVISOR, RESERVE, BONUS1, BONUS2, BONUS3 }
  uint256 public constant INITIAL_SUPPLY   = 1000000000 * decimalFactor;
  uint256 public AVAILABLE_TOTAL_SUPPLY    = 1000000000 * decimalFactor;
  uint256 public AVAILABLE_PRESALE_SUPPLY  =  230000000 * decimalFactor; // 100% Released at Token Distribution (TD)

 uint256 public AVAILABLE_AIRDROP_SUPPLY  =   10000000 * decimalFactor; // 100% Released at TD

  uint256 public grandTotalClaimed = 0;


         /**
    * @dev perform a transfer of allocations
    * @param _recipient is a list of recipients
    */
  function airdropTokens() public onlyOwner {
    // require(now >= startTime);
    uint airdropped;
    for(uint256 i = 0; i< _recipient.length; i++)
    {
        if (!airdrops[_recipient[i]]) {
          airdrops[_recipient[i]] = true;
          require(token.transfer(_recipient[i], 50 * decimalFactor));
          airdropped = airdropped.add(250 * decimalFactor);
        }
    }
    AVAILABLE_AIRDROP_SUPPLY = AVAILABLE_AIRDROP_SUPPLY.sub(airdropped);
    AVAILABLE_TOTAL_SUPPLY = AVAILABLE_TOTAL_SUPPLY.sub(airdropped);
    grandTotalClaimed = grandTotalClaimed.add(airdropped);
  }

  function addToAirdrop(address _whitlistedAirdrop) internal view{ // Add user to whitelisted Airdrop
 
 var whitlistedUser = airdrops[_whitlistedAirdrop];
 _recipient.push(whitlistedUser);


 



  }


}