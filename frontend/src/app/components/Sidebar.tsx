'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; // Para navegación

const Sidebar = () => {
  const router = useRouter();
  const [hovered, setHovered] = React.useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  // Mover buttonsData dentro del componente para que tenga acceso a router
  const buttonsData = [
    { label: ' Volver', icon: '←', onClick: () => router.back() },
    { label: ' Menú Principal', icon: '⌂', onClick: () => router.push('/dashboard') },
    { label: ' Buscar', icon: '🔍', onClick: () => alert('Buscar') },
    { label: ' Notificaciones', icon: '🔔', onClick: () => alert('Notificaciones') },
    { label: ' Ajustes', icon: '⚙', onClick: () => alert('Ajustes') },
  ];

  return (
    <div style={styles.wrapper}>
      <div style={styles.sidebarContainer}>
        <div style={styles.menu}>
          {buttonsData.map((button, index) => (
            <button
              key={index}
              style={hovered === index ? { ...styles.button, ...styles.buttonHover } : styles.button}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={button.onClick}
            >
              <div style={styles.iconWrapper}>{button.icon}</div>
              <div style={styles.buttonText}>{button.label}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    position: 'fixed' as const,
    bottom: '20px',
    left: 0,
    width: '100%',
    height: '380px',
    overflow: 'hidden',
  },
  sidebarContainer: {
    position: 'absolute' as const,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url(https://i.postimg.cc/NMvb0GTh/Wooden-Bar-6.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    boxShadow: '0px -4px 20px rgba(0, 0, 0, 0.4)',
    zIndex: 1000,
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
  },
  menu: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px', // Aumentar separación entre botones
    width: '80%',
    paddingBottom: '20px',
  },
  button: {
    width: '140px', // Aumentar ancho para hacer los botones más largos
    height: '60px', // Mantener altura para efecto ovalado
    borderRadius: '30px', // Bordes ovalados
    background: 'radial-gradient(circle, #6e4c2a, #4d3318)',
    boxShadow: 'inset 5px 5px 15px rgba(0, 0, 0, 0.7), inset -5px -5px 15px rgba(255, 255, 255, 0.1)',
    border: '3px solid #8a5c30',
    color: '#fff',
    fontSize: '18px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
  },
  buttonHover: {
    background: 'radial-gradient(circle, #8a5c30, #6e4c2a)',
    transform: 'scale(1.1)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.5)',
  },
  iconWrapper: {
    marginBottom: '5px',
  },
  buttonText: {
    fontSize: '14px', // Ajustar tamaño del texto para que se ajuste al nuevo tamaño del botón
    textAlign: 'center',
  },
};

export default Sidebar;
