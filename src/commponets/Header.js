import React, { useEffect, useState } from 'react';
import './effect.css';

function Header() {
  return (
    <>
      <div className="main bg-black d-flex align-items-center">
        <img className="img text-decoration-none text-white" src="av.png" alt="Amazon Logo" height="40px" />
        <span className="text-decoration-none text-white mx-1">.in</span>

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16" style={{ margin: '0 5px' }} color="white">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
        </svg>

        <div className="location">
          <h6 className="text-white"> Delivering to Rajkot 360002 </h6>
          <h6 className="text-white"> Update location</h6>
        </div>

        <div className="d-flex justify-content-center mt-3">
          <form className="d-flex" style={{ padding: '0px 20px 0px' }}>
            <select className="form-select" style={{ borderRadius: '0', maxWidth: '150px' }}>
              <option value="all">All Categories</option>
              
              <option value="books">Books</option>
              <option value="fashion">Fashion</option>
            </select>

            <input
              className="form-control"
              type="search"
              placeholder="Search Amazon"
              aria-label="Search"
              style={{ borderRadius: '0', boxShadow: 'none', width: '450px' }}
            />
            <button className="btn btn-warning" type="submit" style={{ borderRadius: '0', padding: '0 20px' }}>
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>

        
        <div className="dropdown">
          <div className="d-flex justify-content-center align-items-center" style={{ cursor: 'pointer' }} data-bs-toggle="dropdown">
            <img src="flag.png" alt="Flag" height="30px" style={{ padding: '5px' }} />
            <span className="text-white">EN</span>
          </div>
          <ul className="dropdown-menu dropdown-menu-end bg-light">
            <li><a className="dropdown-item" href="#">English</a></li>
            <li><a className="dropdown-item" href="#">Spanish</a></li>
            <li><a className="dropdown-item" href="#">French</a></li>
            <li><a className="dropdown-item" href="#">German</a></li>
          </ul>
        </div>

        
        <div className="dropdown">
          <div className="p-3 d-flex flex-column" style={{ cursor: 'pointer' }} data-bs-toggle="dropdown">
            <h6 className="text-white mb-0">Hello, sign in</h6>
            <h6 className="text-white">Account & Lists</h6>
          </div>

          <div className="dropdown-menubar p-4 dropdown-menu dropdown-menu-end bg-light" style={{ width: '400px' }}>
            <div className="me-10" style={{ flex: 1 }}>
              <h6>Your Lists</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="dropdown-item">Create a List</a></li>
                <li><a href="#" className="dropdown-item">Find a List or Registry</a></li>
                <li><a href="#" className="dropdown-item">AmazonSmile Charity Lists</a></li>
              </ul>
            </div>

            <div>
              <h6>Your Account</h6>
              <ul className="list-unstyled" style={{ flex: 1 }}>
                <li><a href="#" className="dropdown-item">Your Account</a></li>
                <li><a href="#" className="dropdown-item">Orders</a></li>
                <li><a href="#" className="dropdown-item">Recommendations</a></li>
                <li><a href="#" className="dropdown-item">Browsing History</a></li>
                <li><a href="#" className="dropdown-item">Gift Cards</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="return p-2 d-flex flex-column" style={{ cursor: 'pointer' }}>
          <h6 className="text-white mb-0">Returns</h6>
          <h6 className="text-white">& Orders</h6>
        </div>

        <div className="cart p-3">
          <img src="ca.jpg" alt="Cart" height="50px" />
          <span className="text-white">Carts</span>
        </div>
      </div>

      <div className="second">
        <li className="lis">
          <a href="/">All</a>
          <a href="/">MX Player</a>
          <a href="/">Sell</a>
          <a href="/">Best Seller</a>
          <a href="/">Today's Deals</a>
          <a href="/">Mobile</a>
          <a href="/">Electronic</a>
          <a href="/">Prime</a>
          <a href="/">Home & Service</a>
          <a href="/">Fashion</a>
          <a href="/">New Release</a>
        </li>
      </div>

      
      
    </>
  );
}

export default Header;
