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
        myFavorites: action.payload,
        allCharacters: action.payload 
      }

    // case REMOVE_FAV:
    //   return{
    //     ...state,
    //     myFavorites: state.myFavorites.filter(fav => fav.id !== action.payload),
    //     allCharacters: state.myFavorites.filter(fav => fav.id !== action.payload)
    //   }

    case REMOVE_FAV:
      return {
          ...state,
          myFavorites: action.payload,
          allCharacters: action.payload
      }

    case FILTER:
      return {
        ...state,
        myFavorites:
        action.payload === 'allCharacters'
        ? [...state.allCharacters]
        : [...state.allCharacters.filter(char => char.gender === action.payload)]
      }

    case ORDER:
      const allCharactersCopy = [...state.allCharacters]
      return {
        ...state,
        myFavorites:
        action.payload === 'A'
        ? allCharactersCopy.sort((a, b) => a.id - b.id)
        : allCharactersCopy.sort((a, b) => b.id - a.id)
      }
      
    default: return{...state};
  }

};

export default reducer;