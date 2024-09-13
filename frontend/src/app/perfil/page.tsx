'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; // Usa este para la nueva carpeta app
import Sidebar from '../components/Sidebar';

const Perfil = () => {
  const router = useRouter();

  const handleClick = (path: string) => {
    if (path === 'herramientas') {
      router.push(`/${path}`);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.buttonsGrid}>
        {buttonsData.map((button, index) => (
          <div key={index} style={styles.buttonContainer}>
            <button
              style={
                button.label === 'Herramientas'
                  ? hovered === index
                    ? { ...styles.button, ...styles.buttonHover }
                    : styles.button
                  : styles.disabledButton
              }
              onClick={() => handleClick(button.path)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              disabled={button.label !== 'Herramientas'}
            >
              <img
                src={button.imgSrc}
                alt={button.label}
                style={button.label === 'Herramientas' ? styles.buttonImage : styles.disabledImage}
              />
            </button>
            <p
              style={button.label === 'Herramientas' ? styles.label : styles.disabledLabel}
            >
              {button.label}
            </p>
          </div>
        ))}
      </div>
      <Sidebar />
    </div>
  );
};

const buttonsData = [
  { imgSrc: 'https://i.postimg.cc/CLtb4yBH/herramientas.png', label: 'Herramientas', path: 'herramientas' },
  { imgSrc: 'https://i.postimg.cc/vHdSNGpp/telefono-soporte-prof.png', label: 'Soporte Profesional', path: 'soporte-profesional' },
  { imgSrc: 'https://i.postimg.cc/brw1mp9L/alcanci-a-fondo-ahorro.png', label: 'Fondo de Ahorro', path: 'fondo-ahorro' },
  { imgSrc: 'https://i.postimg.cc/bNK2tQWm/reloj-pago-adelantado.png', label: 'Pago Adelantado', path: 'pago-adelantado' },
  { imgSrc: 'https://i.postimg.cc/x1wy9r9T/abaco-dashboard.png', label: 'Dashboard', path: 'dashboard' },
  { imgSrc: 'https://i.postimg.cc/1RY3GY2n/botiquin-seguro.png', label: 'Seguro', path: 'seguro' },
  { imgSrc: 'https://i.postimg.cc/LskfRnyN/pesa-wellhub.png', label: 'Bienestar', path: 'bienestar' },
  { imgSrc: 'https://i.postimg.cc/1RY3GY2n/botiquin-seguro.png', label: 'Gestión Administrativa', path: 'gestion-administrativa' },
];

const styles = {
  container: {
    position: 'relative' as const,
    height: '100vh',
    padding: '20px',
    backgroundImage: 'url(https://i.postimg.cc/15zHpk4b/Perfil.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '0.2vh',
  },
  buttonsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    marginTop: '-100px',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    cursor: 'pointer',
  },
  button: {
    width: '110px',
    height: '110px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, #6e4c2a, #4d3318)',
    boxShadow: 'inset 5px 5px 15px rgba(0, 0, 0, 0.7), inset -5px -5px 15px rgba(255, 255, 255, 0.1)',
    border: '3px solid #8a5c30',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
  },
  buttonImage: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    border: '2px solid #fff',
  },
  disabledButton: {
    width: '110px',
    height: '110px',
    borderRadius: '50%',
    background: 'gray',
    opacity: 0.6,
    cursor: 'not-allowed',
  },
  disabledImage: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    border: '2px solid #aaa',
    filter: 'grayscale(100%)',
  },
  label: {
    marginTop: '12px',
    fontSize: '14px',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    textAlign: 'center' as const,
    cursor: 'pointer',
  },
  disabledLabel: {
    marginTop: '12px',
    fontSize: '14px',
    color: '#888',
    textShadow: 'none',
    textAlign: 'center' as const,
    cursor: 'not-allowed',
  },
  buttonHover: {
    background: 'radial-gradient(circle, #8a5c30, #6e4c2a)', // Efecto hover
    transform: 'scale(1.1)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.5)',
  },
};

// Aplica estilos de hover con React
export default function PerfilWithHover() {
  const [hovered, setHovered] = React.useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div style={styles.container}>
      <div style={styles.buttonsGrid}>
        {buttonsData.map((button, index) => (
          <div key={index} style={styles.buttonContainer}>
            <button
              style={
                button.label === 'Herramientas'
                  ? hovered === index
                    ? { ...styles.button, ...styles.buttonHover }
                    : styles.button
                  : styles.disabledButton
              }
              onClick={() => handleClick(button.path)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              disabled={button.label !== 'Herramientas'}
            >
              <img
                src={button.imgSrc}
                alt={button.label}
                style={button.label === 'Herramientas' ? styles.buttonImage : styles.disabledImage}
              />
            </button>
            <p
              style={button.label === 'Herramientas' ? styles.label : styles.disabledLabel}
            >
              {button.label}
            </p>
          </div>
        ))}
      </div>
      <Sidebar />
    </div>
  );
}