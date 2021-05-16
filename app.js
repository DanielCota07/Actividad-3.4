const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    console.log(request.url)
    const file = request.url == '/' ? './www/index.html' : `./www${request.url}`;
    fs.readFile(file, (err, data)=>{
        if(err){
            response.writeHead(404, {"Content-Type":"text/plain"});
            response.write("Not found");
            response.end(); 
        }else{
            const extension = file.split('.').pop();
            switch(extension) {
                case 'txt':
                    response.writeHead(200, {"Content-Type":"text/plain"});
                    break;
                case 'html':
                    response.writeHead(200, {"Content-Type":"text/html"});
                    break;
                case 'jpeg':
                    response.writeHead(200, {"Content-Type":"image/jpeg"});
                    break;
                case 'css':
                    response.writeHead(200, {"Content-Type":"text/css"});
                    break;
                case 'js':
                    response.writeHead(200, {"Content-Type":"text/javascript"});
                    break;
                case 'ico':
                    response.writeHead(200, {"Content-Type":"image/x-icon"});
                    break;
                default:
                    response.writeHead(200, {"Content-Type":"text/plain"});
            }

            response.write(data);
            response.end(); 
        }
    });
}).listen(4444);

