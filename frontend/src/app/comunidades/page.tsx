'use client'; // Asegúrate de que el componente sea client-side

import React from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../components/Sidebar'; // Importa el Sidebar
import { FaForumbee, FaUsers, FaUser, FaRegHandshake, FaBriefcase, FaProjectDiagram, FaCalendar } from 'react-icons/fa'; // Importa íconos

const Comunidades = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(`/${path}`);
  };

  const [hovered, setHovered] = React.useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div style={styles.container}>
      <div style={styles.buttonsWrapper}>
        <div style={styles.buttonsGrid}>
          {buttonsData.map((button, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(button.path)}
              style={hovered === index ? { ...styles.button, ...styles.buttonHover } : styles.button}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div style={styles.iconWrapper}>
                {button.icon}
              </div>
              <div style={styles.buttonText}>
                {button.label}
              </div>
            </button>
          ))}
        </div>
      </div>
      <Sidebar /> {/* Agrega el Sidebar */}
    </div>
  );
};

// Datos para los botones con íconos
const buttonsData = [
  { label: 'Foros', path: 'foros', icon: <FaForumbee size={30} /> },
  { label: 'Comunidades', path: 'comunidades', icon: <FaUsers size={30} /> },
  { label: 'Perfiles', path: 'perfiles', icon: <FaUser size={30} /> },
  { label: 'Grupos de mutualización', path: 'grupos-mutualizacion', icon: <FaRegHandshake size={30} /> },
  { label: 'Bolsa de trabajo', path: 'bolsa-trabajo', icon: <FaBriefcase size={30} /> },
  { label: 'Proyectos colaborativos', path: 'proyectos-colaborativos', icon: <FaProjectDiagram size={30} /> },
  { label: 'Eventos', path: 'eventos', icon: <FaCalendar size={30} /> },
];

const styles = {
  container: {
    height: '100vh',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    backgroundImage: 'url(https://i.postimg.cc/HnMTKZLm/Comunidades.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  buttonsWrapper: {
    padding: '20px', // Espacio alrededor de los botones
    display: 'flex',
    justifyContent: 'center', // Centra los botones horizontalmente
    alignItems: 'center',
    width: '100%', // Asegura que el contenedor abarque todo el ancho
    position: 'absolute' as const, // Posiciona el contenedor
    top: '10%', // Ajusta la posición para mover los botones más arriba
    left: '0',
    boxSizing: 'border-box' as const,
  },
  buttonsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', // Ajusta el ancho mínimo de los botones y distribuye en columnas
    gap: '40px', // Aumenta el espacio entre botones
    justifyContent: 'center', // Centra los botones en el contenedor
    maxWidth: '90%', // Asegura que el contenedor no se expanda más allá del límite
  },
  button: {
    width: '100px', // Tamaño de los botones
    height: '100px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, #6e4c2a, #4d3318)',
    boxShadow: 'inset 5px 5px 15px rgba(0, 0, 0, 0.7), inset -5px -5px 15px rgba(255, 255, 255, 0.1)',
    border: '3px solid #8a5c30',
    color: '#fff',
    fontSize: '12px', // Texto más pequeño
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column', // Alinea el icono arriba y el texto abajo
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    whiteSpace: 'nowrap', // Asegura que el texto no se divida
  },
  buttonHover: {
    background: 'radial-gradient(circle, #8a5c30, #6e4c2a)', // Efecto hover
    transform: 'scale(1.1)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.5)',
  },
  iconWrapper: {
    marginBottom: '5px', // Espacio entre el ícono y el texto
  },
  buttonText: {
    fontSize: '10px', // Texto más pequeño dentro del botón
    textAlign: 'center',
  },
};

export default Comunidades;
