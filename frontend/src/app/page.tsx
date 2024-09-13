"use client"; // Asegúrate de que el componente sea client-side

import React from 'react';
import { useRouter } from 'next/navigation';
import WalletHeader from './components/HeaderWallet';


const Page = () => {
  const router = useRouter();
  const [hovered, setHovered] = React.useState<number | null>(null);

  const handleBasicMode = () => {
    router.push('/dashboard'); // Redirige al dashboard
  };

  const handleCreateAccount = () => {
    router.push('/crear-cuenta'); // Redirige a la página de crear cuenta
  };

  const handleLogin = () => {
    router.push('/login'); // Redirige a la página de login (si la tienes)
  };

  return (
    <>
      <WalletHeader /> {/* Incorpora el WalletHeader al principio del return */}
      <div style={styles.container}>
        <img src="https://i.postimg.cc/BvRcsbg0/Caban-a.png" alt="Background" style={styles.backgroundImage} />
        <div style={styles.overlay}>
          <img src="https://i.postimg.cc/nz0mrLKr/Matriz-isotipo.jpg" alt="Matriz Isotipo" style={styles.isotipo} />
          <img src="https://i.postimg.cc/cHsYd3nP/Comadre-Landing.png" alt="Comadre Landing" style={styles.comadreLanding} />
          <h1 style={styles.slogan}>Cooperativa de impulso profesional</h1>
          <div style={styles.buttonContainer}>
            <button
              onClick={handleBasicMode}
              style={hovered === 0 ? { ...styles.button, ...styles.buttonHover } : styles.button}
              onMouseEnter={() => setHovered(0)}
              onMouseLeave={() => setHovered(null)}
            >
              Continuar en Modo Básico
            </button>
            <button
              onClick={handleCreateAccount}
              style={hovered === 1 ? { ...styles.button, ...styles.buttonHover } : styles.button}
              onMouseEnter={() => setHovered(1)}
              onMouseLeave={() => setHovered(null)}
            >
              Crear Cuenta
            </button>
            <button
              onClick={handleLogin}
              style={hovered === 2 ? { ...styles.button, ...styles.buttonHover } : styles.button}
              onMouseEnter={() => setHovered(2)}
              onMouseLeave={() => setHovered(null)}
            >
              ¿Ya tienes cuenta? Iniciar Sesión
            </button>
          </div>
          <img src="https://i.postimg.cc/tJJxxHD5/Matriz-Logo.png" alt="Matriz Logo" style={styles.logo} />
          <div style={styles.infoLink}>
            <p>
              Para más información visita <a href="https://www.matriz.coop/" target="_blank" rel="noopener noreferrer">Matriz.coop</a>, 
              código abierto disponible en <a href="https://github.com/Matriz-Coop" target="_blank" rel="noopener noreferrer">GitHub</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    height: '100vh',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
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
    backgroundColor: 'rgba(0, 0, 139, 0.6)', // Azul oscuro con más transparencia
    padding: '10px', // Reducido padding
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 1,
  },
  isotipo: {
    width: '130px',
    height: '130px',
    clipPath: 'circle(40%)', // Recorte circular de la imagen
    border: '5px solid #fff',
    marginBottom: '10px',
    objectFit: 'contain', // Ajuste de la imagen dentro del círculo
  },
  comadreLanding: {
    width: '200px',
    height: 'auto',
    marginBottom: '10px', // Reducido marginBottom
  },
  slogan: {
    color: '#fff',
    fontSize: '18px',
    marginBottom: '15px', // Reducido marginBottom
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '280px',
    marginBottom: '15px', // Reducido marginBottom
  },
  button: {
    background: 'rgba(255, 255, 255, 0.1)', // Fondo semitransparente para igualar con el Sidebar
    border: '2px solid rgba(255, 255, 255, 0.3)', 
    color: '#fff',
    fontSize: '18px', // Tamaño de fuente igual al del Sidebar
    cursor: 'pointer',
    padding: '12px 20px',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    width: '100%', // Asegura que el botón ocupe el espacio disponible
    textAlign: 'center', // Centra el texto dentro del botón
    margin: '8px 0',
  },
  buttonHover: {
    background: 'rgba(255, 255, 255, 0.2)', // Efecto hover
    transform: 'scale(1.05)', 
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
  },
  logo: {
    width: '200px',
    height: '200px',
    clipPath: 'circle(50%)', // Recorte circular de la imagen del logo
    marginBottom: '10px',
    objectFit: 'contain', // Ajuste de la imagen dentro del círculo
  },
  infoLink: {
    color: '#fff',
    fontSize: '12px',
    textAlign: 'center' as const,
    marginTop: '10px',
  },
};

export default Page;