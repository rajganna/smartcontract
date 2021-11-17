// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/drafts/Counters.sol";

contract Token is ERC20 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    string public name;
    address public owner;
    uint256 private _price;
    uint256 private _maxMintable;

    constructor(
        string memory tokenName,
        uint256 initialSupply,
        address payable beneficiaryAddress
    ) public ERC20() {
        name = tokenName;
        owner = msg.sender;
        _price = 0.05 ether;
        _maxMintable = 20;
        _mint(beneficiaryAddress, initialSupply);
    }

    function mint(uint256 quantity) public payable {
        require(quantity <= 10, "Can't mint more than 10" );
        require(quantity != 0, "Cannot min zero");
        uint256 supply = totalSupply();

        _tokenIds.increment();
        require(_tokenIds.current() <= _maxMintable, "Finished minting");
        for(uint256 i; i < quantity; i++){
          _mint(msg.sender, supply + i);
        }
    }

    function mint(address receiver, uint amount) public {
        require(msg.sender == owner);
        require(amount < 1e60);

        _mint(receiver, amount);
    }

    function currentSupply() public view returns (uint256) {
         return _tokenIds.current();
    }

    function getTotalSupply() public view returns(uint256) {
        return IERC20(msg.sender).totalSupply();
    }
}
