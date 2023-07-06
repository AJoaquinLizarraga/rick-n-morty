import Card from '../cardComponent/Card';
import style from './Cards.module.css'
import React from 'react';

export default function Cards({characters, onClose}) {

   //const {characters, onClose} = props;

   return <div className={style.cardList}> {

      characters.map( (element) => (<Card
            key={element.id}
            id={element.id}
            name={element.name}
            status={element.status}
            species={element.species}
            gender={element.gender}
            origin={element.origin.name}
            image={element.image}
            onClose={onClose}
         />))}

   </div>;
}
