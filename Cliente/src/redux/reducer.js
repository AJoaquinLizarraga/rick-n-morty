import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types"


const initialState = {
  myFavorites: [],
  allCharacters: []
}


const reducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload] 
      }

    case REMOVE_FAV:
      return{
        ...state,
        myFavorites: state.myFavorites.filter(fav => fav.id !== action.payload)
      }

    case FILTER:
        return {
            ...state,
            allCharacters: [...state.myFavorites.filter(char => char.gender == action.payload)]
        }

    case ORDER:
        return action.payload === "A" ? {             /* Ascendente */
            ...state,
            allCharacters: [...state.myFavorites.sort((a, b) => a.id - b.id)]

        } : {                                       /* Descendiente */
            ...state,
            allCharacters: [...state.myFavorites.sort((a, b) => b.id - a.id)]
        }

    default: return{...state};
  }

};

export default reducer;