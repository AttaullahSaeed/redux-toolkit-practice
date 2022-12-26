import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            Shopping App
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/cocktails">
                  CockTails
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/cart">
                  <div type="button" className=" position-relative">
                    Cart
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      {cart.length}
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
