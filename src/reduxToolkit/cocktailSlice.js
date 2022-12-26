import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCocktails = createAsyncThunk(
  "cocktails/fetchCocktails",
  async () => {
    const { data } = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    );
    return data;
  }
);
export const fetchSingleCocktail = createAsyncThunk(
  "cocktails/fetchSignleCocktails",
  async (id) => {
    const { data } = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    return data;
  }
);
export const searchCocktail = createAsyncThunk(
  "cocktails/searchCocktails",
  async (searchText) => {
    const { data } = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
    );
    return data;
  }
);
const cocktailSlice = createSlice({
  name: "cocktails",
  initialState: {
    loading: false,
    cocktails: [],
    error: null,
    cocktail: [],
  },
  extraReducers: {
    [fetchCocktails.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCocktails.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    },
    [fetchCocktails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchSingleCocktail.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSingleCocktail.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktail = action.payload.drinks;
    },
    [fetchSingleCocktail.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [searchCocktail.pending]: (state, action) => {
      state.loading = true;
    },
    [searchCocktail.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    },
    [searchCocktail.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default cocktailSlice.reducer;
