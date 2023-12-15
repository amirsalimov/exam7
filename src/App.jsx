import { BrowserRouter } from "react-router-dom";
import { Route, Router, Routes, useParams } from "react-router";
import "./App.css";
import Homepage from "./components/Main/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Item from "./components/Item/Item.jsx";
import Map from "./map/map.jsx";
import Login from "./Login/Login.jsx"
import { Single } from "./Single";
import { Basket } from "./Bakset/Basket.jsx";
import { Like } from "./Like/Like.jsx";




function App() {

  return (
     
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Item />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Like" element={<Like />} />
          <Route path={`/single/:id`} element={<Single />} />
          <Route path="{/Singlelike/:id}" element={<Single />} />
          <Route path="/index" element={<Homepage />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/Item" element={<Item />} />
        </Routes>
      </BrowserRouter>
   
      <Map />
    </>
  );
}

export default App;
