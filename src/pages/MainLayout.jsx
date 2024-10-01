import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar.jsx";

/**
 * Le composant MainLayout représente la mise en page pour les pages côté Main.
 * Il inclut une barre de navigation, une zone de contenu principal, et un pied de page avec des informations sur les droits d'auteur.
 * 
 * @component
 * @returns {JSX.Element} Le rendu du composant MainLayout.
 */
const MainLayout = () => {
   return (
        <div>
            <header>
                <Sidebar/> {/* Barre de navigation pour les pages Main */}
            </header>
            <main>
                <Outlet /> {/* Rendu des composants enfants en fonction de la route actuelle */}
            </main>
        </div>
   );
};

export default MainLayout;
