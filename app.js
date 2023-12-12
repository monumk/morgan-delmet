let express = require('express');
let app = express();
let dotevn = require('dotenv');
dotevn.config();
let port = process.env.PORT || 5600;

let morgan = require('morgan');

let fs = require('fs');

app.use(morgan('short',{stream:fs.createWriteStream('./app.log')}));

app.get('/',(req, res)=>{
    res.send("server working...")
})

app.listen(port, function(err,res){
    if (err) throw err;
    console.log(`listening on ${port}`)
})
