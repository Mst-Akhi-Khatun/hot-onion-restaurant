import React from 'react';
import img from '../../images/ICON/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
          <main>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-4">
                <div className="container-fluid">
                    <img src={img} width="180px" height=""alt="" />
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">      
                      <form class="d-flex">
                        <a to=""><i className="fas fa-shopping-cart"></i></a>
                        <a to="" className="px-4 login">Login</a>
                        <button className="btn rounded-pill text-white" type="submit">Sign up</button>
                      </form>
                    </div>
                </div>
              </nav>
          </main>

          <div class="banner mb-5 text-center d-flex justify-content-center align-items-center">
            <div class="">
              <h1 class="py-3">Best Food Waiting For Your Belly</h1>
              <div class="input-group mb-3 justify-content-center">
                <input type="text" class="input px-3" placeholder="Search food items" />
                <button class="btn text-white" type="button" id="button-addon2">Search</button>
              </div>
            </div>
          </div>
            
        </div>
    );
};

export default Header;