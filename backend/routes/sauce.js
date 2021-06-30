const express = require('express'); //importation d'express (après l'avoir installer avec la console)
const router = express.Router();    //on crée un router avec la méthode d'express

const sauceCtrl = require('../controllers/sauce');  //on importe les routes controllers
const auth = require('../middleware/auth'); //on importe le middleware pour l'ajouter sur les routes que l'on veut protéger
const multer = require('../middleware/multer-config'); //on importe le middleware pour le téléchargement des images, pour la route post quand on crée un nouvel objet

router.post('/', auth, multer, sauceCtrl.createSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.get('/', auth, sauceCtrl.getAllSauces);

module.exports = router;  //on exporte le router