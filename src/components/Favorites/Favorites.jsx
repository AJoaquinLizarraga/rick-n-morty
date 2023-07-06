import style from './Favorites.module.css'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import Card from '../cardComponent/Card'

const Favorites = ({ myFavorites, onClose }) => {
    const [character, setCharacters] = useState([])
    useEffect(() => {
        setCharacters(myFavorites)
    }, [myFavorites])

    return <>
        {/* fijarse del return dentro de la funcion map cuando haga la tarea */}
        <div className={style.cardList}>{
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