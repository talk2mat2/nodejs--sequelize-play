// const { Http2ServerRequest } = require("http2")
const http=require("http")
const fs =require("fs")

const path= require("path")
// http.createServer((req,res)=>{
// fs.readFile("users.json",(err,file)=>{
// if(err)throw err;
//     res.end(file)
// })
// }).listen(8080,(err,success)=>{
// if(err)throw err;
// console.log("server running")
// }
// )
 
// http.createServer((req,res)=>{
//     const stream=fs.createReadStream("users.json")
//     stream.pipe(res)
// }).listen(8080,(err,success)=>{
// if(err)throw err;
// console.log("server running")
// }
// )

const buff= Buffer.from("martins")
// console.log(buff.map(x=>console.log(x)))

console.log(buff.toString())
// http.get("https://google.com",(res)=>{
//     let data=""
// res.on("data",chunk=>{
// data+=chunk
// })

// res.on("end",()=>{
//     console.log(JSON.parse(data))
// })

// })
//handling sessions
//handling cookies

//const sessions=require("express-sessions")

//app.use(sessions({
 //   resave:true,
 //saveUnitialized:true,
 //secrete key:"user2020"
//}))


// fs.readFile("hello.txt","utf8",(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// })


//req.session.name="james"
// let promise= new Promise((resolve,reject)=>{
//     let x=true
//     if(x)resolve("x");
//    else{ reject("not x")}
// })


// promise.then(x=>console.log(x))

// const users={name:"martins chukwma",age:"25"}
// fs.writeFileSync("users.json",JSON.stringify(users))

// fs.writeFile("users2.txt",JSON.stringify(users),{flag:"a+"},(err,data)=>{if (err)throw err;
// console.log("done")})



// const dir="c:/Users/DELL/Desktop/projects/sequilize1/users.json"

// const file= path.parse("c://","/models/music.mp3")
// console.log(file)

//__dirname ---> this means current directory

const dir=__dirname

fs.stat(dir,(err,data)=>{
    console.log(data.isFile())
})