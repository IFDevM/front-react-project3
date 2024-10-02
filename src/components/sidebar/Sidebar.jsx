import React,{useState} from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGauge, faChartLine, faChartColumn, faTableCells, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import "./Sidebar.css";

function Sidebar(props) {
    const navigate = useNavigate();
    const location = useLocation(); // Utiliser useLocation pour obtenir le chemin actuel
    const [isOpen, setIsOpen] = useState(false);

    /**
     * Fonction pour basculer l'état du menu burger.
     */
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    /**
     * Fonction pour gérer la déconnexion de l'utilisateur.
     */
    const handleLogout = () => {
        // Requête de déconnexion
        const execAsync = async () => {
            try {
                navigate("/login");
            } catch (error) {
                const errorData = error?.response;
                if (errorData) console.log(errorData);
            }
        };
        execAsync();
    };

    /**
     * Fonction pour vérifier si un lien est actif.
     * @param {string} path - Le chemin du lien à vérifier.
     * @returns {boolean} - True si le lien est actif, sinon False.
     */
    const isLinkActive = (path) => location.pathname === path;

    return (
        <>
            <div className="nav-burger-menu">
                <div className="burger-icon" onClick={toggleMenu}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>

            <div className={`menu-admin ${isOpen ? "open" : ""}`}>

                <div className="logo">
                    <img src="./images/logo_mobileOff.png" alt="logo" width="100"/>
                </div>

                <ul className="ul-admin">

                    <li>
                        <Link
                            to="/"
                            className={`link-without-decoration li-admin ${isLinkActive("/") ? "active-link" : ""}`}
                        >
                            <span classname="icon-side-bar"><FontAwesomeIcon icon={faGauge} /></span>
                            Exploration des données
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/pivot"
                            className={`link-without-decoration li-admin ${isLinkActive("/pivot") ? "active-link" : ""}`}
                        >
                            <span classname="icon-side-bar"><FontAwesomeIcon icon={faTableCells} /></span>
                            Pivot
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/histogram"
                            className={`link-without-decoration li-admin ${isLinkActive("/histogram") ? "active-link" : ""}`}
                        >
                            <span classname="icon-side-bar"><FontAwesomeIcon icon={faChartColumn} /></span>
                           Histogramme
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/graphdot"
                            className={`link-without-decoration li-admin ${isLinkActive("/graphdot") ? "active-link" : ""}`}
                        >
                            <span classname="icon-side-bar"><FontAwesomeIcon icon={faChartLine} /></span>
                            Graphique à point
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/lineplot"
                            className={`link-without-decoration li-admin ${isLinkActive("/lineplot") ? "active-link" : ""}`}
                        >
                            <span classname="icon-side-bar"><FontAwesomeIcon icon={faChartLine} /> </span>
                            Line plot
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/linecurvy"
                            className={`link-without-decoration li-admin ${isLinkActive("/linecurvy") ? "active-link" : ""}`}
                        >
                            <span classname="icon-side-bar"><FontAwesomeIcon icon={faChartLine} /></span>
                            Diagramme à courbe
                        </Link>
                    </li>

                    <div>
                        <div className='br'>

                        </div>
                        <li>
                            <Link to={"/login"} onClick={handleLogout}>
                                <span classname="icon-side-bar"><FontAwesomeIcon icon={faArrowRightFromBracket} /></span>
                                Déconnexion
                            </Link>
                        </li>
                    </div >
                </ul>
            </div>
        </>
    );
}

export default Sidebar;
