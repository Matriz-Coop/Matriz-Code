"use client";

import React from "react";
import Link from 'next/link';
import Image from 'next/image';

const Aprende: React.FC = () => {
  return (
    <div>
      <header>
        <Link href="/">
          <Image src="https://i.ibb.co/PcsFPhm/Matriz-isotipo.jpg" alt="Matriz Isotipo" width={70} height={70} />
        </Link>
        <nav>
          <ul>
            <li><Link href="/Descubre" className="descubre-link">Descubre</Link></li>
            <li><Link href="/Aprende" className="aprende-link">Aprende</Link></li>
            <li><Link href="/Aplica" className="aplica-link">Aplica</Link></li>
            <li><Link href="/Nosotros" className="nosotros-link">Nosotros</Link></li>
            <li><Link href="/Iniciarapp" className="launch-app">Iniciar App</Link></li>
          </ul>
        </nav>
      </header>

      <main className="container main-spacing">
        <section className="hero">
          <div className="hero-text">
            <h1>Aprende con Matriz</h1>
            <p>Explora nuestros recursos y herramientas para mejorar tus habilidades y conocimientos sobre la plataforma.</p>
            <Link href="/recursos" className="button">Explora Recursos</Link>
          </div>
          <div className="hero-image">
            <Image src="https://i.ibb.co/B2tszf3/Mandala.png" alt="Aprende con Matriz" width={600} height={400} />
          </div>
        </section>

        <section className="content">
          <h2>Recursos Destacados</h2>
          <div className="card-container">
            <div className="card">
              <h3>Guía de Inicio</h3>
              <p>Todo lo que necesitas saber para comenzar con Matriz.</p>
              <Link href="/guia-de-inicio" className="button">Leer Más</Link>
            </div>
            <div className="card">
              <h3>Tutoriales Interactivos</h3>
              <p>Aprende con nuestros tutoriales prácticos y fáciles de seguir.</p>
              <Link href="/tutoriales" className="button">Ver Tutoriales</Link>
            </div>
            <div className="card">
              <h3>FAQs</h3>
              <p>Encuentra respuestas a las preguntas más frecuentes.</p>
              <Link href="/faqs" className="button">Leer FAQs</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Aprende;
