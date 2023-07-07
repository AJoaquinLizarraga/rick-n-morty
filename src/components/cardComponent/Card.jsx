import style from './Card.module.css'
import './Card.module.css'
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from  "react-icons/ai";
import { useState, useEffect } from 'react';
import { addFav } from '../../redux/actions';
import { removeFav } from '../../redux/actions';
import { connect } from 'react-redux'

// export default function Card(props) {
//    // const {id, name, status, species, gender, origin, image, onClose} = props;
//    const { onClose} = props;

function Card({id, name, status, species, gender, origin, image, onClose, removeFav, addFav, myFavorites}){
   
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
    
   const estatus = () => {
      if(status === "Alive")  {return style.backAlive }
      if(status === "Dead")   { return style.backDead }
      if(status === "unknown"){ return style.backUnknown }
   } 
   const estado = estatus(status)
   /*    PRUEBA DE CAMBIO DE COLOR  */

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () =>{
      if (isFav) {
         setIsFav(false)
         removeFav(id)
     } else {
         setIsFav(true)
         addFav({id, name, status, species, gender, origin, image, onClose})
     }
   }
   return (

      <div className={style.card}>
           
         <button onClick={handleFavorite}>{isFav? '❤️' : '🤍' }</button>     

         <div className={`${style.face} ${style.front}`}>
            <img className={style.imagen} src={image} alt='' />
            <h2 className={style.nombre}>{name}</h2> 
         </div> 


         {/* aqui se pueden meter parametros en funcion flecha */}


         <div className={`${style.face} ${estado}`}>

               <Link to={`/detail/${id}`}>
               <div className={style.nombreBack}>{name}</div>  
               </Link>

               <h3>{status}</h3>
               <h3>{species}</h3>
               <h3>{gender}</h3>
               <h3>{origin}</h3>
               <button className={style.closeButton} onClick={() => onClose(id)}><AiFillCloseCircle/></button> 
               
         </div>
         
         
      </div>
   );
}

const mapStateToProps = (state)=>{
   return{
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch)=>{
   return{
      addFav: (character) => dispatch(addFav(character)), // siempre se tiene que invocar porque tiene que retornar un objeto
      removeFav: (id) => dispatch(removeFav(id))
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)
