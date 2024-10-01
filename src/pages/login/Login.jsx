import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const initials = { username: "", password: "" };

    const schema = Yup.object().shape({
        username: Yup.string().required("Veuillez saisir votre pseudo"),
        password: Yup.string().required("Veuillez saisir un mot de passe"),
    });

    // Gestionnaire de soumission du formulaire
    const handleSubmit = async (values) => {
        try {
            const response = await axios.post('https://hathyre-server-api.onrender.com/api/login/client', {
                email: values.username, // Utiliser le bon nom pour l'email
                password: values.password
            });

            console.log(response.data);

            console.log('Client connecté');
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('id', response.data.client._id);

            navigate('/');
        } catch (error) {
            console.error("Erreur lors de la connexion :", error);
            setErrorMessage("Pseudo ou mot de passe incorrect");
        }
    };

    return (
        <>
            {/* Partie pour les grandes résolutions (Desktop) */}
            <div className="containerDesktopOff">
                <div className="firstElement">
                    <div className="content">
                        <div className="logo">
                            <img src="./images/logo.png" alt="logo" width="90" />
                        </div>
                        <h1>Vos outils d’expertise <br />en statistiques</h1>
                    </div>
                    <div className="bg-imageDesktopOff">
                        <img src="./images/background_x2_desktopOff.png" alt="background" width="400" />
                    </div>
                </div>

                <div className="secondElement">
                    <div className="content">
                        <div className="form">
                            <h2>Connexion</h2>
                            <Formik
                                initialValues={initials}
                                validationSchema={schema}
                                onSubmit={handleSubmit} // Correctement relié à onSubmit
                            >
                                {() => (
                                    <Form className="global-form"> {/* Utilisation du composant Form de Formik */}
                                        <div className="form-group">
                                            <label htmlFor="email">E-mail</label>
                                            <Field name="username" type="text" className="form-control" />
                                            <ErrorMessage name="username" component="div" className="error" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Mot de passe</label>
                                            <Field name="password" type="password" className="form-control" />
                                            <ErrorMessage name="password" component="div" className="error" />
                                        </div>
                                        <button type="submit" className="btn-connect">Se connecter</button>
                                    </Form>
                                )}
                            </Formik>
                            {errorMessage && <div className="error-message">{errorMessage}</div>}
                        </div>
                        <div className="text-center">
                            <h3>Mot de passe oublié?/ <Link to={"/signup"} className="smallText">S'inscrire</Link></h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Partie pour les petites résolutions (Mobile) */}
            <div className="MobileOff">
                <div className="box-Element">
                    <div className="box-content">
                        <div className="logoDesktopOff">
                            <img src="./images/logo_mobileOff.png" alt="logo" width="90" />
                        </div>
                        <h1>Vos outils d’expertise <br />en statistiques</h1>
                    </div>

                    <div className="box-content">
                        <div className="box-form">
                            <h2>Connexion</h2>
                            <Formik
                                initialValues={initials}
                                validationSchema={schema}
                                onSubmit={handleSubmit}
                            >
                                {() => (
                                    <Form className="global-form">
                                        <div className="form-group">
                                            <label htmlFor="email">E-mail</label>
                                            <Field name="username" type="text" className="form-control" />
                                            <ErrorMessage name="username" component="div" className="error" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Mot de passe</label>
                                            <Field name="password" type="password" className="form-control" />
                                            <ErrorMessage name="password" component="div" className="error" />
                                        </div>
                                        <button type="submit" className="btn-connect">Se connecter</button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                        <div className="text-center">
                            <h3>Mot de passe oublié?/ <Link to={"/signup"} className="smallText">S'inscrire</Link></h3>
                        </div>
                    </div>
                </div>
                <div className="bg-imageMobileOff">
                    <img src="./images/background_x2_mobileOff.png" alt="background" width="300" />
                </div>
            </div>
        </>
    );
}

export default Login;
