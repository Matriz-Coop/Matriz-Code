// frontend/src/app/components/ConnectWallet.tsx
import { useState } from "react";
import { ethers } from "ethers";
import contractABI from "../contracts/contractABI.json"; // Importa el ABI desde contractABI.json

const ConnectWallet = ({ onConnect }: { onConnect: (provider: ethers.providers.Web3Provider, signer: ethers.Signer) => void }) => {
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Solicita acceso a la cuenta
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const userAddress = await signer.getAddress();

        // Establece la cuenta en el estado
        setAccount(userAddress);
        // Llama a la función onConnect proporcionada
        onConnect(provider, signer);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      console.log("MetaMask is not installed!");
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>Connect MetaMask</button>
      {account && <p>Connected Account: {account}</p>}
    </div>
  );
};

export default ConnectWallet;
