import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as fs from "fs";

const { PrivateKey } = JSON.parse(fs.readFileSync('./secret.json').toString());
const config: HardhatUserConfig = {
  solidity: "0.8.24",
  defaultNetwork: "minato",
  networks: {
    minato: {
      url: "https://rpc.minato.soneium.org/",
      chainId: 1946,
      accounts: [PrivateKey]
    }
  }
};

export default config;