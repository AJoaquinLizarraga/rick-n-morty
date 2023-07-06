import './App.module.css';
import { useState, useEffect } from 'react';
import {Routes, Route, useLocation, useNavigate, Outlet} from 'react-router-dom'
import axios from 'axios';
import Cards from './components/CardsComponent/Cards.jsx';
import NavBar from './components/NavComponent/NavBar';
import About from './components/AboutComponent/About'
import Detail from './components/DetailComponent/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { connect } from 'react-redux';
import { removeFav } from './redux/actions';



function App() {
   
   const ubicacion = useLocation(); //la funcion devuelve el path donde estas parado
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const [addedChars, setAddedChars] = useState([])
   const [characters, setCharacters] = useState([]);
   //const [availableChars, setAvailableChars] = useState(0)
   
   // const email = "abel@gmail.com";
   // const pass = 'qwerty123456';

   const login = (userData, email='abel@gmail.com', pass = 'qwerty123456') => {
      if(userData.email === email && userData.password === pass) {
         setAccess(true);
         navigate('/home');
      }
    }

   useEffect(() => {
      !access && navigate('/')
   }, [access] )

   
   const onSearch = (id) => {

      if (addedChars.includes(Number(id))) return;

      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then( response => response.data)
      .then(( data ) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
            setAddedChars([...addedChars, data.id].sort((a, b) => b - a))
         } 
         else {
            alert('¡No hay personajes con este ID!');
         }
      }).catch(error=>alert("No se encontró el ID!!!"));
   }
//    const random = () => {
//       const randomId = Math.floor(Math.random() * availableChars)
//       onSearch(randomId)
//   }
const random = async () => {
   try {
     const response = await fetch(`https://rickandmortyapi.com/api/character`);
     const data = await response.json();
     const randomId = Math.floor(Math.random() * data.info.count);
 
     const characterResponse = await axios.get(
       `https://rickandmortyapi.com/api/character/${randomId}`
     );
 
     const characterData = characterResponse.data;
 
     if (characterData.name) {
       setCharacters((oldChars) => [...oldChars, characterData]);
       setAddedChars([...addedChars, characterData.id].sort((a, b) => b - a));
     } else {
       alert('¡No hay personajes con este ID!');
     }
   } catch (error) {
     alert('No se encontró el ID!!!');
   }
 };

   const onClose = (id)=>{
      const characterFilter = characters.filter(character=>character.id !== Number(id));
       //setCharacters([...characters, characterFilter])
      setCharacters(characterFilter)
      removeFav(id)
   }

   return (
     
        
      <div>
         {
            ubicacion.pathname !== '/' ? <NavBar onSearch = {onSearch}
            random={random} /> : null
            // //ubicacion.pathname !== '/' && <NavBar onSearch = {onSearch} />
            // ubicacion.pathname === '/'  ?    null : <NavBar onSearch = {onSearch} />
         }
         <Routes>

            <Route path="/" element={ <Form login={login}/> }/>

            <Route path="/home" element={<Cards characters={characters}  onClose={onClose} />}/>

            <Route path="/favorites" element={<Favorites />} />

            <Route path="/detail/:id" element={<Detail />} />
            
            <Route path="/about" element={<About />} />

                      
         </Routes>

         <footer> contacto </footer>
   
      </div>
     
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
       removeFav: (id) => dispatch(removeFav(id))
   }
};

export default connect(
   null,
   mapDispatchToProps
)(App)
