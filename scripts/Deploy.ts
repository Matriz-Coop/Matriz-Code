import { ethers } from "hardhat";

async function main() {

    const contractFactory = await ethers.getContractFactory("MembershipNFT");
    const contractInstance = await contractFactory.deploy();
    await contractInstance.waitForDeployment();

    console.log("Contract deploy at address:", await contractInstance.getAddress());







//   // Definir los parámetros para el contrato
//   const nftName = "Matriz Membership";
//   const nftSymbol = "MATNFT";

//   // Puedes agregar más parámetros según los que necesite tu contrato
//   const basicMembershipPrice = ethers.utils.parseEther("0.01"); // Precio en ether para la membresía básica
//   const intermediateMembershipPrice = ethers.utils.parseEther("0.05"); // Precio en ether para la membresía intermedia
//   const advancedMembershipPrice = ethers.utils.parseEther("0.1"); // Precio en ether para la membresía avanzada

//   // Obtener el contrato a desplegar
//   const MembershipNFT = await ethers.getContractFactory("MembershipNFT");

//   // Desplegar el contrato con los parámetros
//   const membershipNFT = await MembershipNFT.deploy(
//     nftName,
//     nftSymbol,
//     basicMembershipPrice,
//     intermediateMembershipPrice,
//     advancedMembershipPrice
  // );

//   await membershipNFT.deployed();

//   console.log("MembershipNFT deployed to:", membershipNFT.address);
}

// Ejecutar el script
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
