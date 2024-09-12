// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
//import "@openzeppelin/contracts/utils/Counters.sol";

contract MembershipNFT is ERC721, Ownable {
    //using Counters for Counters.Counter;
    //Counters.Counter private tokenIdCounter;

    // TINE QUE INICIALIZARSE EN UNO PARA QUE EL PRIMER NFT MINTEADO NO TENGA ID CERO. ///
    uint public tokenIdCounter = 1;

    // Definir los tipos de membresías
    enum MembershipType { None, Basic, Intermediate, Advanced }
    mapping(uint256 => MembershipType) public membershipTypeByTokenId;
    mapping(address => uint256) public membershipExpiration;

    // Precios de las membresías
    uint256 public constant BASIC_PRICE = 0.01 ether;
    uint256 public constant INTERMEDIATE_PRICE = 0.05 ether;
    uint256 public constant ADVANCED_PRICE = 0.1 ether;

    event MembershipMinted(address indexed recipient, uint256 membershipType);
    event MembershipRenewed(address indexed owner, uint256 membershipType);

    constructor() ERC721("MembershipNFT", "MNFT") Ownable(msg.sender)
    {}

    // Función para mintear (crear) el NFT de membresía
    function mintMembership(address recipient, uint256 membershipType) external payable {
        require((membershipType >= 1) && (membershipType <= 3), "Tipo de membresia invalido");

        if (membershipType == uint256(MembershipType.Basic)) {
            require(msg.value == BASIC_PRICE, "Pago incorrecto para la membresia basica");
        } else if (membershipType == uint256(MembershipType.Intermediate)) {
            require(msg.value == INTERMEDIATE_PRICE, "Pago incorrecto para la membresia intermedia");
        } else if (membershipType == uint256(MembershipType.Advanced)) {
            require(msg.value == ADVANCED_PRICE, "Pago incorrecto para la membresia avanzada");
        }

        uint256 newTokenId = tokenIdCounter;
        _safeMint(recipient, newTokenId);
        membershipTypeByTokenId[newTokenId] = MembershipType(membershipType);
        membershipExpiration[recipient] = block.timestamp + 30 days; // Membresía válida por 30 días
        tokenIdCounter++;

        emit MembershipMinted(recipient, membershipType);
    }

    // Función para renovar la membresía
    function renewMembership(address owner, uint256 membershipType) external payable {
        require(membershipExpiration[owner] > 0, "No tienes una membresia activa");
        if (membershipType == uint256(MembershipType.Basic)) {
            require(msg.value == BASIC_PRICE, "Pago incorrecto para la membresia basica");
        } else if (membershipType == uint256(MembershipType.Intermediate)) {
            require(msg.value == INTERMEDIATE_PRICE, "Pago incorrecto para la membresia intermedia");
        } else if (membershipType == uint256(MembershipType.Advanced)) {
            require(msg.value == ADVANCED_PRICE, "Pago incorrecto para la membresia avanzada");
        }

        membershipExpiration[owner] += 30 days; // Extiende 30 días más la membresía

        emit MembershipRenewed(owner, membershipType);
    }

    // Función para verificar si una membresía está activa
    function isMembershipActive(address owner) external view returns (bool) {
        return membershipExpiration[owner] > block.timestamp;
    }

    // Función para verificar el tipo de membresía que tiene un usuario
    function getMembershipType(uint256 tokenId) external view returns (uint256) {
        return uint256(membershipTypeByTokenId[tokenId]);
    }
}
