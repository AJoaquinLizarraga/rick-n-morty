let myFavorites = []

const postFav = (request, response) => {
  myFavorites.push(request.body)
  response.status(200).send(myFavorites)
}

const deleteFav = (request, response) => {
  const { id } = request.params;
  myFavorites = myFavorites.filter(element => element.id !== Number(id))
  response.status(200).send(myFavorites)
}

module.exports = {
  deleteFav, postFav
}