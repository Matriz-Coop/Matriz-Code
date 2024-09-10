import React from "react";
import Link from 'next/link';
import Image from 'next/image';

const Descubre: React.FC = () => {
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
      <main>
        <h2>Bienvenido a la sección Descubre</h2>
        <p>Aquí podrás explorar información interesante sobre nuestro proyecto.</p>
      </main>
    </div>
  );
};

export default Descubre;
