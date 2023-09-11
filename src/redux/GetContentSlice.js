import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetUrl, commonGetUrl } from "../Baseurl";
import { toast } from "react-hot-toast";

export const handleGetFaqs = createAsyncThunk(
  "getContent/handleGetFaqs",
  async ({ signal }, { rejectWithValue }) => {
    try {
      signal.current = new AbortController();
      const response = await commonGetUrl("faqs", {
        signal: signal.current.signal,
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

export const handleGetTerms = createAsyncThunk(
  "getContent/handleGetTerms",
  async ({ signal }, { rejectWithValue }) => {
    try {
      signal.current = new AbortController();
      const response = await commonGetUrl("terms", {
        signal: signal.current.signal,
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

export const handleGetPrivacy = createAsyncThunk(
  "getContent/handleGetPrivacy",
  async ({ signal }, { rejectWithValue }) => {
    try {
      signal.current = new AbortController();
      const response = await commonGetUrl("privacy", {
        signal: signal.current.signal,
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

export const handleGetChat = createAsyncThunk(
  "getContent/handleGetChat",
  async ({ token, signal }, { rejectWithValue }) => {
    try {
      signal.current = new AbortController();
      const response = await GetUrl("get-chats", {
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

const initialState = {
  loading: false,
  error: null,
  success: false,
  faqs: [],
  terms: null,
  privacy: null,
  chats: [],
};

const GetContentSlice = createSlice({
  name: "getContent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get faqs
    builder.addCase(handleGetFaqs.pending, (state, {}) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(handleGetFaqs.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.faqs = payload?.data;
    });
    builder.addCase(handleGetFaqs.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload ?? null;
    });
    // get terms
    builder.addCase(handleGetTerms.pending, (state, {}) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(handleGetTerms.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.terms = payload?.data;
    });
    builder.addCase(handleGetTerms.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload ?? null;
    });
    // get privacy
    builder.addCase(handleGetPrivacy.pending, (state, {}) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(handleGetPrivacy.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.privacy = payload?.data;
    });
    builder.addCase(handleGetPrivacy.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload ?? null;
    });
    // get chats
    builder.addCase(handleGetChat.pending, (state, {}) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(handleGetChat.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.chats = payload?.chats;
    });
    builder.addCase(handleGetChat.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload ?? null;
    });
  },
});

export const {} = GetContentSlice.actions;

export default GetContentSlice.reducer;
