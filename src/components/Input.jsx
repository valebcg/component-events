const Input = (props) => {
  
  return (
    <div>
     
          <input
            type="text"
            name="nombre"
            className="form-control"
            onChange={(e) => props.setName(e.target.value)}
            value={props.name}
            placeholder="Ingresa tu usuario"
          />
      
          <input
            type="password"
            name="contrasena"
            className="form-control"
            onChange={(e) => props.setPassword(e.target.value)}
            value={props.password}
            placeholder="Ingresa tu contraseña"
          />

    </div>
  );
}

export default Input