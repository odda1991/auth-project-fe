import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    function handleEmailInput(event) {
        setEmail(event.target.value)
    }

    function handlePasswordInput(event) {
        setPassword(event.target.value)
    }

    function signin() {
        fetch('http://localhost:4000/users/sign-in', {
          headers: {'content-Type': 'application/json'},
          method: 'POST',
          body: JSON.stringify({
            email: email ,
            password: password
          })
        })
        .then(data=>{
          if(data.status === 401){
            setError(true)
          }else{
             data.json()
             .then(response =>{
              window.localStorage.setItem('jwtToken', response.jwtToken)
              navigate('/')
            } )
          }
        })
      
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
            {error && <p>not invalid user</p>}  
          </div>
        </div>
      );
}

export default Signin;