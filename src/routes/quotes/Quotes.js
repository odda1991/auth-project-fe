import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";


function Quotes() {
    const [quotes , setQuotes] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
     fetch('http://localhost:4000/quotes', {
      method: 'get',
      headers: {
        'authorization': 'Bearer ' + window.localStorage.getItem('jwtToken')
      }
    })
      .then (data =>{
        if(data.status === 200){
          setLoggedIn(true)
          return data.json()
        }
        else if (data.status === 401){
          navigate("/signin")
        }
      })
      .then(quotes => setQuotes(quotes))
     } , [navigate])
    return (
        <div>
          {!loggedIn && <p>You are not logged in</p>}
          {loggedIn &&  <div>
            {quotes.map((oneResult, i) => {
            return <li key={i}>
              <p>{oneResult.quote}</p>
              <p>{oneResult.author}</p>
             </li>
             })}
            </div>}
          
        </div>
      );
}

export default Quotes;