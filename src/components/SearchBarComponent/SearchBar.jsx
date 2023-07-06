import { useState } from "react";



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
         <input type="search" placeholder="Ingrese su ID" onChange={handleChange} value={id} />
         {/* onChange es un atributo del input que escucha cambios */}
         <button onClick={()=> {onSearch(id); setId("")}}>Agregar</button>
         <button onClick={handleRandomClick}>Random</button>
         
      </div>
   );
}
