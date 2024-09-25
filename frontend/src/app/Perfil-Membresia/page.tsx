"use client";
/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Asegúrate de importar Image
import Sidebar from '../components/Sidebar'; // Asegúrate de importar el Sidebar si es necesario
import styles from './MembresiaPerfil3.module.css'; // Importa el archivo CSS

const MembresiaPerfil = () => {
  const router = useRouter();
  const [hovered, setHovered] = React.useState<number | null>(null);

  const handleClick = (path: string) => {
    router.push(path === 'perfil' ? '/Perfil-Membresia' : `/${path}`);
  };

  const handleMouseEnter = (index: number) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const buttonsData = [
    { imgSrc: 'https://i.postimg.cc/BvRcsbg0/Caban-a.png', label: 'Perfil', path: 'perfil' },
    { imgSrc: 'https://i.postimg.cc/BvRcsbg0/Caban-a.png', label: 'Comunidades', path: 'comunidades' },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.backgroundImage}>
          <Image
            src="https://i.postimg.cc/BvRcsbg0/Caban-a.png"
            alt="Fondo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.buttonsGrid}>
          {buttonsData.map((button, index) => (
            <div key={index} className={styles.buttonContainer}>
              <button
                className={hovered === index ? `${styles.button} ${styles.buttonHover}` : styles.button}
                onClick={() => handleClick(button.path)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={button.imgSrc}
                  alt={button.label}
                  className={styles.buttonImage}
                />
              </button>
              <p
                className={styles.label}
                onClick={() => handleClick(button.path)}
              >
                {button.label}
              </p>
            </div>
          ))}
        </div>
        <Sidebar />
      </div>
    </>
  );
};

// Exporta la función principal
export default MembresiaPerfil;
