import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetUrl, PostUrl } from "../Baseurl";
import { toast } from "react-hot-toast";

export const handleGetDocuments = createAsyncThunk(
  "document/handleGetDocuments",
  async ({ token, signal }, { rejectWithValue }) => {
    try {
      signal.current = new AbortController();
      const response = await GetUrl("get_documents", {
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

export const handleEditDocuments = createAsyncThunk(
  "document/handleEditDocuments",
  async (
    { ein, totalDocks, dockNumbers, photo, token, signal },
    { rejectWithValue }
  ) => {
    try {
      signal.current = new AbortController();

      const formdata = new FormData();
      formdata.append("ein", ein);
      formdata.append("totalDocks", totalDocks);
      formdata.append("dockNumbers", dockNumbers);
      for (let i = 0; i < photo.length; i++) {
        formdata.append("photo", photo[i]);
      }
      const response = await PostUrl("edit_documents", {
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

export const handleDeleteDockPhoto = createAsyncThunk(
  "document/handleDeleteDockPhoto",
  async ({ photo, token, signal }, { rejectWithValue }) => {
    try {
      signal.current = new AbortController();

      const formdata = new FormData();
      formdata.append("photo", photo);
      const response = await PostUrl("delete_dock_photo", {
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
  error: null,
  success: false,
  documents: null,
  deleteLoading: false,
};

const DocumentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    handleDeleteDockPhotos: (state, { payload }) => {
      state.documents = { ...state.documents, dockPhotos: payload };
    },
  },
  extraReducers: (builder) => {
    // get documents
    builder.addCase(handleGetDocuments.pending, (state, {}) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(handleGetDocuments.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.documents = payload?.data;
    });
    builder.addCase(handleGetDocuments.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload ?? null;
    });
    // edit documents
    builder.addCase(handleEditDocuments.pending, (state, {}) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(handleEditDocuments.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.documents = payload?.data;
    });
    builder.addCase(handleEditDocuments.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload ?? null;
    });
    // delete photo
    builder.addCase(handleDeleteDockPhoto.pending, (state, {}) => {
      state.deleteLoading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(handleDeleteDockPhoto.fulfilled, (state, { payload }) => {
      state.deleteLoading = false;
      state.success = true;
      state.error = null;
    });
    builder.addCase(handleDeleteDockPhoto.rejected, (state, { payload }) => {
      state.deleteLoading = false;
      state.success = false;
      state.error = payload ?? null;
    });
  },
});

export const { handleDeleteDockPhotos } = DocumentSlice.actions;

export default DocumentSlice.reducer;
