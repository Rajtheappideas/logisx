import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BroadcastChannel } from "broadcast-channel";
import { GetUrl, PostUrl } from "../Baseurl";
import toast from "react-hot-toast";

export const handleGetAddress = createAsyncThunk(
  "globalStates/handleGetAddress",
  async ({ token }, { rejectWithValue }) => {
    try {
      const response = await GetUrl("get_address", {
        headers: { token },
      });
      return {
        departureAddresses: response?.data?.departureAddresses,
        arrivalAddresses: response?.data?.arrivalAddresses,
      };
    } catch (error) {
      if (error?.response) {
        toast.error(error?.response?.data?.message);
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const handleDeleteAddress = createAsyncThunk(
  "globalStates/handleDeleteAddress",
  async ({ token, id }, { rejectWithValue }) => {
    try {
      const response = await GetUrl(`delete_address/${id}`, {
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

export const handleAddAddress = createAsyncThunk(
  "globalStates/handleAddAddress",
  async ({ token, locationType, locationDetails }, { rejectWithValue }) => {
    try {
      const response = await PostUrl("add_address", {
        data: {
          type: locationType,
          location: locationDetails?.location,
          latitude: locationDetails?.latitude,
          longitude: locationDetails?.longitude,
        },
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
  showActiveJobDetails: false,
  activeComponent: "active jobs",
  activeHeader: "jobs",
  showSearchComponent: false,
  showBidUploadComponent: false,
  showChatSidebar: false,
  fcmToken: null,
  addresses: null,
  addressLoading: false,
  DeleteAddressLoading: false,
};

const logoutChannel = new BroadcastChannel("handleLogout");
const loginChannel = new BroadcastChannel("handleSuccess");

const globalStates = createSlice({
  name: "globalStates",
  initialState,
  reducers: {
    handleChangeActiveJobDetails: (state, { payload }) => {
      state.showActiveJobDetails = payload;
    },
    handleChangeActiveComponent: (state, { payload }) => {
      state.activeComponent = payload;
    },
    handleChangeActiveHeader: (state, { payload }) => {
      state.activeHeader = payload;
    },
    handleChangeShowSearchComponent: (state, { payload }) => {
      state.showSearchComponent = payload;
    },
    handleChangeShowBidUploadComponent: (state, { payload }) => {
      state.showBidUploadComponent = payload;
    },
    handleChangeShowChatSidebar: (state, { payload }) => {
      state.showChatSidebar = payload;
    },
    handleSuccess: () => {
      loginChannel.postMessage("");
      loginChannel.onmessage = (event) => {
        loginChannel.close();
      };
    },
    handleLogoutFromAllTabs: () => {
      logoutChannel.postMessage("");
      logoutChannel.onmessage = (event) => {
        logoutChannel.close();
      };
    },
    logoutAllTabsEventListener: () => {
      logoutChannel.onmessage = (event) => {
        logoutChannel.close();
        window.location.reload();
      };
    },
    loginAllTabsEventListener: () => {
      loginChannel.onmessage = (event) => {
        window.location.reload();
        loginChannel.close();
      };
    },
    handleChangeFcmToken: (state, { payload }) => {
      state.fcmToken = payload;
    },
    handleChangeAddress: (state, { payload }) => {
      const allAddress = [
        ...state.addresses?.departureAddresses,
        ...state.addresses?.arrivalAddresses,
      ];

      const filteredAddress = allAddress.filter(
        (add) => add?._id !== payload?.id
      );
      if (filteredAddress.length > 0) {
        state.addresses = {
          departureAddresses: filteredAddress.filter(
            (add) => add?.type == "Departure"
          ),
          arrivalAddresses: filteredAddress.filter(
            (add) => add?.type == "Arrival"
          ),
        };
      }
    },
  },
  extraReducers: (builder) => {
    // get address
    builder.addCase(handleGetAddress.pending, (state, {}) => {
      state.addressLoading = true;
    });
    builder.addCase(handleGetAddress.fulfilled, (state, { payload }) => {
      state.addressLoading = false;
      state.addresses = payload;
    });
    builder.addCase(handleGetAddress.rejected, (state, { payload }) => {
      state.addressLoading = false;
      state.addresses = null;
    });

    // add address
    builder.addCase(handleAddAddress.pending, (state, {}) => {
      state.addressLoading = true;
    });
    builder.addCase(handleAddAddress.fulfilled, (state, { payload, meta }) => {
      state.addressLoading = false;
      if (meta.arg?.locationType === "Arrival") {
        state.addresses = {
          departureAddresses: [...state.addresses?.departureAddresses],
          arrivalAddresses: [
            ...state.addresses?.arrivalAddresses,
            payload?.address,
          ],
        };
      } else {
        state.addresses = {
          arrivalAddresses: [...state.addresses?.arrivalAddresses],
          departureAddresses: [
            ...state.addresses?.departureAddresses,
            payload?.address,
          ],
        };
      }
    });
    builder.addCase(handleAddAddress.rejected, (state, { payload }) => {
      state.addressLoading = false;
      state.addresses = null;
    });

    // delete address
    builder.addCase(handleDeleteAddress.pending, (state, {}) => {
      state.DeleteAddressLoading = true;
    });
    builder.addCase(
      handleDeleteAddress.fulfilled,
      (state, { payload, meta }) => {
        state.DeleteAddressLoading = false;
        const allAddress = [
          ...state.addresses?.departureAddresses,
          ...state.addresses?.arrivalAddresses,
        ];

        const filteredAddress = allAddress.filter(
          (add) => add?._id !== meta.arg?.id
        );
        if (filteredAddress.length > 0) {
          state.addresses = {
            departureAddresses: filteredAddress.filter(
              (add) => add?.type == "Departure"
            ),
            arrivalAddresses: filteredAddress.filter(
              (add) => add?.type == "Arrival"
            ),
          };
        }
      }
    );
    builder.addCase(handleDeleteAddress.rejected, (state, { payload }) => {
      state.DeleteAddressLoading = false;
      state.addresses = null;
    });
  },
});

export const {
  handleChangeActiveJobDetails,
  handleChangeActiveComponent,
  handleChangeActiveHeader,
  handleChangeShowBidUploadComponent,
  handleChangeShowSearchComponent,
  handleChangeShowChatSidebar,
  handleLogoutFromAllTabs,
  handleSuccess,
  loginAllTabsEventListener,
  logoutAllTabsEventListener,
  handleChangeFcmToken,
  handleChangeAddress,
} = globalStates.actions;

export default globalStates.reducer;
