'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../components/Sidebar'; 
import { FaForumbee, FaUsers, FaUser, FaRegHandshake, FaBriefcase, FaProjectDiagram, FaCalendar } from 'react-icons/fa';
import Image from 'next/image';

// Definición de tipos para los datos de los botones
interface ButtonData {
  label: string;
  path: string;
  icon: JSX.Element;
  imgSrc: string;
  style: React.CSSProperties; // Se asegura de que el estilo tenga el tipo correcto
}

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
    <div style={styles.container as React.CSSProperties}>
      <div style={styles.buttonsWrapper as React.CSSProperties}>
        <div style={styles.buttonsGrid as React.CSSProperties}>
          {buttonsData.map((button, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(button.path)}
              style={hovered === index 
                ? { ...styles.button, ...styles.buttonHover, ...button.style }
                : { ...styles.button, ...button.style }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div style={styles.iconWrapper as React.CSSProperties}>
                <Image
                  src={button.imgSrc}
                  alt={button.label}
                  width={70}
                  height={70}
                  style={styles.buttonImage as React.CSSProperties}
                />
                {button.icon}
              </div>
              <div style={styles.buttonText as React.CSSProperties}>
                {button.label}
              </div>
            </button>
          ))}
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

// Datos para los botones
const buttonsData: ButtonData[] = [
  { label: 'Foros', path: 'foros', icon: <FaForumbee size={30} />, imgSrc: 'https://i.postimg.cc/bN9fNDBQ/Foros.png', style: { top: '2%', left: '36%', position: 'absolute' } },
  { label: 'Comunidades', path: 'comunidades', icon: <FaUsers size={30} />, imgSrc: 'https://i.postimg.cc/gJLPy8CJ/communities.png', style: { top: '1%', left: '50%', position: 'absolute' } },
  { label: 'Perfiles', path: 'perfiles', icon: <FaUser size={30} />, imgSrc: 'https://i.postimg.cc/Sxx3SZ8h/profile.png', style: { top: '18%', left: '30%', position: 'absolute' } },
  { label: 'Grupos de mutualización', path: 'grupos-mutualizacion', icon: <FaRegHandshake size={30} />, imgSrc: 'https://i.postimg.cc/QMPRnpFr/grupos-de-mutualizacio-n.png', style: { top: '23%', left: '46%', position: 'absolute' } },
  { label: 'Bolsa de trabajo', path: 'bolsa-trabajo', icon: <FaBriefcase size={30} />, imgSrc: 'https://i.postimg.cc/fbLNPz5Y/bolsa-de-trabajo.png', style: { top: '23%', left: '7%', position: 'absolute' } },
  { label: 'Proyectos colaborativos', path: 'proyectos-colaborativos', icon: <FaProjectDiagram size={30} />, imgSrc: 'https://i.postimg.cc/FK2BxN6r/Proyectos-colaborativos.jpg', style: { top: '12%', left: '62%', position: 'absolute' } },
  { label: 'Eventos', path: 'eventos', icon: <FaCalendar size={30} />, imgSrc: 'https://i.postimg.cc/8zTDhB6K/eventos.png', style: { top: '15%', left: '80%', position: 'absolute' } },
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
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  buttonsGrid: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  button: {
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, #6e4c2a, #4d3318)',
    boxShadow: 'inset 5px 5px 15px rgba(0, 0, 0, 0.7), inset -5px -5px 15px rgba(255, 255, 255, 0.1)',
    border: '3px solid #8a5c30',
    color: '#fff',
    fontSize: '12px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
    textTransform: 'uppercase' as const,
    fontWeight: 'bold' as const,
    whiteSpace: 'nowrap' as const,
    position: 'absolute' as const,
  },
  buttonHover: {
    background: 'radial-gradient(circle, #8a5c30, #6e4c2a)',
    transform: 'scale(1.1)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.5)',
  },
  iconWrapper: {
    marginBottom: '5px',
  },
  buttonImage: {
    borderRadius: '50%',
    border: '2px solid #fff',
  },
  buttonText: {
    fontSize: '10px',
    textAlign: 'center' as const,
  },
};

export default Comunidades;
