const express = require('express')

// Configuration de l'application Express
const app = express()
app.use(express.json())

// Route de test
app.get('/', (req, res) => {
  res.send('Backend en Express qui communique avec une base de données')
})

// Route de création d'un nouvel objet dans la base de données
app.get('/hello', (req, res) => {
  res.send('Hello World')
})

// Démarrage du serveur
const port = 3000
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`)
})
