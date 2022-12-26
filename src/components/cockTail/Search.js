import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { searchCocktail } from "../../reduxToolkit/cocktailSlice";
const Search = () => {
  const searchRef = useRef();
  const [show, setShow] = useState();
  const dispatch = useDispatch();
  const handleChange = () => {
    const searchText = searchRef.current.value;
    setShow(searchText);
    dispatch(searchCocktail(searchText));
  };

  return (
    <>
      <div className="container">
        <div className="col-8 mx-auto">
          <div className="mb-2 mt-3 position-relative">
            <input
              type="text"
              className="form-control "
              placeholder="search here..."
              ref={searchRef}
              onChange={handleChange}
            />
            {show ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg  search_icone"
                viewBox="0 0 16 16"
                // onClick={handleClear}
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
