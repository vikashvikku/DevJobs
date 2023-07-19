import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobList: [],
  filteredList: [],
  searchLocation: "",
  searchTerm: "",
  isChecked: "",
};
const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    changeSearchLocation(state, action) {
      state.searchLocation = action.payload;
    },
    checkjobType(state) {
      state.isChecked = state.isChecked === "Full time" ? "" : "Full time";
    },
    loadJobs(state, action) {
      state.jobList = action.payload;
    },
    filteredjobs(state, action) {
      state.filteredList = action.payload;
    },
  },
});

export const {
  changeSearchTerm,
  loadJobs,
  changeSearchLocation,
  checkjobType,
  filteredjobs,
} = jobSlice.actions;
export const jobReducer = jobSlice.reducer;
