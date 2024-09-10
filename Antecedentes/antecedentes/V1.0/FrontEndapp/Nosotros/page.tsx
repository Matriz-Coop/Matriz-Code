import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Nosotros: React.FC = () => {
  return (
    <div>
      <header>
        <Link href="/">
          <Image src="https://i.ibb.co/PcsFPhm/Matriz-isotipo.jpg" alt="Matriz Isotipo" width={70} height={70} />
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
      <main>
        <section>
          <h2>¿Quiénes somos?</h2>
          <p>
            Somos una empresa dedicada a ofrecer soluciones innovadoras en el 
            ámbito de la tecnología. Nuestro equipo está compuesto por expertos 
            en diferentes áreas que trabajan juntos para crear productos de alta 
            calidad y satisfacer las necesidades de nuestros clientes.
          </p>
        </section>
        <section>
          <h2>Nuestra misión</h2>
          <p>
            Nuestra misión es transformar el sector tecnológico mediante la 
            implementación de soluciones efectivas y sostenibles. Buscamos 
            mejorar la vida de las personas y apoyar a las empresas en su 
            crecimiento.
          </p>
        </section>
        <section>
          <h2>Visión</h2>
          <p>
            Aspiramos a ser líderes en la industria tecnológica, ofreciendo 
            productos y servicios que no solo cumplan con las expectativas, 
            sino que las superen. Queremos ser reconocidos por nuestra 
            innovación, calidad y compromiso con la satisfacción del cliente.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Nosotros;
