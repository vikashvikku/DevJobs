import { configureStore } from "@reduxjs/toolkit";
import { jobReducer } from "./slices/jobslice";
import {
  changeSearchTerm,
  loadJobs,
  changeSearchLocation,
  checkjobType,
  filteredjobs,
} from "./slices/jobslice.js";

const store = configureStore({
  reducer: {
    jobs: jobReducer,
  },
});

export {
  store,
  changeSearchTerm,
  loadJobs,
  changeSearchLocation,
  checkjobType,
  filteredjobs,
};
