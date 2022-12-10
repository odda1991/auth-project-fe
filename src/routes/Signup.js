import { useState } from 'react';

function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    
    function handleEmailInput(event) {
        setEmail(event.target.value)
    }

    function handleNameInput(event) {
        setName(event.target.value)
    }

    function handlePasswordInput(event) {
        setPassword(event.target.value)
    }

    function signup() {
        
    }

    return (
        <div>
          Signup
          <input value={name} onChange={handleNameInput}></input>
          <input value={email} onChange={handleEmailInput}></input>
          <input value={password} onChange={handlePasswordInput}></input>
          <button onClick={signup}>Signup</button>
        </div>
      );
}

export default Signup;