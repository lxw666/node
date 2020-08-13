'use strict';
const https = require('http');
const fs = require('fs');

https.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'image/png'});
	fs.readFile('03.png','binary',function(error,data){
		if(error){
			console.error('error',error);
		}else{
			console.log('读取成功3',data);
			res.write(data,'binary');
			res.end();
		}
	})
}).listen(8080);