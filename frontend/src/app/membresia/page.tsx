"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const router = useRouter();
  const [hovered, setHovered] = React.useState<number | null>(null);

  const handleClick = (path: string) => {
    if (path === 'perfil') {
      router.push('/Perfil-Membresia');
    } else {
      router.push(`/${path}`);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.buttonsGrid}>
        {['Perfil', 'Comunidades'].map((label, index) => (
          <div key={index} style={styles.buttonContainer}>
            <button
              style={hovered === index ? { ...styles.button, ...styles.buttonHover } : styles.button}
              onClick={() => handleClick(label.toLowerCase())}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {label}
            </button>
          </div>
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
  buttonsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '50px', // Espacio mayor entre los botones
    marginTop: '-50px', // Ajustado para mejor alineación
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    cursor: 'pointer',
  },
  button: {
    width: '110px',  // Reducido aún más el ancho del botón
    height: '110px', // Reducida la altura del botón
    borderRadius: '50%',
    background: 'radial-gradient(circle, #6e4c2a, #4d3318)',
    boxShadow: 'inset 5px 5px 15px rgba(0, 0, 0, 0.7), inset -5px -5px 15px rgba(255, 255, 255, 0.1)',
    border: '3px solid #8a5c30',
    color: '#fff',
    fontSize: '13px', // Tamaño de fuente más pequeño
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
    textAlign: 'center',
    padding: '10px',
  },
  buttonHover: {
    background: 'radial-gradient(circle, #8a5c30, #6e4c2a)', // Efecto hover
    transform: 'scale(1.1)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.5)',
  },
};

export default Dashboard;
