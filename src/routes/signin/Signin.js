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
        console.log(`Signin user with email [${email}], password [${password}]` )
    }

    return (
        <div>
          <h1>Sign In</h1>
          <div>
            <input placeholder="email" value={email} onChange={handleEmailInput}></input>
          </div>
          <div>
            <input placeholder="password" value={password} onChange={handlePasswordInput}></input>
          </div>
          <div>
            <button onClick={signin}>Signin</button>  
          </div>
        </div>
      );
}

export default Signin;