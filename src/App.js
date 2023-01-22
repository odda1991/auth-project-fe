import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import Layout from './routes/layout/Layout';
import Signin from './routes/signin/Signin';
import Signup from './routes/signup/Signup';

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
