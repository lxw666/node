const http = require('http');
const ProgressBar = require('progress');//创建终端进度条
const chalk = require('chalk');//定义打印颜色
const minimist = require('minimist');
const readline = require('readline');
const inquirer = require('inquirer');
const events = require('events');
const util = require('util');
const eventListener = new events();

const server = http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(3000);


// 终端打印如下信息
const args = minimist(process.argv.slice(2))
console.log(process.execPath,util.inspect(process.memoryUsage))
console.log(args)
process.argv.forEach((val,index)=>{
	console.log(val,index)
	
})
const oranges = ['橙子', '橙子']
const apples = ['苹果']
oranges.forEach(fruit => {
  console.count(fruit)
})
apples.forEach(fruit => {
  console.count(fruit)
})

const doSomething = () => console.log(chalk.blue('测试'))
const measureDoingSomething = () => {
  console.time('doSomething()')
  //做点事，并测量所需的时间。
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()


process.on('SIGTERM', () => {
  server.close(() => {
	  console.log('进程已终止')
	})
})
const bar = new ProgressBar('downloading [:bar] :rate/bps :percent :eta', { 
	total: 10,
	width: 40,
	incomplete:'',
	})
  bar.tick({
    'token1': "Hello",
    'token2': "World!\n"
  })
  bar.tick(2, {
    'token1': "Goodbye",
    'token2': "World!"
  })
  
 const callBack = (param)=>{
	 console.log(chalk.red(param))
 }
 eventListener.on('start',callBack)
 let i = 0;
const timer = setInterval(() => {
	bar.tick();
	i++;
	if(i == 3){
		eventListener.removeListener('start',callBack)
	}else{
		eventListener.emit('start',i);
	}
	console.log(222)
  if (bar.complete) {
    clearInterval(timer);
	// process.emit('SIGTERM')
  }
}, 100)

var questions = [
  {
    type: 'input',
    name: 'name',
    message: "你叫什么名字?"
  }
]

inquirer.prompt(questions).then(answers => {
  console.log(`你好 ${answers['name']}!`)
})


