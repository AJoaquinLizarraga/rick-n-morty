const http = require('http');
const getCharById = require('./controllers/getCharById.js')

http.createServer((request, response)=>{

  response.setHeader('Access-Control-Allow-Origin', '*');

  // if(request.url.includes("/rickandmorty/character")){
  //   console.log(request.url)
  //   const characterId = request.url.split('/').at(-1);
  //   console.log(characterId); // id por url
  //   // const characters = [...data]
  //   // console.log(characters);
  //   const identificacion = data.find((character) => character.id === Number(characterId))
  //   console.log(identificacion);

  //   // const identificacion = data[0].status

  //   return response.writeHead(200, { "Content-type": "application/json"})
    
  //   .end(JSON.stringify(identificacion))
  // }

      if(request.url.includes('/rickandmorty/character')){
        console.log(request.url);
        const characterId = request.url.split('/').at(-1);

        return getCharById(response, characterId)
        
      }

   
      return response.writeHead(404, { "Content-type": "text/plain"})
      .end("Error, esto no anda wey")
   
  
})
.listen(3001, 'localhost')