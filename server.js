const http=require('http')
const server = http.createServer((req,res)=>{
    console.log("Request made")
    res.setHeader('Content-type','text/html')
    const fs=require('fs')
    let path ='./docs'
    if(req.url == '/about' || req.url == '/'){
        path =+ '/about.html'
    }
    else if(req.url == '/contact'|| req.url =='/'){
        path += '/contact.html'
    }
    else if(req.url == '/index'||req.url =='/'){
        path += '/index.html'
    }
    else{
        path += '/1.html'
    }
   fs.readFile(path ,(err,data)=>{
    if(err){
        console.log(err.message)
    }
    else{
        res.end(data)
    }
   })
})
server.listen(8080,'localhost',()=>{
    console.log("Server is listening")
})

