
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home/Home';

import Login from './Components/Login/Login';
import Header from './Components/Home/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import RequireAuth from './RequireAuth/RequireAuth';
import Register from './Components/Register/Register';
import ManageItems from './Components/ManageItems/ManageItems';
import AddItem from './Components/AddItem/AddItem';
import MyItems from './Components/MyItems/MyItems';
import InventoryDetails from './Components/InventoryDetails/InventoryDetails';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Blogs from './Components/Blogs/Blogs';
import UseProducts from './Hooks/UseProducts/UseProducts';


function App() {
  
  return (
    <div className="App">
      <Header></Header>
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory" element={
          <Inventory></Inventory>}>

        </Route>
        <Route path="/blogs" element={
          <Blogs></Blogs>}>

        </Route>
        <Route path="/manageitems" element={<RequireAuth>
          <ManageItems></ManageItems>
        </RequireAuth>}>

        </Route>
        <Route path="/additem" element={<RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>}>

        </Route>
        <Route path="/myitems" element={<RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>}>

        </Route>
        <Route path="/inventory/:inventoryId" element={<RequireAuth>
          <InventoryDetails></InventoryDetails>
        </RequireAuth>}>

        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
