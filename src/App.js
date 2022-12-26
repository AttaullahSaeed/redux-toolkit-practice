import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/product/Cart";
import CockTail from "./components/cockTail/CockTail";
import CockTails from "./components/cockTail/CockTails";
import Products from "./components/product/Products";
import Layout from "./components/layout/Layout";
import Search from "./components/cockTail/Search";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route
            path="/cocktails"
            element={
              <Layout>
                <Search />
                <CockTails />
              </Layout>
            }
          ></Route>
          <Route path="/cocktail/:id" element={<CockTail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
