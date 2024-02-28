# checkReq - middleware pour Node.js
checkReq, permet de vérifier si un ou plusieurs champs sont remplis pour les req.params ou req.body


## installation
Placer le fichier checkReq.js dans le dossier middlewares


## utilisation
Dans le fichier, ajouter sur la première ligne
```
const { checkReq } = require('./checkReq')
```

Exemple d'utilisation
```
// vérifie si les champs sont remplis pour req.body
if(!checkReq(req.body, ['titre', 'code_postal', 'ville', 'description', 'token' ])) return res.json({ result: false, error: 'Champs vide(s) ou manquant(s)' })
```

```
// vérifie si les champs sont remplis pour req.params
if(!checkReq(req.params, ['token'])) return res.json({ result: false, error: 'Champs vide(s) ou manquant(s)' })
```
