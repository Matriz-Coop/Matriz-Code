"use client"; // Esta directiva hace que el componente sea Client-side

import React, { useState } from 'react';
import { ethers } from 'ethers';
import { useRouter } from 'next/navigation';
import WalletHeader from '../components/HeaderWallet';
import Image from 'next/image';
import styles from './CrearCuenta.module.css'; // Importa el archivo CSS

import contractABI from '../contracts/contractABI.json';

const contractAddress = '0xF7C17BA66cA9bD9EC0C55Fb6bB21A069257C2f3A';

const membershipPrices: Record<number, string> = {
  1: '0.00333', 
  2: '0.0333',
  3: '0.0667'
};

const CrearCuenta = () => {
  const router = useRouter();
  const [hovered, setHovered] = useState<number | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [userConnected, setUserConnected] = useState<boolean>(false);
  const [contract, setContract] = useState<ethers.Contract | null>(null);

  async function requestAccount() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        // Verifica si accounts es un array
        if (Array.isArray(accounts) && accounts.length > 0) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const _signer = provider.getSigner();
          const _address = accounts[0];
          setAddress(_address);
          setSigner(_signer);
          setUserConnected(true);
          const _contract = new ethers.Contract(contractAddress, contractABI, _signer);
          setContract(_contract);
        } else {
          console.error("No se encontró ninguna cuenta.");
        }
      } catch (error) {
        console.error("Error solicitando cuenta:", error);
      }
    } else {
      console.log("MetaMask no está instalado.");
    }
  }

  const mintMembership = async (type: number) => {
    if (contract && signer) {
      try {
        const price = membershipPrices[type];
        const value = ethers.utils.parseEther(price);
        const tx = await contract.mintMembership(type, { value });
        const receipt = await tx.wait();
        console.log('Transacción confirmada:', receipt);
        router.push('/Confirmacion');
      } catch (error) {
        console.error("Error minting membership:", error);
      }
    } else {
      console.error("MetaMask no está conectada o contrato no está inicializado.");
    }
  };

  const handleSelectMembership = async (type: number) => {
    if (!userConnected) {
      await requestAccount();
    }
    mintMembership(type);
  };

  return (
    <>
      <WalletHeader onConnect={requestAccount} />
      <div className={styles.container}>
        <button onClick={requestAccount}>Conectar Cuenta</button>
        {userConnected && <p>Conectado como: {address}</p>}

        <Image
          src="https://i.postimg.cc/DwDwVLYJ/Whats-App-Image-2024-09-12-at-18-27-56.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
          className={styles.backgroundImage}
        />

        <div className={styles.overlay}>
          <Image
            src="https://i.postimg.cc/y6P61wbz/Membresias2.png"
            alt="Información de Membresías"
            width={900}
            height={500} // Cambié el height a un número
            className={styles.membershipInfoImage}
          />

          <div className={styles.memberships}>
            <button
              onClick={() => handleSelectMembership(1)}
              className={`${styles.button} ${hovered === 0 ? styles.buttonHover : ''}`}
              onMouseEnter={() => setHovered(0)}
              onMouseLeave={() => setHovered(null)}
              style={{ backgroundColor: '#f9dcfd' }}
            >
              Suscribirse a Conexión
            </button>

            <button
              onClick={() => handleSelectMembership(2)}
              className={`${styles.button} ${hovered === 1 ? styles.buttonHover : ''}`}
              onMouseEnter={() => setHovered(1)}
              onMouseLeave={() => setHovered(null)}
              style={{ backgroundColor: '#d2e4ea' }}
            >
              Suscribirse a Bienestar
            </button>

            <button
              onClick={() => handleSelectMembership(3)}
              className={`${styles.button} ${hovered === 2 ? styles.buttonHover : ''}`}
              onMouseEnter={() => setHovered(2)}
              onMouseLeave={() => setHovered(null)}
              style={{ backgroundColor: '#f7c374' }}
            >
              Suscribirse a Expansión
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrearCuenta;
