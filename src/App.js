import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Products from "./components/Products/Products";
import ProductItem from "./components/ProductItem/ProductItem";

function App() {
  const [token, setToken] = useState();
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch('http://smktesting.herokuapp.com/api/products/')
      .then(res => res.json())
      .then((res) => setProducts(res));
  }, []);

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Link to="/login">login</Link>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/login">
            <Login setToken={setToken}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          {products && <Route path="/products/:productId" children={<ProductItem products={products}/>} />}
          {products && <Route path="/products"><Products products={products} /></Route>}
          <Route path="/">
            <Home token={token}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
