import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  success: false,
  jobs: [],
};

const JobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {},
});

export const {} = JobSlice.actions;

export default JobSlice.reducer;
