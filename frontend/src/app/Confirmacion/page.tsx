"use client"; // Asegúrate de que el componente sea client-side

import React from 'react';
import { useRouter } from 'next/navigation';

const Confirmacion = () => {
  const router = useRouter();
  const [hovered, setHovered] = React.useState<number | null>(null);

  const handleDashboard = () => {
    router.push('/membresia'); // Redirige a la página de membresía
  };

  return (
    <div style={styles.container}>
      <img src="https://i.postimg.cc/BvRcsbg0/Caban-a.png" alt="Background" style={styles.backgroundImage} />
      <div style={styles.overlay}>
        <img src="https://i.postimg.cc/nz0mrLKr/Matriz-isotipo.jpg" alt="Matriz Isotipo" style={styles.isotipo} />
        <h1 style={styles.title}>¡Transacción Confirmada!</h1>
        <p style={styles.text}>¡Bienvenido/a a Matriz! ¡Te estábamos esperando!</p>
        <p style={styles.text}>Accede a tus beneficios dando click en el botón "Dashboard".</p>
        <div style={styles.buttonContainer}>
          <button
            onClick={handleDashboard}
            style={hovered === 0 ? { ...styles.button, ...styles.buttonHover } : styles.button}
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(null)}
          >
            Ir al Dashboard
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
    padding: '10px',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 1,
  },
  isotipo: {
    width: '130px',
    height: '130px',
    clipPath: 'circle(40%)',
    border: '5px solid #fff',
    marginBottom: '10px',
    objectFit: 'contain',
  },
  title: {
    color: '#fff',
    fontSize: '24px',
    marginBottom: '10px',
  },
  text: {
    color: '#fff',
    fontSize: '16px',
    textAlign: 'center' as const,
    marginBottom: '10px',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '280px',
    marginBottom: '15px',
  },
  button: {
    background: 'rgba(255, 255, 255, 0.1)',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    color: '#fff',
    fontSize: '18px',
    cursor: 'pointer',
    padding: '12px 20px',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    width: '100%',
    textAlign: 'center',
    margin: '8px 0',
  },
  buttonHover: {
    background: 'rgba(255, 255, 255, 0.2)',
    transform: 'scale(1.05)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
  },
};

export default Confirmacion;
