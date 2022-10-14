const http= require('http'); 
const server= http.createServer((req,res)=>{
    if(req.url=="/home"){
    res.write('<html>');
    res.write('<head>Welcome home</head>');
    res.write('</html>');
    res.end();
    }
    else if(req.url=="/about")
    {
        res.write('<html>');
        res.write('<head>Welcome to About Us page</head>');
        res.write('</html>');
        res.end();
    }
    else if(req.url=="/node")
    {
        res.write('<html>');
        res.write('<head>Welcome to my Node Js project</head>');
        res.write('</html>');
        res.end();
    }
    
})
server.listen(4000,()=>{
    console.log('rinkoo1');
}); 