import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import Layout from './routes/Layout';
import Signin from './routes/Signin';
import Signup from './routes/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route element={<Signin/>} path="signin" />
          <Route element={<Signup/>} path="signup" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
