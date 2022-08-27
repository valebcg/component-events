import React, { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";


function App() {

      //Estados del input
      const [name, setName] = useState("");
      const [password, setPassword ] = useState("");


  return (
    <>
    <div className="user">
          <h1>Ingresar Usuario</h1>
        <Input 
          name={name}
          setName={setName}
          password={password}
          setPassword={setPassword}
        />

      {password === '252525' ? 
        <Button 
          name={name}
          setName={setName}
          password={password}
          setPassword={setPassword}
        />
       
        : ''}
    </div>
    </>
  );
}

export default App;