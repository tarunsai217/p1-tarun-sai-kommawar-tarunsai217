const http=require('http');
const url=require('url');
const axios=require('axios');
const port=5050;

http.createServer((req,res)=>{

var url_parts = url.parse(req.url, true);

var pathname=url_parts.pathname;
var query = url_parts.query;
const method=req.method;


if(pathname=='/' && method=='GET'){
    res.write('<h1>Find Weather details here</h1>')

    let fetch=async(path)=>{
        var data=await axios.get(path);   
        let obj={location:{...data.data.location},current:{...data.data.current}}
        res.end(JSON.stringify(obj));
    }

    if(query['q'] && query['days']){
        path=`http://api.weatherapi.com/v1/current.json?key=1a5b428974a1424cb8b83344222506&q=${query.q}&days=${query.days}`
        fetch(path);
        return
    }


    if(query['q'] && query['dt']){
        path=`http://api.weatherapi.com/v1/current.json?key=1a5b428974a1424cb8b83344222506&q=${query.q}&dt=${query.dt}`
        fetch(path);
        return
    }

    if(query['q']){
        path=`http://api.weatherapi.com/v1/current.json?key=1a5b428974a1424cb8b83344222506&q=${query.q}`
        fetch(path);
        return
    }   
} 
}).listen(port,()=>{
   console.log(`Server is running on port ${port}`)
})