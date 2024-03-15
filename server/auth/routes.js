const express = require("express");

const router = express.Router()
const route = () => {
    const controller = require("./controller")()

    router.post('/register', controller.register)
    router.post('login', controller.login)
    return router
}

module.exports = route