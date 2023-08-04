import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showActiveJobDetails: false,
  activeComponent: "active_jobs",
  activeHeader: "jobs",
  showShippedDetails: false,
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
  },
});

export const {
  handleChangeActiveJobDetails,
  handleChangeActiveComponent,
  handleChangeActiveHeader,
  handleChangeShippedDetails,
} = globalStates.actions;

export default globalStates.reducer;
