import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Connexion from "../pages/connexion/Connexion";
import Dashboard from "../pages/dashboard/Dashboard";
import Pivot from "../pages/pivot/Pivot";
import MainLayout from "../pages/MainLayout";

// Création des routes avec createBrowserRouter
const routes = createBrowserRouter([
    // Route pour l'inscription
    {
        path: "/signup",  // Chemin de l'URL "/signup"
        element: <Connexion />  // Affiche le composant Connexion pour l'inscription
    },
    // Route pour la connexion
    {
        path: "/login",  // Chemin de l'URL "/login"
        element: <Connexion />  // Affiche le composant Connexion pour la connexion
    },
    // Routes pour les utilisateurs
    {
        path: "/",  // Chemin de l'URL racine "/"
        element: <MainLayout />,  // Layout principal pour les routes de l'application
        children: [
            // Route par défaut pour le tableau de bord
            {
                path: "",  // Chemin de l'URL (sans extension)
                element: <Dashboard />  // Affiche le composant Dashboard lorsque l'URL correspond à "/"
            },
            // Route pour afficher la page Pivot
            {
                path: "pivot",  // Chemin de l'URL pour la page pivot "/pivot"
                element: <Pivot />  // Affiche le composant Pivot lorsque l'URL correspond à "/pivot"
            }
        ]
    }
]);

export default routes;  // Exporte les routes configurées
