import { useState } from "react";
import './SearchBar.module.css'



export default function SearchBar({onSearch, random}) {
   const [id, setId] = useState("");
   
   const handleChange = (event)=>{
      event.preventDefault();
      setId(event.target.value)

   }
   
  const handleRandomClick = () => {
   random()
  }

 

   return (
      <div >
         <input type="search" placeholder="Ingrese su ID 1-826" onChange={handleChange} value={id} />
         {/* onChange es un atributo del input que escucha cambios */}
         <button className='boton' onClick={()=> {onSearch(id); setId("")}}>Agregar</button>

         <button className='boton' onClick={handleRandomClick}>Random</button>
         
      </div>
   );
}
