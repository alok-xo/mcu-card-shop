import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "../styles/Shop.css";
// import * as React from 'react';
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";

const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setcartCount] = useState(0);

  function LoadCategories() {
    fetch("http://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        data.unshift("all");
        setCategories(data);
      });
  }

  function LoadProducts(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }

  function GetCartCount() {
    setcartCount(cartItems.length);
  }
  useEffect(() => {
    LoadCategories();
    LoadProducts("http://fakestoreapi.com/products");
    GetCartCount();
  }, []);

  function handleCategoryChange(event) {
    if (event.target.value == "all") {
      LoadProducts("http://fakestoreapi.com/products");
    } else {
      LoadProducts(
        `http://fakestoreapi.com/products/category/${event.target.value}`
      );
    }
  }

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -5,
      top: -9,
      border: `1px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  function handleAddToCartClick(e) {
    fetch(`http://fakestoreapi.com/products/${e.target.id}`)
      .then((response) => response.json())
      .then((data) => {
        cartItems.push(data);
        GetCartCount();
        // alert(`${data.title}\nAdded to cart`);
      });
  }

  //   const [data,setData]=useState(character);

  return (
    <div className="shop_container">
      <div className="jk">
        <span id="heading_shop">marvel shop</span>
      </div>

      <div className="dropdown">
        <div className="ddown">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={cartCount} color="secondary">
              <Popup trigger={<ShoppingCartIcon />} >
            
                <div className="popupbody">
                  <table>
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Preview</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartItems.map(item=>
                          <tr>
                            <td>{item.title}</td>
                            <td><img src={item.image} width="50" height="50"/></td>
                            <td>{item.price}</td>
                          </tr>
                        )
                      }
                    </tbody>
                  </table>
                </div>
              </Popup>














              
            </StyledBadge>
          </IconButton>
        </div>

        <div className="selectarea">
          <select onChange={handleCategoryChange}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>

      {products.map((product) => (
        <div className="card-container">
          <div className="image-container" key={product.id}>
            <a href={product.image} target="_blank">
              <img height="200px" width="180px" src={product.image} />
            </a>
          </div>
          <div className="card-content">
            <div className="card-title">
              <p> {product.title}</p>
            </div>
            <div className="card-body">
              <p>
                <b>Price</b> - {product.price}/-
              </p>
              <p>
                <b>Ratings</b> -{" "}
                <span
                  style={{ color: "green" }}
                  className="bi bi-star-fill"
                ></span>{" "}
                {product.rating.rate} [{product.rating.count}]
              </p>
            </div>
            <div className="card-footer">
              <p>
                <button id={product.id} onClick={handleAddToCartClick}>
                  Add to Cart &nbsp; <i class="bi bi-cart4"></i>
                </button>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
