// const http = require('http');
// const getCharById = require('./controllers/getCharById.js')

// http.createServer((request, response)=>{

//   response.setHeader('Access-Control-Allow-Origin', '*');

//       if(request.url.includes('/rickandmorty/character')){

//         const id = request.url.split('/').at(-1);

//         return getCharById(response, +id)        
//       }  
  
// })
// .listen(3001, 'localhost')
const express = require('express');
const morgan = require('morgan');
const router = require('./routes')
const server = express();

const PORT = 3001;
server.use(express.json());
server.use(morgan('dev'));


server.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Credentials', 'true');
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    );
    response.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
      );
      next();
    });

    server.use("/rickandmorty", router);
  
    server.listen(PORT, ()=>{
    console.log(`Servidor montado en puerto ${PORT}`);
  });