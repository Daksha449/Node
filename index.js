const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url === '/'){
        fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
            if(err)throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(content);
        });
    }else if(req.url === '/about.html'){
        fs.readFile(path.join(__dirname,'public','about.html'),(err,content)=>{
            if(err)throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(content);
        });
    }else if(req.url === '/api'){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(data);        
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end("<h1>404 Not Found</h1>");
    }
});
server.listen(4444,()=>console.log("Our server is running"));


var axios = require('axios');
var data = JSON.stringify({
    "collection": "gross",
    "database": "Grossystore",
    "dataSource": "Cluster0",
    "projection": { 
    }
});
            
var config = {
    method: 'post',
    url: 'https://us-east-1.aws.data.mongodb-api.com/app/data-ytzgz/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'zaJ6lG2HSz6nUgegpWUIuANQvhtrsbteOY48rztU7b76MJ1AGMEIlqD7GrsFZWhi',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        data = (JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
