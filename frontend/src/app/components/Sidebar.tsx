'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; // Para navegación

const Sidebar = () => {
  const router = useRouter();

  return (
    <div style={styles.wrapper}>
      <div style={styles.sidebarContainer}>
        <div style={styles.menu}>
          <button style={styles.button} onClick={() => router.back()}>
            ← Volver
          </button>
          <button style={styles.button} onClick={() => router.push('/dashboard')}>
            ⌂ Menú Principal
          </button>
          <button style={styles.button} onClick={() => alert('Buscar')}>
            🔍 Buscar
          </button>
          <button style={styles.button} onClick={() => alert('Notificaciones')}>
            🔔 Notificaciones
          </button>
          <button style={styles.button} onClick={() => alert('Ajustes')}>
            ⚙ Ajustes
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    position: 'fixed' as const,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '380px',
    overflow: 'hidden', // Oculta el contenido que se desborda
  },
  sidebarContainer: {
    position: 'absolute' as const,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url(https://i.postimg.cc/NMvb0GTh/Wooden-Bar-6.png)', // Imagen de barra de madera
    backgroundSize: 'contain', // Ajusta el tamaño de la imagen para que quepa en el contenedor
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom', // Centra la imagen y la posiciona en la parte inferior
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    boxShadow: '0px -4px 20px rgba(0, 0, 0, 0.4)', // Sombra más profunda
    zIndex: 1000,
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px', // Bordes redondeados en la parte superior
  },
  menu: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    width: '80%',
    paddingBottom: '20px',
  },
  button: {
    background: 'rgba(255, 255, 255, 0.1)', // Fondo semitransparente para que se vea la textura de madera
    border: '2px solid rgba(255, 255, 255, 0.3)', 
    color: '#fff',
    fontSize: '18px',
    cursor: 'pointer',
    padding: '12px 20px',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  },
  buttonHover: {
    background: 'rgba(255, 255, 255, 0.2)', // Efecto hover
    transform: 'scale(1.05)', 
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
  },
};

// Aplica estilos de hover con React
export default function SidebarWithHover() {
  const [hovered, setHovered] = React.useState(null);
  const router = useRouter();

  const handleMouseEnter = (index: number) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.sidebarContainer}>
        <div style={styles.menu}>
          {['← Volver', '⌂ Menú Principal', '🔍 Buscar', '🔔 Notificaciones', '⚙ Ajustes'].map((label, index) => (
            <button
              key={index}
              style={hovered === index ? { ...styles.button, ...styles.buttonHover } : styles.button}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                if (label === '← Volver') router.back();
                else if (label === '⌂ Menú Principal') router.push('/dashboard');
                else alert(label.split(' ')[1]);
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
