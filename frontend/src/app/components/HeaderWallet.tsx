import { useState } from "react";
import { ethers } from "ethers";

const ConnectWallet = ({ onConnect }: { onConnect: (provider: ethers.providers.Web3Provider, signer: ethers.Signer) => void }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [hovered, setHovered] = useState<boolean>(false);

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
    <div style={styles.container}>
      <button
        onClick={connectWallet}
        style={hovered ? { ...styles.button, ...styles.buttonHover } : styles.button}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Connect Wallet
      </button>
      {account && <p style={styles.connectedText}>Connected Account: {account}</p>}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    background: '#3944AC', // Asegúrate de que esto esté establecido correctamente
    justifyContent: 'flex-end',
    padding: '10px',
    width: '100%',
  },
  button: {
    background: 'rgba(255, 255, 255, 0.1)', // Fondo transparente
    border: '2px solid rgba(255, 255, 255, 0.3)',
    color: '#fff',
    fontSize: '14px', // Botón más pequeño
    cursor: 'pointer',
    padding: '8px 15px', // Tamaño de botón reducido
    borderRadius: '10px',
    transition: 'all 0.3s ease',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    textAlign: 'center' as const,
  },
  buttonHover: {
    background: 'rgba(255, 255, 255, 0.2)',
    transform: 'scale(1.05)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
  },
  connectedText: {
    color: '#fff',
    fontSize: '14px',
    marginTop: '10px',
    textAlign: 'right' as const, // Alineación del texto a la derecha
  },
};

export default ConnectWallet;
