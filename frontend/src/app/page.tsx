"use client"; // Asegúrate de que el componente sea client-side

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Importa el componente Image
import styles from './Page.module.css'; // Importa el módulo CSS

const Page = () => {
  const router = useRouter();
  const [hovered, setHovered] = React.useState<number | null>(null);

  const handleBasicMode = () => {
    router.push('/dashboard'); // Redirige al dashboard
  };

  const handleCreateAccount = () => {
    router.push('/crear-cuenta'); // Redirige a la página de crear cuenta
  };

  const handleLogin = () => {
    router.push('/login'); // Redirige a la página de login (si la tienes)
  };

  return (
    <>
      <div className={styles.container}>
        <Image
          src="https://i.postimg.cc/BvRcsbg0/Caban-a.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className={styles.backgroundImage}
        />
        <div className={styles.overlay}>
          <Image
            src="https://i.postimg.cc/nz0mrLKr/Matriz-isotipo.jpg"
            alt="Matriz Isotipo"
            width={130}
            height={130}
            className={styles.isotipo}
          />
          <Image
            src="https://i.postimg.cc/cHsYd3nP/Comadre-Landing.png"
            alt="Comadre Landing"
            width={200}
            className={styles.comadreLanding}
          />
          <h1 className={styles.slogan}>Cooperativa de impulso profesional</h1>
          <div className={styles.buttonContainer}>
            <button
              onClick={handleBasicMode}
              className={hovered === 0 ? `${styles.button} ${styles.buttonHover}` : styles.button}
              onMouseEnter={() => setHovered(0)}
              onMouseLeave={() => setHovered(null)}
            >
              Continuar en Modo Básico
            </button>
            <button
              onClick={handleCreateAccount}
              className={hovered === 1 ? `${styles.button} ${styles.buttonHover}` : styles.button}
              onMouseEnter={() => setHovered(1)}
              onMouseLeave={() => setHovered(null)}
            >
              Crear Cuenta
            </button>
            <button
              onClick={handleLogin}
              className={hovered === 2 ? `${styles.button} ${styles.buttonHover}` : styles.button}
              onMouseEnter={() => setHovered(2)}
              onMouseLeave={() => setHovered(null)}
            >
              ¿Ya tienes cuenta? Iniciar Sesión
            </button>
          </div>
          <Image
            src="https://i.postimg.cc/tJJxxHD5/Matriz-Logo.png"
            alt="Matriz Logo"
            width={200}
            height={200}
            className={styles.logo}
          />
          <div className={styles.infoLink}>
            <p>
              Para más información visita <a href="https://www.matriz.coop/" target="_blank" rel="noopener noreferrer">Matriz.coop</a>, 
              código abierto disponible en <a href="https://github.com/Matriz-Coop" target="_blank" rel="noopener noreferrer">GitHub</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
