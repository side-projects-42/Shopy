import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import axios from "axios";
import PlantList from "./components/PlantList";
import ShoppingCart from "./components/ShoppingCart";
import CheckoutForm from "./components/CheckoutForm";
import "antd/dist/antd.css";
import { FaGit, FaGithub, FaGitHub, FaCartPlus } from "react-icons/fa";
import "./App.css";



function App() {
  // array of plants that have been added to the cart
  const [cart, setCart] = useState([]);

  // add a plant to the cart
  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  // remove a plant from the cart
  const removeFromCart = (plant) => {
    setCart(cart.filter((p) => p.id !== plant.id));
  };

  return (
    <div className="Shoppy">
      <Router>       
        <nav className="container">
          <div class="text-box">
            <NavLink exact to="/">
              <a href="/" class="btn btn-white btn-animate">
                click me
              </a>
            </NavLink>
          </div>

          <div class="text-box">
            <NavLink to="/cart">
           
              <a href="/cart" class="btn btn-white btn-animate">
                Cart
                <h3 data-testid="cart-badge2" className="cart-badge">
                <FaCartPlus className="fa-button-carts "/>
                  {cart.length > 0 && cart.length}
                </h3>
              </a> 
            </NavLink>
          </div>

          <h1>
            Shopy <span role="img"></span>
          </h1>
          <ul></ul>
        </nav>

        <Route
          exact
          path="/"
          render={() => <PlantList addToCart={addToCart} />}
        />


        <Route
          path="/cart"
          render={(props) => (
            <ShoppingCart
              {...props}
              cart={cart}
              removeFromCart={removeFromCart}
            />
          )}
        />
        <Route path="/checkout" component={CheckoutForm} />
      </Router>
    </div>
  );
}

export default App;



