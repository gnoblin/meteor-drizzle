pragma solidity ^0.4.21;
import "zos-lib/contracts/migrations/Migratable.sol";

contract SimpleStorage is Migratable{
  event StorageSet(
    string _message
  );

  uint public storedData;

  function initialize(uint256 _x) isInitializer("SimpleStorage", "0") public {
    storedData = _x;
  }

  function set(uint x) public {
    storedData = x;

    StorageSet("Data stored successfully!");
  }
}
