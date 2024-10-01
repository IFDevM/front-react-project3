import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './SignUp.css';

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false); // Loading state

    // Schéma de validation pour le formulaire de signup
    const schema = Yup.object().shape({
        civilite: Yup.string().required("Veuillez entrer votre civilité"),
        nom: Yup.string().required("Veuillez entrer votre nom"),
        prenom: Yup.string().required("Veuillez entrer votre prénom"),
        email: Yup.string().email("Email invalide").required("Veuillez entrer votre email"),
        clientPassword: Yup.string().required("Veuillez entrer un mot de passe").min(6, "Le mot de passe doit contenir au moins 6 caractères"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('clientPassword'), null], "Les mots de passe doivent correspondre")
            .required("Veuillez confirmer votre mot de passe"),
    });

    // Gestionnaire de soumission du formulaire
    const handleSubmit = async (values, { resetForm }) => {
        setLoading(true); // Start loading
        setErrorMessage(''); // Clear error message before new submission

        try {
            const response = await axios.post('https://hathyre-server-api.onrender.com/api/add/client', {
                civilite: values.civilite,
                nom: values.nom,
                prenom: values.prenom,
                clientEmail: values.email,
                clientPassword: values.clientPassword, // Corrected field name
            });
            console.log('Utilisateur inscrit', response.data);
            resetForm(); // Optionally reset the form after successful submission
        } catch (error) {
            console.error("Erreur lors de l'inscription :", error.response?.data || error);
            setErrorMessage(error.response?.data?.message || "Erreur lors de l'inscription");
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <>
            {/* Partie Desktop */}
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

                <div className="secondElementSignUp">
                    <div className="contentSignUp">
                        <div className="formsignUp">
                            <h2 className="titleSignUp">SIGN UP</h2>
                            <Formik
                                initialValues={{ civilite: '', nom: '', prenom: '', email: '', clientPassword: '', confirmPassword: '' }}
                                validationSchema={schema}
                                onSubmit={handleSubmit}
                            >
                                {() => (
                                    <Form className="global-form">
                                        <div className="boxForm">
                                            <label  htmlFor="civilite">Civilité</label>
                                            <Field name="civilite" as="select" className="form-controlCivilite">
                                                <option value="" label="Sélectionnez votre civilité" />
                                                <option value="Monsieur" label="Monsieur" />
                                                <option value="Madame" label="Madame" />
                                            </Field>
                                            <ErrorMessage name="civilite" component="div" className="error" />
                                        </div>
                                        <div className="box-form-group">
                                            <label  htmlFor="nom">Nom</label>
                                            <Field name="nom" type="text" className="form-control" />
                                            <ErrorMessage name="nom" component="div" className="error" />
                                        </div>
                                        <div className="box-form-group">
                                            <label  htmlFor="prenom">Prénom</label>
                                            <Field name="prenom" type="text" className="form-control" />
                                            <ErrorMessage name="prenom" component="div" className="error" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">E-mail</label>
                                            <Field name="email" type="email" className="form-control" />
                                            <ErrorMessage name="email" component="div" className="error" />
                                        </div>
                                        <div className="box-form-group">
                                            <label htmlFor="clientPassword">Mot de passe</label>
                                            <Field name="clientPassword" type="password" className="form-control" />
                                            <ErrorMessage name="clientPassword" component="div" className="error" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
                                            <Field name="confirmPassword" type="password" className="form-control" />
                                            <ErrorMessage name="confirmPassword" component="div" className="error" />
                                        </div>
                                        <button type="submit" className="btn-signUp" disabled={loading}>
                                            {loading ? "Chargement..." : "S'inscrire"}
                                        </button>
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
                            <img src="./images/logo_mobileOff.png" alt="logo" width="90" />
                        </div>
                        <h1>Vos outils d’expertise <br />en statistiques</h1>
                    </div>

                    <div className="box-content">
                        <div className="box-form">
                            <h2 className="titleSignUp">SIGN UP</h2>
                            <Formik
                                initialValues={{ civilite: '', nom: '', prenom: '', email: '', clientPassword: '', confirmPassword: '' }}
                                validationSchema={schema}
                                onSubmit={handleSubmit}
                            >
                                {() => (
                                    <Form className="box-global-form">
                                        <div className="box-form-group">
                                            <label htmlFor="civilite">Civilité</label>
                                            <Field name="civilite" as="select" className="form-controlCivilite">
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
                                            <label htmlFor="clientPassword">Mot de passe</label>
                                            <Field name="clientPassword" type="password" className="form-control" />
                                            <ErrorMessage name="clientPassword" component="div" className="error" />
                                        </div>
                                        <div className="box-form-group">
                                            <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
                                            <Field name="confirmPassword" type="password" className="form-control" />
                                            <ErrorMessage name="confirmPassword" component="div" className="error" />
                                        </div>
                                        <button type="submit" className="btn-connect" disabled={loading}>
                                            {loading ? "Chargement..." : "S'inscrire"}
                                        </button>
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
