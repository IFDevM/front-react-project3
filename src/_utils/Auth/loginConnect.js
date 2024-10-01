module.exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Recherche de l'utilisateur dans la base de données par son email
      const client = await Client.findOne({ clientEmail: email});
  
      // Vérification de l'existence de l'utilisateur
      if (!client) {
        return res.status(404).json({ message: "L'utilisateur n'existe pas" });
      }
  
      // Vérification du mot de passe
      const passwordMatch = await bcrypt.compare(password, client.clientPassword);
      if (!passwordMatch) {
        return res.status(401).json({ message: "Mot de passe incorrect" });
      }
  
      // Création d'un token JWT
      const token = jwt.sign({ clientId: client._id }, 'your_secret_token_key', { expiresIn: '1h' });
  
      // Envoi de la réponse avec le token et les informations de l'utilisateur
      res.status(200).json({ client: { _id: client._id, clientEmail: client.clientEmail, nom: client.nom, prenom: client.prenom, token: client.token }, token });
  
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };