"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div>
      <header>
        <Link href="/">
          <Image 
            src="https://i.ibb.co/gVHtkSg/Matriz-isotipo.jpg" 
            alt="Matriz Isotipo" 
            width={70} 
            height={70} 
          />
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/Descubre">
                <span className="nav-link">Descubre</span>
              </Link>
            </li>
            <li>
              <Link href="/Aprende">
                <span className="nav-link">Aprende</span>
              </Link>
            </li>
            <li>
              <Link href="/Aplica">
                <span className="nav-link">Aplica</span>
              </Link>
            </li>
            <li>
              <Link href="/Nosotros">
                <span className="nav-link">Nosotros</span>
              </Link>
            </li>
            <li>
              <Link href="/Iniciarapp">
                <span className="launch-app">Iniciar App</span>
              </Link>
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
          <Image 
            src="https://i.ibb.co/McPDRk4/Comadre-Landing.png" 
            alt="Ejemplo de suscripción" 
            width={600} 
            height={400} 
          />
        </div>
        <div className="hero-text-right">
          <p>Matriz es una cooperativa de plataforma que conecta trabajadores autónomos, emprendedores individuales y colectivos que se dedican a generar un cambio social y ambiental positivo en el mundo, interesados en mejorar su calidad de vida laboral y aumentar el impacto de su trabajo a través de la colaboración.</p>
        </div>
      </section>

      <section className="about">
        <div className="about-text">
          <p>Adquiere la membresía y recibe las prestaciones laborales, herramientas de trabajo y beneficios que mereces.</p>
          <p>Esta aplicación se sostiene en el Colectivo Matriz, una cooperativa de responsabilidad limitada de capital variable constituida en México.</p>
          <p>Matriz sirve como una infraestructura común que le da soporte legal, fiscal y contable a los miembros de la comunidad.</p>
        </div>
        <div className="logo-bottom">
          <Image 
            src="https://i.ibb.co/R2MGQGm/Matriz-Logo.png" 
            alt="Matriz Logo" 
            width={150} 
            height={150} 
          />
        </div>
      </section>

      <footer>
      </footer>
    </div>
  );
};

export default Home;
