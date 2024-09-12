"use client"; // Asegúrate de que el componente sea client-side

import React from 'react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const router = useRouter();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Dashboard</h1>
      <div style={styles.buttons}>
        <button onClick={() => router.push('/perfil')} style={styles.button}>
          Perfil
        </button>
        <button onClick={() => router.push('/comunidades')} style={styles.button}>
          Comunidades
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
    backgroundImage: 'url(https://i.postimg.cc/BvRcsbg0/Caban-a.png)',
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
};

export default Dashboard;
