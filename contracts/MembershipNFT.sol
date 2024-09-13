// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MembershipNFT is ERC721, Ownable {
    uint public tokenIdCounter = 1;

    enum MembershipType { None, Basic, Intermediate, Advanced }
    
    struct MembershipData {
        MembershipType membershipType;
        uint256 startDate;
        uint256 expirationDate;
    }

    mapping(uint256 => MembershipData) public membershipDataByTokenId;
    mapping(address => uint256) public membershipTokenIdByAddress;

    uint256 public constant BASIC_PRICE = 0.00333 ether;
    uint256 public constant INTERMEDIATE_PRICE = 0.0333 ether;
    uint256 public constant ADVANCED_PRICE = 0.0667 ether;

    event MembershipMinted(address indexed recipient, uint256 membershipType, uint256 tokenId);
    event MembershipRenewed(address indexed owner, uint256 membershipType, uint256 tokenId);

    constructor() ERC721("MembershipNFT", "MNFT") Ownable(msg.sender) {
        // No se requiere más configuración en el constructor
    }

    function mintMembership(uint256 membershipType) external payable {
        require(membershipType >= 1 && membershipType <= 3, "Tipo de membresia invalido");

        if (membershipType == uint256(MembershipType.Basic)) {
            require(msg.value == BASIC_PRICE, "Pago incorrecto para la membresia basica");
        } else if (membershipType == uint256(MembershipType.Intermediate)) {
            require(msg.value == INTERMEDIATE_PRICE, "Pago incorrecto para la membresia intermedia");
        } else if (membershipType == uint256(MembershipType.Advanced)) {
            require(msg.value == ADVANCED_PRICE, "Pago incorrecto para la membresia avanzada");
        }

        uint256 newTokenId = tokenIdCounter;
        _safeMint(msg.sender, newTokenId);

        membershipDataByTokenId[newTokenId] = MembershipData(
            MembershipType(membershipType),
            block.timestamp,
            block.timestamp + 30 days
        );

        membershipTokenIdByAddress[msg.sender] = newTokenId;

        tokenIdCounter++;

        emit MembershipMinted(msg.sender, membershipType, newTokenId);
    }

    function renewMembership(uint256 membershipType) external payable {
        uint256 tokenId = membershipTokenIdByAddress[msg.sender];
        require(tokenId != 0, "No tienes una membresia activa");
        MembershipData storage membership = membershipDataByTokenId[tokenId];

        if (membershipType == uint256(MembershipType.Basic)) {
            require(msg.value == BASIC_PRICE, "Pago incorrecto para la membresia basica");
        } else if (membershipType == uint256(MembershipType.Intermediate)) {
            require(msg.value == INTERMEDIATE_PRICE, "Pago incorrecto para la membresia intermedia");
        } else if (membershipType == uint256(MembershipType.Advanced)) {
            require(msg.value == ADVANCED_PRICE, "Pago incorrecto para la membresia avanzada");
        }

        membership.expirationDate += 30 days;

        emit MembershipRenewed(msg.sender, membershipType, tokenId);
    }

    function isMembershipActive(address owner) external view returns (bool) {
        uint256 tokenId = membershipTokenIdByAddress[owner];
        return tokenId != 0 && membershipDataByTokenId[tokenId].expirationDate > block.timestamp;
    }

    function getMembershipType(address owner) external view returns (uint256) {
        uint256 tokenId = membershipTokenIdByAddress[owner];
        require(tokenId != 0, "El usuario no tiene membresia");
        return uint256(membershipDataByTokenId[tokenId].membershipType);
    }

    function getMembershipStartDate(address owner) external view returns (uint256) {
        uint256 tokenId = membershipTokenIdByAddress[owner];
        require(tokenId != 0, "El usuario no tiene membresia");
        return membershipDataByTokenId[tokenId].startDate;
    }
}
