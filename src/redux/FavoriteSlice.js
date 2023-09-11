import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetUrl, PostUrl } from "../Baseurl";
import { toast } from "react-hot-toast";

export const handleGetFavorites = createAsyncThunk(
  "favorite/handleGetFavorites",
  async ({ token, signal }, { rejectWithValue }) => {
    try {
      signal.current = new AbortController();
      const response = await GetUrl("favorites", {
        signal: signal.current.signal,
        headers: { token },
      });
      return response.data;
    } catch (error) {
      if (error?.response) {
        toast.error(error?.response?.data?.message);
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const handleAddToFavorite = createAsyncThunk(
  "favorite/handleAddToFavorite",
  async ({ id, token, signal }, { rejectWithValue }) => {
    try {
      signal.current = new AbortController();

      const formdata = new FormData();
      formdata.append("id", id);
      const response = await PostUrl("favorites/add", {
        data: formdata,
        signal: signal.current.signal,
        headers: {
          token,
        },
      });
      return response.data;
    } catch (error) {
      if (error?.response) {
        toast.error(error?.response?.data?.message);
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

const initialState = {
  loading: false,
  success: true,
  error: null,
  favorites: [],
  removeLoading: false,
};

const FavoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get favs
    builder.addCase(handleGetFavorites.pending, (state, {}) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(handleGetFavorites.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.favorites = payload?.favorites;
    });
    builder.addCase(handleGetFavorites.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload ?? null;
    });
  },
});

export const {} = FavoriteSlice.actions;

export default FavoriteSlice.reducer;
