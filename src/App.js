import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import Register from "./Pages/Register/Register";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Navigation from "./Pages/Shared/Header/Navigation";
import MainFooter from "./Pages/Shared/Footer/MainFooter";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Myprofiles from "./Pages/Dashboard/Myprofiles";
import MyOrder from "./Pages/Dashboard/MyOrder";
import Payment from "./Pages/Dashboard/Payment";
import Parts from "./components/Parts/Parts";
import AddTools from "./Pages/Dashboard/AddTools/AddTools";
import { ToastContainer } from "react-toastify";
import Purchase from "./Pages/Dashboard/Purchase/Purchase";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import ShowDetails from "./Pages/Dashboard/Purchase/ShowDetails";
import User from "./Pages/Dashboard/User";
import RequireAdmin from "./components/RequireAuth/RequireAdmin";
import HomePortfolio from "./Pages/Portfolio/HomePortfolio";
import UserProfile from "./Pages/UserProfile/UserProfile";
function App() {
  return (
    <>
      <Navigation></Navigation>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="blog" element={<Blog></Blog>}></Route>
        <Route path="/parts" element={<Register></Register>}></Route>
        <Route path="/portfolio" element={<HomePortfolio></HomePortfolio>}></Route>
        <Route path="/showdetail/:id" element={<ShowDetails></ShowDetails>}></Route>

        <Route path="purchase/:id" element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="user-order" element={<MyOrder></MyOrder>}></Route>
          <Route path="parts/:id" element={<Parts></Parts>}></Route>
          <Route path="pro" element={<Myprofiles></Myprofiles>}></Route>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="add" element={<AddTools></AddTools>}></Route>
          <Route path="user" element={<RequireAdmin><User></User></RequireAdmin>}></Route>
          <Route path="user-profile" element={<UserProfile></UserProfile>}></Route>


          {/* <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path="manageDoctor" element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route> */}
        </Route>
        <Route path="pro" element={<Myprofiles></Myprofiles>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

     
      <MainFooter></MainFooter>
     
    </>
  );
}

export default App;
