import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './SignUp.css';

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState('');

    // Schéma de validation pour le formulaire de signup
    const schema = Yup.object().shape({
        civilite: Yup.string().required("Veuillez entrer votre civilité"),
        nom: Yup.string().required("Veuillez entrer votre nom"),
        prenom: Yup.string().required("Veuillez entrer votre prénom"),
        email: Yup.string().email("Email invalide").required("Veuillez entrer votre email"),
        password: Yup.string().required("Veuillez entrer un mot de passe").min(6, "Le mot de passe doit contenir au moins 6 caractères"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Les mots de passe doivent correspondre")
            .required("Veuillez confirmer votre mot de passe"),
    });

    // Gestionnaire de soumission du formulaire
    const handleSubmit = async (values) => {
        try {
            const response = await axios.post('https://hathyre-server-api.onrender.com/api/add/client', {
               civilite: values.civilite,
                nom: values.nom,
                prenom: values.prenom,
                clientEmail: values.email,
                clientPassword: values.password,
            });
            console.log('Utilisateur inscrit', response.data);
        } catch (error) {
            console.error("Erreur lors de l'inscription :", error.response?.data || error);
            setErrorMessage(error.response?.data?.message || "Erreur lors de l'inscription");
        }
    };

    return (
        <>
            {/* Partie Desktop */}
            <div className="containerDesktopOff">
                <div className="firstElement">
                    <div className="content">
                        <div className="logo">
                            <img src="./images/logo.png" alt="logo" width="190" />
                        </div>
                        <h1>Vos outils d’expertise <br />en statistiques</h1>
                    </div>
                    <div className="bg-imageDesktopOff">
                        <img src="./images/background_x2_desktopOff.png" alt="background" width="400" />
                    </div>
                </div>

                <div className="secondElementSignUp">
                    <div className="content">
                        <div className="form">
                            <h2 className="titleSignUp">SIGN UP</h2>
                            <Formik
                                initialValues={{ civilite: '', nom: '', prenom: '', email: '', password: '', confirmPassword: '' }}
                                validationSchema={schema}
                                onSubmit={handleSubmit}
                            >
                                {() => (
                                    <Form className="global-form">
                                        <div className="box-form-group">
                                            <label htmlFor="civilite">Civilité</label>
                                            <Field name="sexe" as="select" className="form-control">
                                                <option value="" label="Sélectionnez votre civilité" />
                                                <option value="Monsieur" label="Monsieur" />
                                                <option value="Madame" label="Madame" />
                                            </Field>
                                            <ErrorMessage name="civilite" component="div" className="error" />
                                        </div>
                                        <div className="box-form-group">
                                            <label className="labelNomPrenom" htmlFor="nom">Nom</label>
                                            <Field name="nom" type="text" className="form-control" />
                                            <ErrorMessage name="nom" component="div" className="error" />
                                        </div>
                                        <div className="box-form-group">
                                            <label className="labelNomPrenom" htmlFor="prenom">Prénom</label>
                                            <Field name="prenom" type="text" className="form-control" />
                                            <ErrorMessage name="prenom" component="div" className="error" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">E-mail</label>
                                            <Field name="email" type="email" className="form-control" />
                                            <ErrorMessage name="email" component="div" className="error" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Mot de passe</label>
                                            <Field name="clientPassword" type="password" className="form-control" />
                                            <ErrorMessage name="password" component="div" className="error" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
                                            <Field name="confirmPassword" type="password" className="form-control" />
                                            <ErrorMessage name="confirmPassword" component="div" className="error" />
                                        </div>
                                        <button type="submit" className="btn-connect">S'inscrire</button>
                                    </Form>
                                )}
                            </Formik>
                            {errorMessage && <div className="error-message">{errorMessage}</div>}
                        </div>
                    </div>
                </div>
            </div>

            {/* Partie Mobile */}
            <div className="MobileOff">
                <div className="box-Element">
                    <div className="box-content">
                        <div className="logoDesktopOff">
                            <img src="./images/logo.png" alt="logo" width="150" />
                        </div>
                        <h1>Vos outils d’expertise <br />en statistiques</h1>
                    </div>

                    <div className="box-content">
                        <div className="box-form">
                            <h2 className="titleSignUp">SIGN UP</h2>
                            <Formik
                                initialValues={{ civilite: '', nom: '', prenom: '', email: '', password: '', confirmPassword: '' }}
                                validationSchema={schema}
                                onSubmit={handleSubmit}
                            >
                                {() => (
                                    <Form className="box-global-form">
                                        <div className="box-form-group">
                                            <label htmlFor="civilite">Civilité</label>
                                            <Field name="civilite" as="select" className="form-control">
                                                <option value="" label="Sélectionnez votre civilité" />
                                                <option value="Monsieur" label="Monsieur" />
                                                <option value="Madame" label="Madame" />
                                            </Field>
                                            <ErrorMessage name="civilite" component="div" className="error" />
                                        </div>
                                        <div className="box-form-group">
                                            <label htmlFor="nom">Nom</label>
                                            <Field name="nom" type="text" className="form-control" />
                                            <ErrorMessage name="nom" component="div" className="error" />
                                        </div>
                                        <div className="box-form-group">
                                            <label htmlFor="prenom">Prénom</label>
                                            <Field name="prenom" type="text" className="form-control" />
                                            <ErrorMessage name="prenom" component="div" className="error" />
                                        </div>
                                        <div className="box-form-group">
                                            <label htmlFor="email">E-mail</label>
                                            <Field name="email" type="email" className="form-control" />
                                            <ErrorMessage name="email" component="div" className="error" />
                                        </div>
                                        <div className="box-form-group">
                                            <label htmlFor="password">Mot de passe</label>
                                            <Field name="password" type="password" className="form-control" />
                                            <ErrorMessage name="password" component="div" className="error" />
                                        </div>
                                        <div className="box-form-group">
                                            <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
                                            <Field name="confirmPassword" type="password" className="form-control" />
                                            <ErrorMessage name="confirmPassword" component="div" className="error" />
                                        </div>
                                        <button type="submit" className="btn-connect">S'inscrire</button>
                                    </Form>
                                )}
                            </Formik>
                            {errorMessage && <div className="error-message">{errorMessage}</div>}
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

export default SignUp;
