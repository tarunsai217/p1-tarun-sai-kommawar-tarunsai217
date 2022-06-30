const http=require('http');
const url=require('url');
const axios=require('axios');
const path = require('path');
const port=5050;

http.createServer((req,res)=>{


var url_parts = url.parse(req.url, true);

var pathname=url_parts.pathname;
var query = url_parts.query;
const method=req.method;



if(pathname=='/' && method=='POST'){
    res.write('<h1>Welcome to Weather details page</h1>')

    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
        body=JSON.parse(body)


        if(body['q'] && body['days']){
            let p=`http://api.weatherapi.com/v1/current.json?key=1a5b428974a1424cb8b83344222506&q=${body.q}&days=${body.days}`
            fetch(p);
            return
        }
    
    
        if(body['q'] && body['dt']){
            let p=`http://api.weatherapi.com/v1/current.json?key=1a5b428974a1424cb8b83344222506&q=${body.q}&dt=${body.dt}`
            fetch(p);
            return
        }
         
        if(body['q']){
            let p=`http://api.weatherapi.com/v1/current.json?key=1a5b428974a1424cb8b83344222506&q=${body.q}`
            fetch(p);
            return
        }
        
        res.end('enter correct details');

    });

    let fetch=async(path)=>{
        var data=await axios.get(path);   
        let obj={location:{...data.data.location},current:{...data.data.current}}
        res.end(JSON.stringify(obj));
    }
} 
}).listen(port,()=>{
   console.log(`Server is running on port ${port}`)
})