import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showActiveJobDetails: false,
  activeComponent: "active jobs",
  activeHeader: "jobs",
  showShippedDetails: false,
  showSignupProcess: false,
  showSearchComponent: false,
  showBidUploadComponent: false,
  showChatSidebar: false,
};

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
    handleChangeShowSignupProcess: (state, { payload }) => {
      state.showSignupProcess = payload;
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
  },
});

export const {
  handleChangeActiveJobDetails,
  handleChangeActiveComponent,
  handleChangeActiveHeader,
  handleChangeShippedDetails,
  handleChangeShowSignupProcess,
  handleChangeShowBidUploadComponent,
  handleChangeShowSearchComponent,
  handleChangeShowChatSidebar,
} = globalStates.actions;

export default globalStates.reducer;
