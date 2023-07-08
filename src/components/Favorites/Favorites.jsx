import style from './Favorites.module.css'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import Card from '../cardComponent/Card'
import {filterCards, orderCards} from '../../redux/actions'
import { useDispatch } from 'react-redux'

const Favorites = ({ myFavorites, onClose }) => {
    const dispatch = useDispatch()
    const [character, setCharacters] = useState([])
    const [aux, setAux] = useState(false)
    useEffect(() => {
        setCharacters(myFavorites)
    }, [myFavorites])

    const handleOrder = (event) =>{
        dispatch(orderCards(event.target.value))
        setCharacters(!character)
    }
    const handleFilter = (event) =>{
        dispatch(filterCards(event.target.value))
    }

    return <>
        {/* fijarse del return dentro de la funcion map cuando haga la tarea */}
        <div className={style.cardList}>
            
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
            <br />
            {
            character?.map(character =>
                (<Card
                    key={character.id}
                    id={character.id}
                    name={character.name}
                    status={character.status}
                    species={character.species}
                    gender={character.gender}
                    origin={character.origin}
                    image={character.image}
                    onClose={character.onClose}
                />)
            )}
        </div>
    </>
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
};

export default connect(
    mapStateToProps,
    null
)(Favorites)