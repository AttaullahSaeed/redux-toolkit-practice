import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layout/Loader";
import { fetchCocktails } from "../../reduxToolkit/cocktailSlice";
import Error from "../layout/Error";
import { Link } from "react-router-dom";

const CockTails = () => {
  const [modifiedCocktails, setmodifiedCocktails] = useState([]);
  const dispatch = useDispatch();
  const { loading, cocktails, error } = useSelector((state) => state.cocktails);

  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);
  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const { idDrink, strAlcoholic, strDrinkThumb, strGlass, strDrink } =
          item;
        return {
          id: idDrink,
          name: strDrink,
          img: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setmodifiedCocktails(newCocktails);
    } else {
      setmodifiedCocktails([]);
    }
  }, [cocktails]);
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }
  if (!cocktails) {
    return <h3>No data found...</h3>;
  }

  return (
    <>
      <div className="container">
        <h2 className="text-center my-4">React Toolkit Cocktails </h2>

        <div className="row">
          {modifiedCocktails.map((data, index) => (
            <div className="col-lg-3 col-md-6 col-12  mx-auto my-2" key={index}>
              <div className="card d-flex justify-content-center">
                <img
                  src={data.img}
                  className="card-img-top pt-2"
                  alt={data.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{data.name}</h5>
                  <p className="card-text">{data.glass}</p>
                  <p className="card-text">{data.info}</p>
                </div>
                <Link to={`/cocktail/${data.id}`}>
                  <div
                    className="btn btn-info mx-auto "
                    style={{ cursor: "pointer" }}
                  >
                    View Details
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CockTails;
