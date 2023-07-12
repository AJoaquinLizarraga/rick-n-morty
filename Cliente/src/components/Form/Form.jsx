import { useState } from "react"
import validation from "../Validation/Validation";
import style from "./Form.module.css"


const Form = ({login}) => {
  
  const [errors, setErrors] = useState([]);
  
  const handleSubmit = (event) => {
    event.preventDefault()
    login(userData);
  }
  const [userData, setUserData] = useState({
    email: "",
    password:"",
  });
  const handleChange = (event) => {
    event.preventDefault()
      setUserData({
          ...userData,
        [event.target.name]: event.target.value
      })

      setErrors(validation({
        ...userData,
        [event.target.name]: event.target.value
      }))

  }

  return( 
    // <h2>cochinada</h2>
    // <div className={style.div} >
      
    <form  className={style.container} onSubmit={handleSubmit}>
      <label className={style.label} htmlFor="email">Usuario</label>
      <input type="email" id= 'email' name='email' value={userData.email} placeholder="Ingrese su usuario" onChange={handleChange}/>
      {errors.email && <p>{errors.email}</p>}
      
      <label htmlFor="password">Contraseña</label>
      <input type='password' id='password' name='password' value={userData.password} placeholder="Ingrese su contraseña" onChange={handleChange}/>
      {errors.password && <p>{errors.password}</p>}
      <hr />
      <button>Submit</button>
    </form>

    // </div>
     
  )
}

export default Form;