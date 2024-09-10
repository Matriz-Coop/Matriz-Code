"use client";

import React, { useState } from "react";
import GlobalHeader from "../../../../components/GlobalHeader";
import Link from "next/link";
import { FaThumbsUp, FaComment, FaShare, FaImage, FaLink, FaPoll, FaSearch, FaList, FaUsers, FaTrophy } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import Image from "next/image";
import styles from "./Feed.module.css";

const Feed: React.FC = () => {
  const [posts, setPosts] = useState([
    {
      username: "Alex Soto",
      content: "Los trabajadores se merecen seguridad laboral!",
      date: "2024-08-31",
      photo: "",
      image: "",
      url: "",
      poll: "",
      likes: 10,
      comments: [{ username: "Vale", content: "De acuerdo hermano! Qué chido que existe Matriz!", date: "2023-08-31" }],
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleLike = (index: number) => {
    const newPosts = [...posts];
    newPosts[index].likes += 1;
    setPosts(newPosts);
  };

  const handleComment = (index: number, comment: string) => {
    const newPosts = [...posts];
    newPosts[index].comments.push({
      username: "You",
      content: comment,
      date: new Date().toISOString().split("T")[0],
    });
    setPosts(newPosts);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredPosts = posts.filter((post) =>
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <GlobalHeader />
      <div className={styles.feedContainer}>
        <aside className={styles.sidebar}>
          <nav>
            <ul>
              <li>
                <Link href="/stats">
                  <div className={styles.sidebarItem}>
                    <div className={styles.iconContainer}>
                      <IoMdPerson />
                    </div>
                    Estadísticas
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/search">
                  <div className={styles.sidebarItem}>
                    <div className={styles.iconContainer}>
                      <FaSearch />
                    </div>
                    Buscar perfiles
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/categories">
                  <div className={styles.sidebarItem}>
                    <div className={styles.iconContainer}>
                      <FaList />
                    </div>
                    Categorías
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/communities">
                  <div className={styles.sidebarItem}>
                    <div className={styles.iconContainer}>
                      <FaUsers />
                    </div>
                    Comunidades
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/achievements">
                  <div className={styles.sidebarItem}>
                    <div className={styles.iconContainer}>
                      <FaTrophy />
                    </div>
                    Reconocimientos
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <main className={styles.feedMain}>
          <div className={styles.postBox}>
            <textarea 
              placeholder="¿Qué tienes en mente?" 
              className={styles.textarea}
            />
            <div className={styles.postAttachments}>
              <label className={styles.iconButton}>
                <div className={styles.iconContainer}>
                  <FaImage title="Añadir imagen" />
                </div>
                <input type="file" accept="image/*" className={styles.hidden} />
              </label>
              <label className={styles.iconButton}>
                <div className={styles.iconContainer}>
                  <FaLink title="Añadir URL" />
                </div>
                <input type="text" placeholder="URL" className={styles.hidden} />
              </label>
              <label className={styles.iconButton}>
                <div className={styles.iconContainer}>
                  <FaPoll title="Añadir encuesta" />
                </div>
                <input type="text" placeholder="Pregunta de encuesta" className={styles.hidden} />
              </label>
            </div>
            <button className={styles.publishButton}>
              Publicar
            </button>
          </div>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Buscar publicaciones..."
              className={styles.searchInput}
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <div className={styles.posts}>
            {filteredPosts.map((post, index) => (
              <div className={styles.post} key={index}>
                <div className={styles.postHeader}>
                  <Image 
                    src={post.photo || "https://i.ibb.co/2cYxh4j/Alex-Soto-Avatar.jpg"} 
                    alt="Avatar" 
                    width={50}
                    height={50}
                    className={styles.avatar} 
                  />
                  <h3 className={styles.username}>{post.username}</h3>
                  <span className={styles.date}>{post.date}</span>
                </div>
                {post.image && <Image src={post.image} alt="Post content" width={600} height={400} className={styles.postImage} />}
                <p className={styles.postContent}>{post.content}</p>
                {post.url && <div className={styles.postLink}>{post.url}</div>}
                {post.poll && <div className={styles.poll}>{post.poll}</div>}
                <div className={styles.postActions}>
                  <button onClick={() => handleLike(index)} className={styles.actionButton}>
                    <div className={styles.iconContainer}>
                      <FaThumbsUp />
                    </div>
                    {post.likes}
                  </button>
                  <button className={styles.actionButton}>
                    <div className={styles.iconContainer}>
                      <FaComment />
                    </div>
                    {post.comments.length}
                  </button>
                  <button className={styles.actionButton}>
                    <div className={styles.iconContainer}>
                      <FaShare />
                    </div>
                    Compartir
                  </button>
                </div>
                <div className={styles.comments}>
                  {post.comments.map((comment, i) => (
                    <div className={styles.comment} key={i}>
                      <h4 className={styles.commentUsername}>{comment.username}</h4>
                      <p className={styles.commentContent}>{comment.content}</p>
                      <span className={styles.commentDate}>{comment.date}</span>
                    </div>
                  ))}
                  <textarea 
                    placeholder="Escribe un comentario..." 
                    className={styles.commentTextarea}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleComment(index, e.currentTarget.value);
                        e.currentTarget.value = "";
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </main>
        <aside className={styles.sidebarRight}>
          <div className={styles.recommended}>
            <h2 className={styles.sectionTitle}>Comunidades Recomendadas</h2>
            <ul>
              <li><Link href="#">Comunidad de Startups Tecnológicas</Link></li>
              <li><Link href="#">Red de Freelancers Creativos</Link></li>
              <li><Link href="#">Empresas Sociales Innovadoras</Link></li>
            </ul>
          </div>
          <div className={styles.trending}>
            <h2 className={styles.sectionTitle}>Eventos Próximos</h2>
            <ul>
              <li><Link href="#">Taller de Marketing Digital</Link></li>
              <li><Link href="#">Networking para Emprendedores</Link></li>
              <li><Link href="#">Webinar: Financiamiento para Startups</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Feed;
