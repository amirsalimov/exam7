import "./App.css";
import Homepage from "./components/Main/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Item from "./components/Item/Item.jsx";
import Map from "./map/map.jsx";
import { Route, Routes } from "react-router";
import Basket from "./Bakset/Basket.jsx";
import Like from "./Like/Like.jsx";
import Login from "./components/Login/Login.jsx";

function App() {




  return (
    <>
      <Navbar />
       <Routes>
<Route path="Login" element={<Login/>}></Route>
<Route path="like" element={<Like/>}></Route>
<Route path="basket" element={<Basket/>}></Route>
<Route path="index" element={ <Homepage />}></Route>
<Route path="Item" element={<Item />}></Route>
</Routes>
<Map/>

    </>
  );
}

export default App;
