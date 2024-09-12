"use client"; // Asegúrate de que el componente sea client-side

import React from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

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
    <div style={styles.container}>
      <img src="https://i.postimg.cc/BvRcsbg0/Caban-a.png" alt="Background" style={styles.backgroundImage} />
      <div style={styles.overlay}>
        <img src="https://i.postimg.cc/tJJxxHD5/Matriz-Logo.png" alt="Matriz Logo" style={styles.logo} />
        <img src="https://i.postimg.cc/cHsYd3nP/Comadre-Landing.png" alt="Comadre Landing" style={styles.comadreLanding} />
        <h1 style={styles.slogan}>Cooperativa de impulso profesional</h1>
        <div style={styles.buttonContainer}>
          <button onClick={handleBasicMode} style={styles.button}>
            Continuar en Modo Básico
          </button>
          <button onClick={handleCreateAccount} style={styles.button}>
            Crear Cuenta
          </button>
          <button onClick={handleLogin} style={styles.button}>
            ¿Ya tienes cuenta? Iniciar Sesión
          </button>
        </div>
        <img src="https://i.postimg.cc/nz0mrLKr/Matriz-isotipo.jpg" alt="Matriz Isotipo" style={styles.isotipo} />
        <div style={styles.infoLink}>
          <p>
            Para más información visita <a href="https://www.matriz.coop/" target="_blank" rel="noopener noreferrer">Matriz.coop</a>, 
            código abierto disponible en <a href="https://github.com/Matriz-Coop" target="_blank" rel="noopener noreferrer">GitHub</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    position: 'relative',
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
    backgroundColor: 'rgba(0, 0, 255, 0.5)', // Azul con transparencia
    zIndex: 1,
    textAlign: 'center' as const,
  },
  logo: {
    width: '300px',
    height: 'auto',
    marginBottom: '20px',
  },
  comadreLanding: {
    width: '150px',
    height: 'auto',
    marginBottom: '20px',
  },
  slogan: {
    color: '#fff',
    fontSize: '24px',
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%',
    maxWidth: '400px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#0070f3',
    color: '#fff',
    margin: '10px 0',
    width: '100%',
  },
  isotipo: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    border: '5px solid #fff',
    marginTop: '20px',
    marginBottom: '30px',
  },
  infoLink: {
    color: '#fff',
    fontSize: '14px',
    marginTop: '20px',
  },
};

export default Page;
