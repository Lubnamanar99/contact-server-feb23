//import json-server
const jsonServer = require('json-server')


//create jsonServer application

const server = jsonServer.create()

//setup root for db.json

const router = jsonServer.router('db.json')

//return a middleware used by json server

const middleware = jsonServer.defaults() 

//set up port number server app(this port created for view values while runtime)

const port = process.env.port||3000

//use router & middleware in server app

server.use(middleware)
server.use(router)

//to listen server app in port

server.listen(port,()=>{
    console.log('contact server app started at port',port);
})

