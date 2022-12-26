import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../../reduxToolkit/cartSlice";
import { fetchProducts } from "../../reduxToolkit/productSlice";
import Loader from "../layout/Loader";
import { STATUSES } from "../../reduxToolkit/productSlice";
import Error from "../layout/Error";
import Layout from "../layout/Layout";
const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product) => {
    dispatch(addtoCart(product));
  };
  if (status === STATUSES.LOADING) {
    return <Loader />;
  }
  if (status === STATUSES.ERROR) {
    return <Error />;
  }
  return (
    <>
      <Layout>
        <div className="container">
          <h2 className="text-center my-4">React Toolkit Project </h2>

          <div className="row">
            {products.map((data, index) => (
              <div
                className="col-lg-3 col-md-6 col-12  mx-auto my-2"
                key={index}
              >
                <div className="card d-flex justify-content-center">
                  <img src={data.image} className="card-img-top pt-2" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">
                      {data.title.substring(0, 15)}
                    </h5>
                    <p className="card-text">$ {data.price}</p>
                  </div>
                  <div
                    onClick={() => handleAdd(data)}
                    className="btn-add mx-auto "
                    style={{ cursor: "pointer" }}
                  >
                    Add to cart{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      style={{ width: "17px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Products;
