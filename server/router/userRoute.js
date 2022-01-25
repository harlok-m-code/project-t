const userController = require('../controller/userController');
const { check } = require('express-validator');
const { Router } = require('express');

const router = Router();

router.post('/registration',
[
    check("email", "Содержит недопустимые символы !").isEmail(),
    check("name", "Не должно быть пустым!").notEmpty(),
    check("password", "Должно быть символов от 6 до 12").isLength({ min:6, max:12 })
] ,
userController.registration)

router.post('/login', userController.login)

module.exports = router;