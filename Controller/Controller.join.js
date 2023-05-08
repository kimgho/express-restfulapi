const express = require('express')
const auth = require('../Controller/auth')
const router = express.Router()
module.exports = router
router.get('/', (req, res) => {
     res.send('join des')
})
router.post('/', (req, res) => {
     const user_info = req.body;
     auth.signUp(user_info)
          .then(() => {
               res.send({
                    "msg": "nice join"
               }).status(400)
          })
          .catch(() => {
               res.send({
                    "msg": "bad join"
               }).status(404)
          })
})