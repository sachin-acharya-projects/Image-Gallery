const express = require('express')
const router = express.Router()
const databases = require('./databases');

router.get('/', (req, res)=>{
    const query = "SELECT * FROM image_list";
    databases.query(query, (req, rows, fields)=>{
        res.render('index',{data: rows})
    })
})

module.exports = router