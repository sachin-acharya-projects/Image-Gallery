const express = require('express')
const databases = require('./databases');
const path = require('path');
const fs = require('fs');

const newDir = function (data){
    let directoryPath = path.join(__dirname, '../', 'uploads', data)
    fs.mkdir(directoryPath, err => {
        if(err){
            return console.log(err);
        }else{
            return "Directory Added"
        }
    })
}

const router = express.Router()

    router.get('/', (req, res)=>{
        res.render('upload')
    })

    router.post('/', (req, res)=>{
        if(req.files){
            const category = req.body.send_file_name
            const array = req.files.send_file
            let query = `SELECT * FROM image_list WHERE name='${category}'`
            databases.query(query,(req, rows, fields)=>{
                if (rows.length == 0){
                    newDir(category)
                    for (let i = 0; i < array.length; i++){
                       query = `INSERT INTO image_datas VALUES('${null}', '${category}', '${array[i].name}')`
                        databases.query(query, (opt, rows, fields)=>{
                            console.log(rows)
                        })
                    }
                    // query = `INSERT INTO image_list VALUES('${null}', '${category}', '${array[0].name}')`
                }else{
                    console.log('Already Exst');
                }
            })
        }else{
            res.send('You need to have Photos along with Category Name');
        }
    })

module.exports = router