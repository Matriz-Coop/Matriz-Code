"use client";

import React from "react";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div>
      <header>
      <Link href="/">
        <img src="https://i.ibb.co/PcsFPhm/Matriz-isotipo.jpg" alt="Matriz Isotipo" width="70" />
      </Link>
        <nav>
          <ul>
            <li>
              <Link href="/Descubre" className="descubre-link">Descubre</Link>
            </li>
            <li>
              <Link href="/Aprende" className="aprende-link">Aprende</Link>
            </li>
            <li>
              <Link href="/Aplica" className="aplica-link">Aplica</Link>
            </li>
            <li>
              <Link href="/Nosotros" className="nosotros-link">Nosotros</Link>
            </li>
            <li>
              <Link href="/Iniciarapp" className="launch-app">Iniciar App</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text-left">
          <p>La <em>seguridad</em> de un empleado,</p>
          <p>con la <em>libertad</em> de un emprendedor.</p>
        </div>
        <div className="hero-image">
          <img src="https://i.ibb.co/WnyGRsj/Comadre-Landing.png" alt="Ejemplo de suscripción" />
        </div>
        <div className="hero-text-right">
          <p>Adquiere la membresía y recibe las prestaciones laborales, herramientas de trabajo y beneficios que mereces.</p>
        </div>
      </section>

      <section className="about">
        <div className="about-text">
          <p>Esta suscripción se sostiene en el Colectivo Matriz, una cooperativa de responsabilidad limitada de capital variable constituida en México.</p>
          <p>Matriz sirve como una infraestructura común que le da soporte legal, fiscal y contable a los miembros de la comunidad.</p>
        </div>
        <div className="logo-bottom">
          <img src="https://i.ibb.co/ZKTXfxr/Matriz-Logo.png" alt="Matriz Logo" />
        </div>
      </section>

      <footer>
        &copy; copyleft 2024 Matriz Cooperativa.
      </footer>
    </div>
  );
};

export default Home;
