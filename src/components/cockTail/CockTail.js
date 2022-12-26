import React from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layout/Loader";

import Error from "../layout/Error";
import { fetchSingleCocktail } from "../../reduxToolkit/cocktailSlice";

const CockTail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { loading, cocktail, error } = useSelector((state) => state.cocktails);

  useEffect(() => {
    dispatch(fetchSingleCocktail(id));
  }, [dispatch, id]);

  return (
    <>
      <Layout>
        {loading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : (
          <div className="container mt-4">
            <Link to="/cocktails">
              <button className="btn btn-dark">Go Back</button>
            </Link>
            <h4 className="text-center my-4">Cocktails Details </h4>

            <div className="row">
              <div className=" col-md-6 col-12  mx-auto my-2">
                <div className="card d-flex justify-content-center">
                  <img
                    src={cocktail[0]?.strDrinkThumb}
                    className="card-img-top pt-2"
                    alt={cocktail[0]?.strDrink}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{cocktail[0]?.strDrink}</h5>
                    <p className="card-text">{cocktail[0]?.strGlass}</p>
                    <small className="card-text">
                      {cocktail[0]?.strInstructions}
                    </small>
                    <small className="card-text">
                      {cocktail[0]?.strInstructionsDE}
                    </small>
                    <small>{cocktail[0]?.strInstructionsIT}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default CockTail;
