"use client";
import React, { useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const IniciarApp: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Hook para la redirección

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica de autenticación
    if (username === "admin" && password === "admin") {
      router.push('/Iniciarapp/Usuario/Feed');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div>
      <header>
        <Link href="/">
          <Image src="https://i.ibb.co/gVHtkSg/Matriz-isotipo.jpg" alt="Matriz Isotipo" width={70} height={70} />
        </Link>
        <nav>
          <ul>
            <li><Link href="/Descubre"><span className="descubre-link">Descubre</span></Link></li>
            <li><Link href="/Aprende"><span className="aprende-link">Aprende</span></Link></li>
            <li><Link href="/Aplica"><span className="aplica-link">Aplica</span></Link></li>
            <li><Link href="/Nosotros"><span className="nosotros-link">Nosotros</span></Link></li>
            <li><Link href="/Iniciarapp"><span className="launch-app">Iniciar App</span></Link></li>
          </ul>
        </nav>
      </header>

      <main style={{ marginTop: '80px', padding: '40px 20px' }} className="container">
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Usuario:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="launch-app">Iniciar Sesión</button>
        </form>
        <div className="text-center mt-4">
          <p>¿Aún no eres parte de la comunidad?</p>
          <p><Link href="/crear-cuenta"><span className="link">Crear cuenta</span></Link></p>
        </div>
      </main>
    </div>
  );
};

export default IniciarApp;
