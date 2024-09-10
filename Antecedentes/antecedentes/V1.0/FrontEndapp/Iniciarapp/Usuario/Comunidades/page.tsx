"use client";

import React, { useState } from "react";
import GlobalHeader from "../../../../components/GlobalHeader";
import Link from "next/link";
import { FaUsers, FaFilter, FaPlus, FaFire, FaCalendarAlt, FaCog, FaArrowUp } from "react-icons/fa";

const Communities: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [communities] = useState([
    {
      name: "Startups Tecnológicas",
      description: "Comunidad para emprendedores tecnológicos.",
      members: 250,
      isFree: true,
    },
    {
      name: "Freelancers Creativos",
      description: "Red de colaboración para freelancers.",
      members: 180,
      isFree: false,
    },
    {
      name: "Empresas Sociales",
      description: "Espacio para innovaciones sociales.",
      members: 320,
      isFree: true,
    },
    {
      name: "Innovadores en IA",
      description: "Comunidad para entusiastas de la inteligencia artificial.",
      members: 150,
      isFree: true,
    },
    {
      name: "Desarrolladores Web",
      description: "Red para desarrolladores y diseñadores web.",
      members: 300,
      isFree: false,
    },
    {
      name: "Marketing Digital",
      description: "Comunidad para profesionales del marketing digital.",
      members: 220,
      isFree: true,
    },
  ]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredCommunities = communities.filter((community) =>
    community.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <GlobalHeader />
      <div className="communities-container flex">
        <aside className="sidebar p-4 w-64 bg-gray-800 text-white">
          <nav>
            <ul className="flex flex-col space-y-2 justify-start">
              <li>
                <Link href="/categories" passHref>
                  <span className="sidebar-item flex items-center">
                    <div className="icon-container"><FaFilter /></div>
                    Categorías
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/my-communities" passHref>
                  <span className="sidebar-item flex items-center">
                    <div className="icon-container"><FaUsers /></div>
                    Mis Comunidades
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                  <span className="sidebar-item flex items-center">
                    <div className="icon-container"><FaCalendarAlt /></div>
                    Eventos
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/trending" passHref>
                  <span className="sidebar-item flex items-center">
                    <div className="icon-container"><FaFire /></div>
                    Tendencias
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/most-active" passHref>
                  <span className="sidebar-item flex items-center">
                    <div className="icon-container"><FaArrowUp /></div>
                    Más Activas
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/settings" passHref>
                  <span className="sidebar-item flex items-center">
                    <div className="icon-container"><FaCog /></div>
                    Configuración
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="communities-main flex-1 p-4">
          <div className="search-bar mb-4">
            <input
              type="text"
              placeholder="Buscar comunidades..."
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <div className="community-list">
            {filteredCommunities.map((community, index) => (
              <div
                key={index}
                className="community-item bg-white p-4 shadow rounded-lg mb-4 flex items-center"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{community.name}</h3>
                  <p className="text-gray-700 mb-2">{community.description}</p>
                  <span className="text-gray-500">
                    {community.members} miembros
                  </span>
                  {community.isFree ? (
                    <span className="text-green-600 ml-2">Gratuito</span>
                  ) : (
                    <span className="text-red-600 ml-2">Pago</span>
                  )}
                </div>
                <button className="join-btn bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition ml-auto">
                  Unirse
                </button>
              </div>
            ))}
          </div>
        </main>
        <aside className="sidebar-right p-4 w-64 bg-gray-100">
          <div className="create-community mb-8">
            <h2 className="text-xl font-bold mb-4">Crear Comunidad</h2>
            <button className="create-btn bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition">
              <span className="icon-container">
                <FaPlus />
              </span>
              Crear Nueva Comunidad
            </button>
          </div>
          <div className="recommended mb-8">
            <h2 className="text-xl font-bold mb-4">Comunidades Recomendadas</h2>
            <ul>
              <li>
                <Link href="#">Comunidad de Startups Tecnológicas</Link>
              </li>
              <li>
                <Link href="#">Red de Freelancers Creativos</Link>
              </li>
              <li>
                <Link href="#">Empresas Sociales Innovadoras</Link>
              </li>
              <li>
                <Link href="#">Innovadores en IA</Link>
              </li>
              <li>
                <Link href="#">Desarrolladores Web</Link>
              </li>
              <li>
                <Link href="#">Marketing Digital</Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Communities;
