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
      fetch('http://localhost:4000/users/sign-up', {
        headers: {'content-Type' : 'application/json'},
        method: 'post',
        body: JSON.stringify({
          name: name,
          password: password,
          email: email
        })
      })
      .then(data => data.json())
      .then(response => window.localStorage.setItem('jwtToken', response.jwtToken))
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