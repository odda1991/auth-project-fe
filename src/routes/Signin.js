import { useState } from 'react';

function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    function handleEmailInput(event) {
        setEmail(event.target.value)
    }

    function handlePasswordInput(event) {
        setPassword(event.target.value)
    }

    function signin() {

    }

    return (
        <div>
          Signin
          <input value={email} onChange={handleEmailInput}></input>
          <input value={password} onChange={handlePasswordInput}></input>
          <button onClick={signin}>Signin</button>
        </div>
      );
}

export default Signin;