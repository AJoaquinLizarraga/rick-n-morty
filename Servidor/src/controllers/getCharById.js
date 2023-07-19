// const axios = require('axios')
// const getCharById = (response, id) =>{ // este response es es el que viene del servidor

//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//   .then(response => response.data)
//   .then(data => {
//       const personaje = {
//         id: id, //aqui id es el del parametro, pero puede ser data.id
//         name: data.name,
//         gender: data.gender,
//         species: data.species,
//         origin: data.origin, // desde el front se manda el .name, aqui se manda el objeto entero
//         image: data.image,
//         status: data.status
//       } 
//       return response
//                     .writeHead(200, { "Content-type": "application/json"}) //aqui se indica el tipo de formato tipo json
//                     .end(JSON.stringify(personaje))
//   })
//   .catch( error => {
//       return response
//                     .writeHead(500, { "Content-type": "text/plain"})
//                     .end(error.message)
//   }
//   )
// }
// module.exports = getCharById;

const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/"

// const getCharById = (request, response)=>{
//   const { id } = request.params 
//   console.log(request.params);
//     axios(`${URL}${id}`)
//     .then(response => response.data)
//     .then(data => {
//       let character = new Object;
      
//               if(data){ 
//                 character = {
//                 id : data.id,
//                 status: data.status,
//                 name: data.name,
//                 species: data.species,
//                 origin: data.origin.name,
//                 image: data.image,
//                 gender: data.gender
//               }
//           return response.status(200).send(character)
//           }
//               else {
//       return response.status(404).send(JSON.stringify("not found"))
//           }
//     }
//   ).catch(error => response.status(500).send(error.message))
// }

const  getCharById = async (request, response)=>{
  try {
    const { id } = request.params
     
    const { data } = await axios(`${URL}${id}`)
       
    let character = new Object;
        
        if(data){ 
          character = {
          id : data.id,
          status: data.status,
          name: data.name,
          species: data.species,
          origin: data.origin.name,
          image: data.image,
          gender: data.gender
        }
            return response.status(200).send(character)
        }

  }catch (error) {
          return response.status(404).send(JSON.stringify("not found"))
      }
     
} 

module.exports = { getCharById };