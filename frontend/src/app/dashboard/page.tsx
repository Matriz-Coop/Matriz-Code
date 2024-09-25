"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './MembresiaPerfil.module.css'; // Importa el archivo CSS

const MembresiaPerfil = () => {
  const router = useRouter();
  const [hovered, setHovered] = React.useState<number | null>(null);

  const handleClick = (path: string) => {
    router.push(path === 'perfil' ? '/Perfil-Membresia' : `/${path}`);
  };

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
          {['Perfil', 'Comunidades'].map((label, index) => (
            <div key={index} className={styles.buttonContainer}>
              <button
                className={hovered === index ? `${styles.button} ${styles.buttonHover}` : styles.button}
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
    </>
  );
};

export default MembresiaPerfil;
