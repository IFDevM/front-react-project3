import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('formulaire soumis');
        console.log('email, password');
    }

    return (
        <>
            <div className="containerDesktopOff">
                <div className="firstElement">
                    <div className="content">
                        <div className="logo">
                            <img src="./images/logo.png" alt="logo" width="80" />
                        </div>
                        <h4 style={{color: "white", fontSize: "30px"}}>Vos outils d’expertise <br />en statistiques</h4>
                    </div>
                    <div className="bg-imageDesktopOff">
                        <img src="./images/background_x2_desktopOff.png" alt="background" width="400" />
                    </div>
                </div>
                <div className="secondElement">
                    <div className="content">
                        <div className="form">
                            <h2>Connexion</h2>
                            <form className="global-form" onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Mot de passe</label>
                                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                                </div>
                                <button className="btn-connect">Se connecter</button>
                            </form>
                        </div>
                        <h3>Mot de passe oublié? / S’inscrire</h3>
                    </div>
                </div>
            </div>

            <div className="MobileOff">
                <div className="box-Element">
                    <div className="box-content">
                        <div className="logoDesktopOff">
                            <img src="./images/logo.png" alt="logo" width="80" />
                        </div>
                        <h4 style={{color: "white", fontSize: "30px"}}>Vos outils d’expertise <br />en statistiques</h4>
                    </div>
              
                    <div className="box-content">
                        <div className="box-form">
                            <h2>Connexion</h2>
                            <form className="box-global-form" onSubmit={onSubmit}>
                                <div className="box-form-group">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="box-form-group">
                                    <label htmlFor="password">Mot de passe</label>
                                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                                </div>
                                <button className="btn-connect">Se connecter</button>
                            </form>
                        </div>
                        <h3>Mot de passe oublié? / S’inscrire</h3>
                    </div>
                </div>
                <div className="bg-imageMobileOff">
                    <img src="./images/background_x2_mobileOff.png" alt="background" width="400" />
                </div>
            </div>
        </>
    );
}

export default Login;
