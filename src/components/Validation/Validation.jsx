









const validation = (userData) => {
    const errors = {};

    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userData.email)){
    errors.email='Invalid email format';
  }
    if(!userData.email){
      errors.email = 'Debe ingresar un email'
    }
    if(userData.email.length > 16)
    {
      errors.email = 'El maximo de caracteres es 16'
    }
    
    if(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/
    .test(userData.password)){
      errors.password = "la pass es incorrecta"
    }
    
    return errors;
}

export default validation;