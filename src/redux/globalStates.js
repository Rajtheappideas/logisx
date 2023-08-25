import { createSlice } from "@reduxjs/toolkit";
import { BroadcastChannel } from "broadcast-channel";

const initialState = {
  showActiveJobDetails: false,
  activeComponent: "active jobs",
  activeHeader: "jobs",
  showShippedDetails: false,
  showSearchComponent: false,
  showBidUploadComponent: false,
  showChatSidebar: false,
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
    handleChangeShippedDetails: (state, { payload }) => {
      state.showShippedDetails = payload;
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
  },
});

export const {
  handleChangeActiveJobDetails,
  handleChangeActiveComponent,
  handleChangeActiveHeader,
  handleChangeShippedDetails,
  handleChangeShowBidUploadComponent,
  handleChangeShowSearchComponent,
  handleChangeShowChatSidebar,
  handleLogoutFromAllTabs,
  handleSuccess,
  loginAllTabsEventListener,
  logoutAllTabsEventListener,
} = globalStates.actions;

export default globalStates.reducer;
