const express = require('express');
const { query } = require('./databases');
const databases = require('./databases');
const router = express.Router()

router.get('/:url', (req, res)=>{
    var category = req.params.url;
    var number_per_page = 12;
    var page_number = req.query.page;
    var number_of_page = 10;
    if(page_number == null){
        page_number = 1;
    }
    var lower_offset = (page_number-1)*number_per_page;
    qry1 = `SELECT * FROM image_datas WHERE category='${category}'`;
    databases.query(qry1, (req, rows, fields)=>{
        number_of_page = Math.ceil(rows.length / number_per_page)
    })
    qry = `SELECT * FROM image_datas WHERE category='${category}' LIMIT ${lower_offset},${number_per_page}`;
    databases.query(qry, (req, rows, fields)=>{
        res.render('../views/images',{data: rows, number: number_of_page});
    })
})

module.exports = router
