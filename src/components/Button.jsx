import React from "react";
import Swal from "sweetalert2";

const Button = (props) => {
   //Validation;

  const validate = () =>{

   if (props.name === "") {
    
    Swal.fire({
      icon: 'question',
      title: '¡ERROR!',
      text: 'No ingresaste tu Usuario',
    
    })

    props.setName("");
    props.setPassword("");
    return;
  } 
  else(
    Swal.fire({
      icon: 'success',
      title: '¡OK! ',
      text: '¡Sesión Iniciada Correctamente!',
    
    })
  
  )

}
  return (
    
    <button  onClick={validate} type="submit" className="btn btn-primary" >
      Ingresar
    </button>


  );
};

export default Button;