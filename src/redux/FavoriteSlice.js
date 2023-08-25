import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: true,
  error: null,
  favorites: [],
};

const FavoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
});

export const {} = FavoriteSlice.actions;

export default FavoriteSlice.reducer;
