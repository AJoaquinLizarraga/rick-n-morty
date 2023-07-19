const express = require("express")
const server = express()
const {usuarios} = require("../utils/users")

const login = (request, response) =>{

    const { email, password } = request.query

    return (usuarios.some(element => (element.email === email && element.password === password)))
        ? response.status(200).send({ "access": true })
        : response.status(200).send({ "access": false })
}
  

module.exports = { login };