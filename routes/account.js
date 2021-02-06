const express = require('express')
const databases = require('./databases');
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('account')
})

router.post('/', (req, res)=>{
    const query = `SELECT * FROM image_admin WHERE username='${req.body.login_username}' AND password='${req.body.login_password}'`;
    databases.query(query,(req, rows, fields)=>{
        if(rows.length != 0){
            res.render('upload')
        }else{
            res.render('account')
        }
    })

    // console.log(req.body)
})

module.exports = router
