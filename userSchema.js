const userSchema = require("../model/userSchema")
class Auth{
    isMatchUseridAndUserpw(obj,target){
        for(var e in obj){
            if(obj[e].userid==target.userid&&obj[e].userpw==target.userpw)
            return true;
        }
        return false;
    }
    isMatchUserid(obj,target){
        for(var e in obj){
            if(obj[e].userid==target.userid)
                return true;
        }
        return false;
    }
    login(userConfig){
        return new Promise((resolve,reject)=>{
            if(this.isMatchUseridAndUserpw(userSchema,userConfig))
                resolve({msg:"succeed"})
                reject({msg:"idpw err"});
        })
    }
    join(userConfig){
        return new Promise((resolve,reject)=>{
            if(this.isMatchUserid(userSchema,userConfig))
                reject({msg:"existing userid"})
            userSchema[Object.keys(userSchema).length+1]=userConfig;
                resolve({msg:"succeed"},userConfig)
        })
    }
}
(async function(){
    const auth = new Auth
    await auth.join({userid:"123411",userpw:"12345"}).then((e)=>{
        console.log(e)
    })
    .catch((e)=>{
        console.log(e)
    })
    console.log('a')
})()