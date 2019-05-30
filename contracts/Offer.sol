pragma solidity 0.4.20;
contract Offer {
   address public owner;
   uint256 numberOfLikes;
   address public offerReserver;

   function Offer() public {
      owner = msg.sender;
      numberOfLikes = 0;
   }
   function kill() public {
      if(msg.sender == owner) selfdestruct(owner);
   }

   function reserveOffer() public payable{
           offerReserver = msg.sender;
   }

   function checkReserverSet() public constant returns(bool){
       if (offerReserver > 0x0){
           return true;
       }
       return false;
   }

}