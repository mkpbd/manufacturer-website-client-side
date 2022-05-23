import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Register from './Pages/Register/Register';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Navigation from './Pages/Shared/Header/Navigation';
import MainFooter from './Pages/Shared/Footer/MainFooter';
import Home from './Pages/Home/Home';
function App() {
  return (
 <>

  <Navigation></Navigation>

 <Routes>
   <Route path='/register' element={<Register></Register>}></Route>
   <Route path='/login' element={<Login></Login>}></Route>
   <Route path='/' element={<Home></Home>}></Route>
   <Route path='/blog' element={<Register></Register>}></Route>
   <Route path='*' element={<NotFound></NotFound>}></Route>
 </Routes>


 <MainFooter></MainFooter>
  
 </>
  );
}

export default App;
