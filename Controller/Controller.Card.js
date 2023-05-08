const express = require('express')
const router =  express.Router()
const schema = require('../model/schema')

router.post('/',(req,res)=>{
    const number =req.body.number
   // console.log(number)
   // console.log(schema)
    for(var i=0;i<schema.length;i++){
        if(number==schema[i]){
            const msg={
                "State":400,
                "Msg":"Find"
            }
            res.send(msg)
            return;
        }

    }
    const err={
        "State":404,
        "Msg":"NOPE"
    }
    res.send(err)
})
module.exports = router