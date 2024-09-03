import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Connexion from "../pages/connexion/Connexion";
import Dashboard from "../pages/dashboard/Dashboard";
import Pivot from "../pages/pivot/Pivot";
import MainLayout from "../pages/MainLayout";
import Histogram from "../pages/histogram/Histogram";
import GraphDot from "../pages/graphdot/GraphDot";
import LinePlot from "../pages/lineplot/LinePlot";
import LineCurvy from "../pages/linecurvy/LineCurvy";

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
            },
            // Route pour afficher la page Pivot
            {
                path: "histogram",  // Chemin de l'URL pour la page pivot "/pivot"
                element: <Histogram/>  // Affiche le composant Pivot lorsque l'URL correspond à "/pivot"
            },
            // Route pour afficher la page Pivot
            {
                path: "graphdot",  // Chemin de l'URL pour la page pivot "/pivot"
                element: <GraphDot/>  // Affiche le composant Pivot lorsque l'URL correspond à "/pivot"
            },
            // Route pour afficher la page Pivot
            {
                path: "lineplot",  // Chemin de l'URL pour la page pivot "/pivot"
                element: <LinePlot/>  // Affiche le composant Pivot lorsque l'URL correspond à "/pivot"
            },
            // Route pour afficher la page Pivot
            {
                path: "linecurvy",  // Chemin de l'URL pour la page pivot "/pivot"
                element: <LineCurvy/>  // Affiche le composant Pivot lorsque l'URL correspond à "/pivot"
            }
        ]
    }
]);

export default routes;  // Exporte les routes configurées
