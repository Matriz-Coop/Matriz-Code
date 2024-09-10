import React from 'react';
import GlobalHeader from '../../../../components/GlobalHeader';
import Link from 'next/link';
import { FaUserCog, FaEnvelope, FaBell, FaCalendarAlt, FaLock } from 'react-icons/fa';
import "../../../../styles/settingsstyles.css";
const SettingsPage: React.FC = () => {
    return (
        <div className="settings-page">
            {/* Header Global */}
            <GlobalHeader />

            {/* Sidebar */}
            <aside className="sidebar">
                <h2>Configuración</h2>
                <ul>
                    <li>
                        <Link href="/ajustes/perfil" passHref>
                            <span className="sidebar-item">
                                <div className="icon-container"><FaUserCog /></div> Perfil
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/ajustes/notificaciones" passHref>
                            <span className="sidebar-item">
                                <div className="icon-container"><FaBell /></div> Notificaciones
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/ajustes/mensajes" passHref>
                            <span className="sidebar-item">
                                <div className="icon-container"><FaEnvelope /></div> Mensajes
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/ajustes/seguridad" passHref>
                            <span className="sidebar-item">
                                <div className="icon-container"><FaLock /></div> Seguridad
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/ajustes/eventos" passHref>
                            <span className="sidebar-item">
                                <div className="icon-container"><FaCalendarAlt /></div> Eventos
                            </span>
                        </Link>
                    </li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="settings-main">
                <section className="settings-content">
                    <h2>Perfil</h2>
                    <p>Ajusta tu información personal, foto de perfil y preferencias.</p>
                    <Link href="/ajustes/perfil" passHref>
                        <span className="btn-primary">Editar Perfil</span>
                    </Link>
                </section>

                <section className="settings-content">
                    <h2>Notificaciones</h2>
                    <p>Configura tus preferencias de notificación.</p>
                    <Link href="/ajustes/notificaciones" passHref>
                        <span className="btn-primary">Configurar Notificaciones</span>
                    </Link>
                </section>

                <section className="settings-content">
                    <h2>Mensajes</h2>
                    <p>Gestiona tu bandeja de entrada y configuraciones de mensajes.</p>
                    <Link href="/ajustes/mensajes" passHref>
                        <span className="btn-primary">Ver Mensajes</span>
                    </Link>
                </section>

                <section className="settings-content">
                    <h2>Seguridad</h2>
                    <p>Revisa y actualiza la configuración de seguridad.</p>
                    <Link href="/ajustes/seguridad" passHref>
                        <span className="btn-primary">Configurar Seguridad</span>
                    </Link>
                </section>

                <section className="settings-content">
                    <h2>Eventos</h2>
                    <p>Consulta y organiza tus eventos.</p>
                    <Link href="/ajustes/eventos" passHref>
                        <span className="btn-primary">Ver Eventos</span>
                    </Link>
                </section>

                <section className="settings-content">
                    <h2>Cuenta</h2>
                    <p>Gestiona la configuración de tu cuenta, como tus datos personales y preferencias.</p>
                    <Link href="/ajustes/cuenta" passHref>
                        <span className="btn-primary">Gestionar Cuenta</span>
                    </Link>
                </section>

                <section className="settings-content">
                    <h2>Privacidad</h2>
                    <p>Ajusta tus preferencias de privacidad y seguridad.</p>
                    <Link href="/ajustes/privacidad" passHref>
                        <span className="btn-primary">Configurar Privacidad</span>
                    </Link>
                </section>
            </main>
        </div>
    );
};

export default SettingsPage;
