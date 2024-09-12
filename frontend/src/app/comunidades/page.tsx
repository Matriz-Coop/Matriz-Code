"use client"; // Asegúrate de que el componente sea client-side

import React from 'react';
import { useRouter } from 'next/navigation';

const Comunidades = () => {
  const router = useRouter();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Comunidades</h1>
      <div style={styles.buttons}>
        <button onClick={() => router.push('/')} style={styles.button}>
          Volver
        </button>
        <button onClick={() => router.push('/')} style={styles.button}>
          Página Anterior
        </button>
        <input type="text" placeholder="Buscar" style={styles.search} />
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
    backgroundImage: 'url(https://i.postimg.cc/HnMTKZLm/Comunidades.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '36px',
    marginBottom: '20px',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#0070f3',
    color: '#fff',
    margin: '5px',
  },
  search: {
    marginTop: '10px',
    padding: '10px',
    width: '100%',
    maxWidth: '300px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
};

export default Comunidades;
