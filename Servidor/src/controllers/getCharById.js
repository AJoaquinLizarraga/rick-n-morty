const axios = require('axios')





const getCharById = (response, id) =>{ // este response es es el que viene del servidor

  axios(`https://rickandmortyapi.com/api/character/${id}`)
  .then(response => response.data)
  .then(data => {
      const personaje = {
        id: id, //aqui id es el del parametro, pero puede ser data.id
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin, // desde el front se manda el .name, aqui se manda el objeto entero
        image: data.image,
        status: data.status
      } 
      return response
                    .writeHead(200, { "Content-type": "application/json"}) //aqui se indica el tipo de formato tipo json
                    .end(JSON.stringify(personaje))
  })
  .catch( error => {
      return response
                    .writeHead(500, { "Content-type": "text/plain"})
                    .end(error.message)
  }
  )
}
  

module.exports = getCharById;