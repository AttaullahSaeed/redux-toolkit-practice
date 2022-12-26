import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from "../../reduxToolkit/cartSlice";
import Layout from "../layout/Layout";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const handleDelete = (x) => {
    dispatch(removeToCart(x));
  };
  return (
    <>
      <Layout>
        <div className="container ">
          <div className="row">
            {cart.map((x) => (
              <div className="col-md-12 d-flex justify-content-around my-4">
                <div>
                  <img
                    src={x.image}
                    width={90}
                    height={90}
                    alt="..."
                    className="p-2"
                  />
                </div>
                <div>
                  <p>{x.title.substring(0, 20)}</p>
                </div>
                <div>
                  <p>{x.price}</p>
                </div>
                <div>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(x.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div style={{ height: "77vh" }}>
            {cart.length === 0 && (
              <h2 className="text-center my-5">No Cart Item found...</h2>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Cart;
