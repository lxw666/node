'use strict';
const fs = require('fs');
const iconvLite = require('iconv-lite');
/* 异步读取文件 */
fs.readFile('03.png',function(error,data){
	if(error){
		console.error(`异步读取文件错误：${error}`);
	}else{
		data = iconvLite.decode(data,'gbk');
		console.log(`异步读取文件成功：${data.toString('utf-8')}`)
	}
})

/* 同步读取文件 */
try{
	const readData = fs.readFileSync('file.text','utf-8');
	console.log(`同步读取文件成功：${readData}`);
}catch(e){
	console.error(`同步读取文件错误：${e}`);
}

/* 异步写入文件 */
let content = 'age: 18';
fs.writeFile('file.text',content,{flag: 'a+'},function(error){
	if(error){
		console.error(`异步写入文件错误：${error}`);
	}else{
		console.log(`异步写入文件成功`)
	}
})

/* 同步写入文件 */
try{
	content = '性别：男';
	const writeData = fs.writeFileSync('file.text',content,{flag: 'a+'});
	console.log(`同步写入文件成功`)
}catch(e){
	console.error(`同步写入文件错误：${e}`);
}

/* 获取文件大小 */
fs.stat('file.text',function(error,stat){
	if(error){
		console.error(`获取文件信息错误：${error}`);
	}else{
		console.log(`获取文件信息成功：${JSON.stringify(stat)}`)
	}
})