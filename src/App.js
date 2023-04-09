
import './App.css';
import Cart from './component/Cart';
import Navbar from './component/Navbar';
import Product from './component/Product';
import Products from './component/Products';
import Home from './component/home';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/products/:id" element={<Product/>} />
        <Route exact path="/cart" element={<Cart/>} />
      </Routes>
    </>
  );
}

export default App;
