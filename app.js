const express = require ('express');
const fs = require('fs');

const app = express();
app.use(express.json());

app.get('/details', function(req, res){
    fs.readFile(__dirname + '/' + 'database.json', function(err, data){
        console.log(data)
        res.end(data)
    })
})

const port = 8080
app.listen(port,function(err){
    if(err){
        console.log('Something Went Wrong', err)
    }else{
        console.log('Server Running on Port: ' + port)
    }
})