const axios = require('axios')





const getCharById = (response, id) =>{
  // const personajes = {}
  axios(`https://rickandmortyapi.com/api/character/${id}`)
  .then(response => response.data)
  .then(data => {
    if(data.name){
      const personajes = {
        key: data.id,
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin.name,
        image: data.image,
        status: data.status
      } 
      // console.log(personajes)
      return response.writeHead(200, { "Content-type": "application/json"})
      
      .end(JSON.stringify(personajes))
    }
  })
  .catch( error => {
    return response.writeHead(500, { "Content-type": "text/plain"})
    .end(error.message)
  }
  )
}
  


// console.log(data)

module.exports = getCharById;