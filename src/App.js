import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Pages/Register/Register';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import NotFound from './components/NotFound/NotFound'
import Navigation from './Pages/Shared/Header/Navigation';
import MainFooter from './Pages/Shared/Footer/MainFooter';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Dashboard from './Pages/Dashboard/Dashboard';
import Myprofiles from './Pages/Dashboard/Myprofiles';
import MyOrder from './Pages/Dashboard/MyOrder';
function App() {
  return (
 <>

  <Navigation></Navigation>

 <Routes>
   <Route path='/register' element={<Register></Register>}></Route>
   <Route path='/login' element={<Login></Login>}></Route>
   <Route path='/' element={<Home></Home>}></Route>
   <Route path='blog' element={<Blog></Blog>}></Route>
   <Route path='/parts' element={<Register></Register>}></Route>
   <Route path='/dashboard' element={<Dashboard></Dashboard>}>
    <Route path='pro' element={<Myprofiles></Myprofiles>}></Route>
    <Route index element={<MyOrder></MyOrder>}></Route>
          {/* <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path="manageDoctor" element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route> */}
   </Route>
   <Route path='pro' element={<Myprofiles></Myprofiles>}></Route>
   <Route path='*' element={<NotFound></NotFound>}></Route>
 </Routes>


 <MainFooter></MainFooter>
  
 </>
  );
}

export default App;
