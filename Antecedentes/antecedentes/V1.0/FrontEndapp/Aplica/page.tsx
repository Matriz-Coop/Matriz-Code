import React from "react";
import Image from 'next/image'; // Importa Image desde next/image
import Link from 'next/link';

const Aplica: React.FC = () => {
  return (
    <div className="main">
      <header>
        <Link href="/">
          <Image 
            src="https://i.ibb.co/PcsFPhm/Matriz-isotipo.jpg" 
            alt="Matriz Isotipo" 
            width={70} 
            height={70} 
          />
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
      <main className="hero">
        <div className="hero-text-left">
          <h2>Bienvenido a la sección Aplica</h2>
          <p>Aquí podrás aplicar para ser parte de nuestro proyecto y acceder a las ventajas que ofrecemos.</p>
        </div>
      </main>
    </div>
  );
};

export default Aplica;
