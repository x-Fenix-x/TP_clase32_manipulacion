const { check } = require('express-validator');

module.exports = [
    check('title')
        .notEmpty()
        .withMessage('El titulo es obligatorio')
        .bail()
        .isLength({
            min: 1,
            max: 25,
        })
        .withMessage('Debe tener entre 1 y 25 caracteres'),
    check('rating')
        .notEmpty()
        .withMessage('Ingrese un rating')
        .isFloat({
            gt: 1,
        })
        .withMessage('Debe ser positivo y puede incluir decimal'),
    check('awards')
        .notEmpty()
        .withMessage('Ingrese número de premios')
        .isInt({
            gt: 0,
        })
        .withMessage('Debe ser positivo o coloque 0 si lo amerita'),
    check('release_date')
    .notEmpty()
    .withMessage('Debe seleccionar una fecha'),
    check('length')
        .notEmpty()
        .withMessage('Ingrese duración en minutos')
        .isInt({
            gt: 0,
        })
        .withMessage('Debe ser un número entero y positivo'),
];
