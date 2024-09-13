"use client"; // Esta directiva hace que el componente sea Client-side

import React, { useState } from 'react';
import { ethers } from 'ethers'; // Importa ethers
import { useRouter } from 'next/navigation';

// Importa el ABI del contrato
import contractABI from '../contracts/contractABI.json';

const contractAddress = '0xF7C17BA66cA9bD9EC0C55Fb6bB21A069257C2f3A';

const CrearCuenta = () => {
  const router = useRouter();
  const [hovered, setHovered] = useState<number | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [userConnected, setUserConnected] = useState<boolean>(false);
  const [contract, setContract] = useState<ethers.Contract | null>(null);

  // Función para solicitar la cuenta de MetaMask
  async function requestAccount() {
    if (window.ethereum) {
      try {
        let accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const _signer = provider.getSigner();
        const _address = accounts[0];

        setAddress(_address);
        setSigner(_signer);
        setUserConnected(true);

        // Configura el contrato
        const _contract = new ethers.Contract(contractAddress, contractABI, _signer);
        setContract(_contract);
      } catch (error) {
        console.error("Error solicitando cuenta:", error);
      }
    } else {
      console.log("MetaMask no está instalado.");
    }
  }

  // Función para mint (mintear) una membresía
  const mintMembership = async (type: string) => {
    if (contract && signer) {
      try {
        // Asumimos que el contrato tiene una función mintMembership que recibe una dirección y un tipo de membresía
        const tx = await contract.mintMembership(address, type, { value: ethers.utils.parseEther("0.01") });

        // Espera a que la transacción se confirme
        const receipt = await tx.wait();
        console.log('Transacción confirmada:', receipt);

        // Redirige a la página de confirmación
        router.push('/Confirmacion'); // Cambia a la ruta correcta de tu aplicación
      } catch (error) {
        console.error("Error minting membership:", error);
      }
    } else {
      console.error("MetaMask no está conectada o contrato no está inicializado.");
    }
  };

  // Función para manejar la selección de membresía y mintear
  const handleSelectMembership = async (type: string) => {
    if (!userConnected) {
      await requestAccount(); // Si no está conectada la cuenta, primero solicita la cuenta
    }
    mintMembership(type); // Después de conectar la cuenta, realiza la transacción
  };

  return (
    <div style={styles.container}>
      <button onClick={requestAccount}>Conectar Cuenta</button>
      {userConnected && <p>Conectado como: {address}</p>}

      <img
        src="https://i.postimg.cc/DwDwVLYJ/Whats-App-Image-2024-09-12-at-18-27-56.jpg"
        alt="Background"
        style={styles.backgroundImage}
      />

      <div style={styles.overlay}>
        <img
          src="https://i.postimg.cc/y6P61wbz/Membresias2.png"
          alt="Información de Membresías"
          style={styles.membershipInfoImage}
        />

        <div style={styles.memberships}>
          <button
            onClick={() => handleSelectMembership('Conexión')}
            style={hovered === 0 ? { ...styles.button, ...styles.buttonHover, backgroundColor: '#f9dcfd' } : { ...styles.button, backgroundColor: '#f9dcfd' }}
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(null)}
          >
            Suscribirse a Conexión
          </button>

          <button
            onClick={() => handleSelectMembership('Bienestar')}
            style={hovered === 1 ? { ...styles.button, ...styles.buttonHover, backgroundColor: '#d2e4ea' } : { ...styles.button, backgroundColor: '#d2e4ea' }}
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
          >
            Suscribirse a Bienestar
          </button>

          <button
            onClick={() => handleSelectMembership('Expansión')}
            style={hovered === 2 ? { ...styles.button, ...styles.buttonHover, backgroundColor: '#f7c374' } : { ...styles.button, backgroundColor: '#f7c374' }}
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
          >
            Suscribirse a Expansión
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 139, 0.7)',
    borderRadius: '0px',
    zIndex: 1,
    textAlign: 'center',
  },
  membershipInfoImage: {
    width: '95%',
    maxWidth: '900px',
    height: 'auto',
    marginBottom: '30px',
  },
  memberships: {
    display: 'flex',
    flexDirection: 'row' as const,
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: '700px',
  },
  button: {
    border: '2px solid rgba(255, 255, 255, 0.3)',
    color: '#000',
    fontSize: '16px',
    cursor: 'pointer',
    padding: '12px 20px',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    width: '30%',
    maxWidth: '200px',
    margin: '0 10px',
  },
  buttonHover: {
    transform: 'scale(1.05)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
  },
};

export default CrearCuenta;
