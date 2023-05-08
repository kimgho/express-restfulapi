const express  = require('express')
const router = express.Router()
module.exports = router
router.get('/',(req,res)=>{
    const sendData = {
        "State": "400",
        "msg": "Succeed"
    }
    res.send(sendData)
})
router.post('/',(req,res)=>{
    const{id,passwd,name}= req.body
    const userData = req.body
    const errmsg={
        "state":false
    }
    if(!id&&!passwd&&!name){
        res.send(errmsg)
        return;
    }
    console.log(id)
    console.log(passwd)
    console.log(name)
    console.log(userData)
    const resmsg = {
        "state":"good",
        "data":userData,
        "msg":"good"
    }
    res.send(resmsg)
})