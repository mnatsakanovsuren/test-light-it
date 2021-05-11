import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Products from "./components/Products/Products";
import ProductItem from "./components/ProductItem/ProductItem";

function App() {
  const [token, setToken] = useState();
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch('https://smktesting.herokuapp.com/api/products/')
      .then(res => res.json())
      .then((res) => setProducts(res));
  }, []);

  return (
    <Router>
      <div className="App">
        <header>
          <div className="container">
            <nav>
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/login" className="login-link" >Login</Link>
            </nav>
          </div>
        </header>
        <Switch>
          <Route path="/login">
            <Login setToken={setToken}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          {products && <Route path="/products/:productId" children={<ProductItem token={token} products={products}/>} />}
          {products && <Route path="/products"><Products products={products} /></Route>}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
