const express = require("express");

const router = express.Router()
<<<<<<< HEAD
const route = () => {
    const controller = require("./controller")()

    router.post('/register', controller.register)
    router.post('login', controller.login)
=======
const authRoute = () => {
    const controller = require("./controller")()

    router.post('/register',controller.register);
    router.post('/login',controller.login)
>>>>>>> 1321adb7c0090df54b43f3af425ee8a0a786047b
    return router
}

module.exports = authRoute
