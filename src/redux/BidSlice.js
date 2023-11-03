import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetUrl, PostUrl } from "../Baseurl";
import { toast } from "react-hot-toast";

export const handleGetPendingBids = createAsyncThunk(
  "bid/handleGetPendingBids",
  async ({ token, signal }, { rejectWithValue }) => {
    try {
      signal.current = new AbortController();
      const response = await GetUrl("pending_bids", {
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

export const handleRequestBid = createAsyncThunk(
  "bid/handleRequestBid",
  async ({ data, token, signal }, { rejectWithValue }) => {
    try {
      signal.current = new AbortController();

      const formData = new FormData();

      for (const key in data) {
        formData.append(key, data[key]);
      }

      const response = await PostUrl("request_bid", {
        data: formData,
        signal: signal.current.signal,
        headers: { token, "Content-Type": "multipart/form-data" },
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

export const handleRequestMutlipleBid = createAsyncThunk(
  "bid/handleRequestMutlipleBid",
  async ({ file, token, signal }, { rejectWithValue }) => {
    try {
      signal.current = new AbortController();
      const formData = new FormData();
      formData.append("file", file);

      const response = await PostUrl("request_multiple_bid", {
        data: formData,
        signal: signal.current.signal,
        headers: { token, "Content-Type": "multipart/form-data" },
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

export const handleBidProposals = createAsyncThunk(
  "bid/handleBidProposals",
  async ({ jobId, token, signal }, { rejectWithValue }) => {
    const formdata = new FormData();
    formdata.append("jobId", jobId);
    try {
      signal.current = new AbortController();
      const response = await PostUrl("bid_proposals", {
        data: formdata,
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

export const handleGetShippedBids = createAsyncThunk(
  "bid/handleGetShippedBids",
  async ({ token, signal }, { rejectWithValue }) => {
    try {
      signal.current = new AbortController();
      const response = await GetUrl("shipped_bids", {
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

export const handleGetCancelledBids = createAsyncThunk(
  "bid/handleGetCancelledBids",
  async ({ token, signal }, { rejectWithValue }) => {
    try {
      signal.current = new AbortController();
      const response = await GetUrl("cancelled_bids", {
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

export const handleGetInTransitJobs = createAsyncThunk(
  "bid/handleGetInTransitJobs",
  async ({ token, signal }, { rejectWithValue }) => {
    try {
      signal.current = new AbortController();
      const response = await GetUrl("in_transit_bids", {
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

export const handleGetCompletedJobs = createAsyncThunk(
  "bid/handleGetCompletedJobs",
  async ({ token, signal }, { rejectWithValue }) => {
    try {
      signal.current = new AbortController();
      const response = await GetUrl("complete", {
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

export const handleGetFavorites = createAsyncThunk(
  "bid/handleGetFavorites",
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

export const handleAddtoFavorites = createAsyncThunk(
  "bid/handleAddtoFavorites",
  async ({ id, token, signal }, { rejectWithValue }) => {
    try {
      signal.current = new AbortController();
      const response = await PostUrl("favorites/add", {
        data: { id },
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

export const handleRemoveFromFavorites = createAsyncThunk(
  "bid/handleRemoveFromFavorites",
  async ({ id, token, signal }, { rejectWithValue }) => {
    try {
      signal.current = new AbortController();
      const response = await PostUrl("favorites/remove", {
        data: { id },
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

export const handleCounterOffer = createAsyncThunk(
  "bid/handleCounterOffer",
  async ({ bidId, counterOffer, signal }, { rejectWithValue }) => {
    try {
      signal.current = new AbortController();
      const response = await PostUrl("counter_offer", {
        data: { bidId, counterOffer },
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

export const handleAcceptBid = createAsyncThunk(
  "bid/handleAcceptBid",
  async ({ bidId, token, signal }, { rejectWithValue }) => {
    try {
      signal.current = new AbortController();
      const response = await PostUrl("bid_accept", {
        data: { bidId },
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

export const handleCancelBid = createAsyncThunk(
  "bid/handleCancelBid",
  async ({ jobId, token, signal }, { rejectWithValue }) => {
    try {
      signal.current = new AbortController();
      const response = await PostUrl("cancel_bid", {
        data: { jobId },
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
  jobLoading: false,
  bidLoading: false,
  createBidLoading: false,
  favoriteLoading: false,
  addFavoriteLoading: false,
  removeFavoriteLoading: false,
  counterOfferLoading: false,
  cancelBidLoading: false,
  acceptBidLoading: false,
  error: null,
  success: false,
  pendingBids: [],
  shippedBids: [],
  inTransitJobs: [],
  completedJobs: [],
  favorites: [],
  bidProposals: [],
  searchBids: [],
  searchJobs: [],
  searchData: [],
  showBidProposal: false,
  showBidDetails: false,
  showJobDetails: false,
  singleBidDetails: null,
  singleJobDetails: null,
};

const BidSlice = createSlice({
  name: "bid",
  initialState,
  reducers: {
    handleChangeShowBidProposal: (state, { payload }) => {
      state.showBidProposal = payload;
    },

    handleChangeShowJobDetails: (state, { payload }) => {
      state.showJobDetails = payload;
    },

    handleChangeShowBidDetails: (state, { payload }) => {
      state.showBidDetails = payload;
    },

    handelRemoveFavourite: (state, { payload }) => {
      const modArr = state.favorites.filter((item) => item?._id !== payload);

      if (modArr) {
        state.favorites = modArr;
        state.pendingBids = state.pendingBids.map((i) =>
          i?._id === payload ? { ...i, isFavourite: false } : i
        );
      }
    },

    handelAddFavourite: (state, { payload }) => {
      state.favorites = [...state.favorites, payload];
      const modArr = state.pendingBids.map((i) =>
        i?._id === payload ? { ...i, isFavourite: true } : i
      );
      if (modArr) {
        state.pendingBids = modArr;
      }
    },

    handleSearchBidAndJob: (state, { payload }) => {
      if (payload?.from === "bids") {
        state.searchBids = payload?.data;
      } else if (payload?.from === "jobs") {
        state.searchJobs = payload?.data;
      } else {
        state.searchData = payload?.data;
      }
    },

    hanldeFindSingleBid: (state, { payload }) => {
      const bid = state.pendingBids.find((bid) => bid?._id === payload);
      if (bid) {
        state.singleBidDetails = bid;
      } else {
        state.singleBidDetails = null;
      }
    },

    hanldeFindSingleJob: (state, { payload }) => {
      if (payload?.jobStatus === "in-transit") {
        const job = state.inTransitJobs.find((job) => job?._id === payload?.id);
        if (job) {
          state.singleJobDetails = job;
        } else {
          state.singleJobDetails = null;
        }
      } else {
        const job = state.completedJobs.find((job) => job?._id === payload?.id);
        if (job) {
          state.singleJobDetails = job;
        } else {
          state.singleJobDetails = null;
        }
      }
    },
  },
  extraReducers: (builder) => {
    // get pending bids
    builder.addCase(handleGetPendingBids.pending, (state, {}) => {
      state.bidLoading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(handleGetPendingBids.fulfilled, (state, { payload }) => {
      state.bidLoading = false;
      state.success = true;
      state.error = null;
      state.pendingBids = payload?.pendingBids;
    });
    builder.addCase(handleGetPendingBids.rejected, (state, { payload }) => {
      state.bidLoading = false;
      state.success = false;
      state.error = payload ?? null;
    });
    // get bid proposals
    builder.addCase(handleBidProposals.pending, (state, {}) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(handleBidProposals.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.bidProposals = payload?.bids;
    });
    builder.addCase(handleBidProposals.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload ?? null;
    });
    // get shipped bids
    builder.addCase(handleGetShippedBids.pending, (state, {}) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(handleGetShippedBids.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.shippedBids = payload?.shippedBids;
    });
    builder.addCase(handleGetShippedBids.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload ?? null;
    });
    // get cancelled bids
    builder.addCase(handleGetCancelledBids.pending, (state, {}) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(handleGetCancelledBids.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.jobs = payload?.jobs;
    });
    builder.addCase(handleGetCancelledBids.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload ?? null;
    });
    // get in transit jobs
    builder.addCase(handleGetInTransitJobs.pending, (state, {}) => {
      state.jobLoading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(handleGetInTransitJobs.fulfilled, (state, { payload }) => {
      state.jobLoading = false;
      state.success = true;
      state.error = null;
      state.inTransitJobs = payload?.jobs;
    });
    builder.addCase(handleGetInTransitJobs.rejected, (state, { payload }) => {
      state.jobLoading = false;
      state.success = false;
      state.error = payload ?? null;
    });
    // get in transit jobs
    builder.addCase(handleGetCompletedJobs.pending, (state, {}) => {
      state.jobLoading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(handleGetCompletedJobs.fulfilled, (state, { payload }) => {
      state.jobLoading = false;
      state.success = true;
      state.error = null;
      state.completedJobs = payload?.jobs;
    });
    builder.addCase(handleGetCompletedJobs.rejected, (state, { payload }) => {
      state.jobLoading = false;
      state.success = false;
      state.error = payload ?? null;
    });
    // get favorites
    builder.addCase(handleGetFavorites.pending, (state, {}) => {
      state.favoriteLoading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(handleGetFavorites.fulfilled, (state, { payload }) => {
      state.favoriteLoading = false;
      state.success = true;
      state.error = null;
      state.favorites = payload?.favorites;
    });
    builder.addCase(handleGetFavorites.rejected, (state, { payload }) => {
      state.favoriteLoading = false;
      state.success = false;
      state.error = payload ?? null;
    });

    // add favorites
    builder.addCase(handleAddtoFavorites.pending, (state, {}) => {
      state.addFavoriteLoading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(handleAddtoFavorites.fulfilled, (state, { payload }) => {
      state.addFavoriteLoading = false;
      state.success = true;
      state.error = null;
    });
    builder.addCase(handleAddtoFavorites.rejected, (state, { payload }) => {
      state.addFavoriteLoading = false;
      state.success = false;
      state.error = payload ?? null;
    });

    // remove favorites
    builder.addCase(handleRemoveFromFavorites.pending, (state, {}) => {
      state.removeFavoriteLoading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(
      handleRemoveFromFavorites.fulfilled,
      (state, { payload }) => {
        state.removeFavoriteLoading = false;
        state.success = true;
        state.error = null;
      }
    );
    builder.addCase(
      handleRemoveFromFavorites.rejected,
      (state, { payload }) => {
        state.removeFavoriteLoading = false;
        state.success = false;
        state.error = payload ?? null;
      }
    );

    // request bid
    builder.addCase(handleRequestBid.pending, (state, {}) => {
      state.createBidLoading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(handleRequestBid.fulfilled, (state, { payload }) => {
      state.createBidLoading = false;
      state.success = true;
      state.error = null;
      state.pendingBids = [payload?.job, ...state.pendingBids];
    });
    builder.addCase(handleRequestBid.rejected, (state, { payload }) => {
      state.createBidLoading = false;
      state.success = false;
      state.error = payload ?? null;
    });

    // request mutilpe bid
    builder.addCase(handleRequestMutlipleBid.pending, (state, {}) => {
      state.createBidLoading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(
      handleRequestMutlipleBid.fulfilled,
      (state, { payload }) => {
        state.createBidLoading = false;
        state.success = true;
        state.error = null;
        // state.pendingBids = [payload?.job, ...state.pendingBids];
      }
    );
    builder.addCase(handleRequestMutlipleBid.rejected, (state, { payload }) => {
      state.createBidLoading = false;
      state.success = false;
      state.error = payload ?? null;
    });

    // counter offer
    builder.addCase(handleCounterOffer.pending, (state, {}) => {
      state.counterOfferLoading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(handleCounterOffer.fulfilled, (state, { payload }) => {
      state.counterOfferLoading = false;
      state.success = true;
      state.error = null;
    });
    builder.addCase(handleCounterOffer.rejected, (state, { payload }) => {
      state.counterOfferLoading = false;
      state.success = false;
      state.error = payload ?? null;
    });

    //accept bid
    builder.addCase(handleAcceptBid.pending, (state, {}) => {
      state.acceptBidLoading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(handleAcceptBid.fulfilled, (state, { payload }) => {
      state.acceptBidLoading = false;
      state.success = true;
      state.error = null;
    });
    builder.addCase(handleAcceptBid.rejected, (state, { payload }) => {
      state.acceptBidLoading = false;
      state.success = false;
      state.error = payload ?? null;
    });

    //cancel bid
    builder.addCase(handleCancelBid.pending, (state, {}) => {
      state.cancelBidLoading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(handleCancelBid.fulfilled, (state, { payload }) => {
      state.cancelBidLoading = false;
      state.success = true;
      state.error = null;
    });
    builder.addCase(handleCancelBid.rejected, (state, { payload }) => {
      state.cancelBidLoading = false;
      state.success = false;
      state.error = payload ?? null;
    });
  },
});

export const {
  handleChangeShowBidProposal,
  handelRemoveFavourite,
  handleChangeShowBidDetails,
  handelAddFavourite,
  handleSearchBidAndJob,
  hanldeFindSingleBid,
  hanldeFindSingleJob,
  handleChangeShowJobDetails,
} = BidSlice.actions;

export default BidSlice.reducer;
