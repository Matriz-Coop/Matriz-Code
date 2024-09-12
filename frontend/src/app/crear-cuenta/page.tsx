"use client";  // Esta directiva hace que el componente sea Client-side

import React from 'react';
import { useRouter } from 'next/navigation';

const CrearCuenta = () => {
  const router = useRouter();

  const handleSelectMembership = (type) => {
    console.log(`Seleccionaste la membresía: ${type}`);
    router.push(`/confirmar-membresia?tipo=${type}`); // Redirigir a confirmar membresía
  };

  return (
    <div style={styles.container}>
      <h1>Selecciona tu Membresía</h1>
      <div style={styles.memberships}>
        <button onClick={() => handleSelectMembership('Básico')} style={styles.button}>
          Membresía Básica
        </button>
        <button onClick={() => handleSelectMembership('Intermedio')} style={styles.button}>
          Membresía Intermedia
        </button>
        <button onClick={() => handleSelectMembership('Avanzado')} style={styles.button}>
          Membresía Avanzada
        </button>
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
    backgroundColor: '#f0f0f0',
  },
  memberships: {
    display: 'flex',
    justifyContent: 'space-around',
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
  },
};

export default CrearCuenta;
