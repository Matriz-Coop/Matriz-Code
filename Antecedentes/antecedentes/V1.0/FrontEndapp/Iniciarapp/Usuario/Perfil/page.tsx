"use client";

import React from "react";
import GlobalHeader from "../../../../components/GlobalHeader";
import Link from "next/link";
import Image from "next/image";
import '../../../../styles/Settingsstyles.css'; // Importar CSS global

const Perfil: React.FC = () => {
  const userInfo = getUserInfo();

  const posts = [
    { content: "¡Construyendo el front-end de Matriz!.", date: "2024-08-31" },
    { content: "Explorando las posibilidades del desarrollo de Dapps con Scaffold Eth2.", date: "2024-08-29" },
  ];

  const projects = [
    { title: "REMBU", description: "Red de Evaluación y Monitoreo de Bosques Urbanos: Servicio DePIN para recolectar información de los bosques urbanos con el fin de favorecer la toma de decisiones.", link: "#" },
    { title: "Matriz", description: "Red Social y servicio de suscripción para ofrecer prestaciones laborales a trabajadores independientes y emprendedores y ofrecer un espacio de colaboración profesional segura, transparente y confiable.", link: "#" },
  ];

  const communities = [
    { name: "Frutero Club", link: "#" },
    { name: "Open Web Academy", link: "#" },
  ];

  return (
    <div className="container">
      <GlobalHeader />
      <div className="profileContainer">
        {/* Encabezado de Perfil */}
        <div className="profileHeader">
          <Image 
            src={userInfo.photo} 
            alt="Foto de Perfil" 
            width={128}
            height={128}
            className="profilePhoto"
          />
          <div className="profileInfo">
            <h1 className="profileName">{userInfo.name}</h1>
            <p className="profileBio">{userInfo.bio}</p>
            <Link href={userInfo.cv} target="_blank" rel="noopener noreferrer">
              Ver CV
            </Link>
          </div>
          <div className="editProfileLink">
            <Link href="/Iniciarapp/Usuario/Perfil/EditarPerfil">
              <button className="editProfileButton">
                Editar Perfil
              </button>
            </Link>
          </div>
        </div>

        {/* Contenido del Perfil */}
        <div className="profileContent">
          {/* Publicaciones */}
          <div className="postsSection">
            <h2 className="sectionTitle">Publicaciones</h2>
            <ul>
              {posts.map((post, index) => (
                <li key={index} className="postItem">
                  <div className="postHeader">
                    <Image 
                      src={userInfo.photo} 
                      alt="User Photo" 
                      width={40}
                      height={40}
                      className="userPhoto" 
                    />
                    <div>
                      <h3 className="postUserName">{userInfo.name}</h3>
                      <span className="postDate">{post.date}</span>
                    </div>
                  </div>
                  <p className="postContent">{post.content}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Proyectos */}
          <div className="projectsSection">
            <h2 className="sectionTitle">Proyectos</h2>
            <ul>
              {projects.map((project, index) => (
                <li key={index} className="projectItem">
                  <h3 className="projectTitle">{project.title}</h3>
                  <p className="projectDescription">{project.description}</p>
                  <Link href={project.link}>
                    Ver Proyecto
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Comunidades */}
          <div className="communitiesSection">
            <h2 className="sectionTitle">Comunidades</h2>
            <ul>
              {communities.map((community, index) => (
                <li key={index} className="communityItem">
                  <Link href={community.link}>
                    {community.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

function getUserInfo() {
  return {
    name: "Valentín Martínez",
    bio: "Investigador y creativo, apasionado por el desarrollo de redes de infraestructura para impacto social y ambiental.",
    photo: "https://i.ibb.co/0KTzdSy/Vale-Foto.png",
    cv: "https://example.com/cv" // Ejemplo de enlace al CV
  };
}

export default Perfil;
