pragma solidity ^0.4.21;
import "zos-lib/contracts/migrations/Migratable.sol";

import "openzeppelin-zos/contracts/token/ERC20/StandardToken.sol";

contract TutorialToken is StandardToken, Migratable {
  string public name = "TutorialToken";
  string public symbol = "TT";
  uint public decimals = 2;
  uint public INITIAL_SUPPLY = 12000;

  function initialize() isInitializer("TutorialToken", "0") public {

    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
