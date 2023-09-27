const express = require('express');
const router = express.Router();
const {add, create, edit, update, remove, destroy, list, news , recomended, detail} = require('../controllers/moviesController');
const moviesAddValidator = require('../../validation/moviesAddValidator');
const moviesEditValidator = require('../../validation/moviesEditValidator');

router.get('/movies', list);
router.get('/movies/new', news);
router.get('/movies/recommended', recomended);
router.get('/movies/detail/:id', detail);


//Rutas exigidas para la creación del CRUD
router.get('/movies/add', add);
router.post('/movies/create', moviesAddValidator, create);
router.get('/movies/edit/:id', edit);
router.put('/movies/update/:id', moviesEditValidator, update);
router.get('/movies/delete/:id', remove);
router.delete('/movies/delete/:id', destroy);

module.exports = router;