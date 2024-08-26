import React from 'react';
import './style.css';

export default function Connexion() {
    return (
        <div className="container">
            <div className="firstElement">
                <div className="content">
                    <div className="logo">
                        <img src="./images/logo.png" alt="logo" width="226"/>
                    </div>
                    <h1>Vos outils d’expertise <br />en statistiques</h1>
                    <div className="bg-image">
                        <img src="./images/background1.png" alt="background"  width="280" />
                    </div>
                </div>
            </div>

            <div className="secondElement">
                <div className="content">
                    <div className="form">
                        <h2>Connexion</h2>
                        <form className="global-form">
                            <div className="form-group">
                                <label className="inputemail">E-mail</label>
                                <input type="email" />
                            </div>
                            <div className="form-group">
                                <label className="inputmotdepasse">Mot de passe</label>
                                <input type="password" />
                            </div>
                            <button>Se connecter</button>
                        </form>
                    </div>
                    <h3>Mot de passe oublié? / S’inscrire</h3>
                </div>
            </div>
        </div>
    );
}
