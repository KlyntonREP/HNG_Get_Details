const express = require ('express');
const cors = require('cors')
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/v1/details', function(req, res){
    const details = fs.readFileSync('database.json')
    const data = JSON.parse(details)
        console.log(data)
        res.end(JSON.stringify(data))
})

const port = 8080
app.listen(port,function(err){
    if(err){
        console.log('Something Went Wrong', err)
    }else{
        console.log('Server Running on Port: ' + port)
    }
})