"use client"; // Esta directiva hace que el componente sea Client-side

import React from 'react';
import { useRouter } from 'next/navigation';

const CrearCuenta = () => {
  const router = useRouter();
  const [hovered, setHovered] = React.useState<number | null>(null);

  const handleSelectMembership = (type: string) => {
    console.log(`Seleccionaste la membresía: ${type}`);
    router.push(`/confirmar-membresia?tipo=${type}`); // Redirigir a confirmar membresía
  };

  return (
    <div style={styles.container}>
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
    backgroundColor: 'rgba(0, 0, 139, 0.7)', // Azul oscuro con alta transparencia
    borderRadius: '0px', // Sin bordes redondeados para ocupar toda la pantalla
    zIndex: 1,
    textAlign: 'center',
  },
  membershipInfoImage: {
    width: '95%', // Aumenta el tamaño de la imagen
    maxWidth: '900px',
    height: 'auto',
    marginBottom: '30px',
  },
  memberships: {
    display: 'flex',
    flexDirection: 'row' as const, // Botones en disposición horizontal
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: '700px',
  },
  button: {
    border: '2px solid rgba(255, 255, 255, 0.3)',
    color: '#000', // Texto en negro
    fontSize: '16px',
    cursor: 'pointer',
    padding: '12px 20px',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    width: '30%', // Botones con ancho relativo
    maxWidth: '200px',
    margin: '0 10px', // Espaciado horizontal entre botones
  },
  buttonHover: {
    transform: 'scale(1.05)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
  },
};

export default CrearCuenta;
