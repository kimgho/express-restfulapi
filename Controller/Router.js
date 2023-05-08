const express = require('express')
const router = express.Router()
const join  = require('./Controller.join')
const login = require('./Controller.login')
const Card = require('./Controller.Card')
//이정표
router.use('/join',join)
router.use('/login',login)
router.use('/Card',Card)

module.exports  = router