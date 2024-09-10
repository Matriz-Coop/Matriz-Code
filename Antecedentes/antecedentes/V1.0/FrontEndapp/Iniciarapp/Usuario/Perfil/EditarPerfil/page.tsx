"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const EditarPerfil: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const handleSave = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica para guardar los cambios, como enviar datos a una API
    router.push("/Iniciarapp/Usuario/Perfil");
  };

  return (
    <div className="edit-profile-container">
      <form onSubmit={handleSave}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="save-button">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditarPerfil;
