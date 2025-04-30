// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Migrations {
  address public owner = msg.sender;
  uint public last_completed_migration;

  modifier restricted() {
    require(msg.sender == owner, "Restricted to owner");
    _;
  }

  function setCompleted(uint completed) external restricted {
    last_completed_migration = completed;
  }
}