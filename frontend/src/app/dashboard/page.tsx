"use client"; // Asegúrate de que el componente sea client-side

import React from 'react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const router = useRouter();
  const [hovered, setHovered] = React.useState<number | null>(null);

  return (
    <div style={styles.container}>
      <div style={styles.buttons}>
        {['Perfil', 'Comunidades'].map((label, index) => (
          <button
            key={index}
            onClick={() => {
              if (label === 'Perfil') router.push('/perfil');
              else router.push('/comunidades');
            }}
            style={hovered === index ? { ...styles.button, ...styles.buttonHover } : styles.button}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'url(https://i.postimg.cc/BvRcsbg0/Caban-a.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
    gap: '20px', // Espacio entre botones
    padding: '20px',
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
  },
  buttonHover: {
    background: 'rgba(255, 255, 255, 0.2)', // Efecto hover
    transform: 'scale(1.05)', 
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
  },
};

export default Dashboard;
