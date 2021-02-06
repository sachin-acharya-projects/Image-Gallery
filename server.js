//Server generated
const express = require('express')
const bodyParser = require('body-parser')
const upload = require('express-fileupload');
const {static} = require('express')
const index = require('./routes/index')
const account = require('./routes/account');
const globalPage = require('./routes/globalPage');
const uploadFiles = require('./routes/uploadFiles')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/public`))
app.use(express.static(`${__dirname}/uploads`))
app.use(upload())

app.use('/', index)
app.use('/account', account)
app.use('/upload', uploadFiles)
app.use('/0', globalPage)

app.set('view engine','ejs')
      
app.post('/search', (req, res)=>{
    return 'Hello'
})

const Port = process.env.PORT || 3000
app.listen(Port, (err) => {
    if (err) {
       console.log(err)
   } else {
       console.log(`Server Started at http://localhost:${Port}`)
    }
});
