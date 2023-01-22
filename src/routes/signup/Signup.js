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
        console.log(`Signup user ${name} - email [${email}], password [${password}]` )
    }

    return (
        <div>
          <h1>Sign Up</h1>
          <div>
            <input placeholder="name" value={name} onChange={handleNameInput}></input>
          </div>
          <div>
            <input placeholder="email" value={email} onChange={handleEmailInput}></input>
          </div>
          <div>
              <input placeholder="password" value={password} onChange={handlePasswordInput}></input>
          </div>
          <div>
              <button onClick={signup}>Signup</button>
          </div>
        </div>
      );
}

export default Signup;