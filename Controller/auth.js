const db = require('../helper/db')
async function isValid(userid) {
    return new Promise((resolve, reject) => {
        var sql = `SELECT * FROM USER_INFO WHERE userid ='${userid}'`
        db.query(sql, (err, result) => {
            if (err) {
                reject("ㅗ")
            }
            else {
                if (!result.length) {
                    resolve("ㅎㅎ")
                } else {
                    reject("ㅗㅗ")
                }
            }
            console.log(result.length);
        })
    })
}
module.exports = {
    //userid,userpw,name
    signUp: (user_info) => new Promise((resolve, reject) => {
         isValid(user_info.userid).then(() => {
            var sql = `INSERT INTO user_info(userid,userpw,name) values('${user_info.userid}','${user_info.userpw}','${user_info.name}')`;
            db.query(sql, (err, result) => {
                if (err) {
                    rejecct("ㅗㅗㅗ")
                } else {
                    if (result.affectedRows) {
                        console.log("connect");
                        resolve("ㅎㅎ")
                    } else {
                        rejecct("ㅗㅗㅗ")
                    }
                    console.log(result)
                }
            })
        }).catch(() => {
            reject("ㅗㅗㅗ")
        })
    })




}