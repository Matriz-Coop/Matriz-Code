import React from "react";
import GlobalHeader from "../../../../components/GlobalHeader";
import Link from "next/link";
import "../../../../styles/forostyles.css";

const ForumsPage: React.FC = () => {
  return (
    <div className="forum-page">
      {/* Header Global */}
      <GlobalHeader />

      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Foros</h2>
        <div className="search-bar">
          <input type="text" placeholder="Buscar en foros..." />
        </div>
        <h3>Categorías</h3>
        <ul>
          <li className="category-item">
            <Link href="/foros/tecnologia">Tecnología</Link>
          </li>
          <li className="category-item">
            <Link href="/foros/salud">Salud</Link>
          </li>
          <li className="category-item">
            <Link href="/foros/educacion">Educación</Link>
          </li>
          <li className="category-item">
            <Link href="/foros/medio-ambiente">Medio Ambiente</Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="forum-content">
        <section className="recent-discussions">
          <h2>Discusión Reciente</h2>
          <div className="discussion-item">
            <h3><Link href="/foros/discusiones/1">¿Cómo la tecnología está cambiando el mundo?</Link></h3>
            <p>Autor: <Link href="/perfil/usuario1">Usuario1</Link></p>
            <div className="details">
              <span>Respuestas: 10</span>
              <span>Última actividad: hace 2 horas</span>
            </div>
          </div>
          <div className="discussion-item">
            <h3><Link href="/foros/discusiones/2">Beneficios de una vida saludable</Link></h3>
            <p>Autor: <Link href="/perfil/usuario2">Usuario2</Link></p>
            <div className="details">
              <span>Respuestas: 8</span>
              <span>Última actividad: hace 4 horas</span>
            </div>
          </div>
        </section>

        <section className="popular-discussions">
          <h2>Discusión Popular</h2>
          <div className="discussion-item">
            <h3><Link href="/foros/discusiones/3">Educación en tiempos de pandemia</Link></h3>
            <p>Autor: <Link href="/perfil/usuario3">Usuario3</Link></p>
            <div className="details">
              <span>Respuestas: 15</span>
              <span>Última actividad: hace 1 día</span>
            </div>
          </div>
          <div className="discussion-item">
            <h3><Link href="/foros/discusiones/4">La importancia de cuidar el medio ambiente</Link></h3>
            <p>Autor: <Link href="/perfil/usuario4">Usuario4</Link></p>
            <div className="details">
              <span>Respuestas: 12</span>
              <span>Última actividad: hace 3 días</span>
            </div>
          </div>
        </section>

        {/* Pagination */}
        <div className="pagination">
          <Link href="/foros?page=1">1</Link>
          <Link href="/foros?page=2">2</Link>
          <Link href="/foros?page=3">3</Link>
          <Link href="/foros?page=next">Siguiente</Link>
        </div>
      </main>

      {/* Floating Action Button */}
      <Link href="/foros/nueva-discusion" className="floating-button">
        +
      </Link>
    </div>
  );
};

export default ForumsPage;
