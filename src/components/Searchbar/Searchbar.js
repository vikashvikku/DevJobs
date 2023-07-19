import React from "react";
import "./Searchbar.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSearchLocation,
  changeSearchTerm,
  checkjobType,
  filteredjobs,
} from "../../store/store";

const Searchbar = () => {
  const dispatch = useDispatch();

  const jobsAvailable = useSelector((state) => {
    return state.jobs.jobList;
  });

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  const searchTerm = useSelector((state) => {
    return state.jobs.searchTerm;
  });

  const handleSearchLocationChange = (event) => {
    dispatch(changeSearchLocation(event.target.value));
  };

  const searchLocation = useSelector((state) => {
    return state.jobs.searchLocation;
  });

  const checkType = useSelector((state) => state.jobs.isChecked);
  console.log(checkType, "checkType");

  const handleCheckType = () => {
    dispatch(checkjobType());
  };

  const filterByNameJobs = () => {
    const filteredJobs = jobsAvailable.filter((job) => {
      console.log(searchTerm, "searchTerm");
      return job.position.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return filteredJobs;
  };

  const filterByLocationJobs = () =>
    filterByNameJobs().filter((job) => {
      console.log(
        "Location",
        job.location.toLowerCase().includes(searchLocation.toLowerCase())
      );
      return job.location.toLowerCase().includes(searchLocation.toLowerCase());
    });

  const filterByTypeJobs = () =>
    filterByLocationJobs().filter((job) => job.jobType.includes(checkType));

  const handleFilteredJobs = () => {
    console.log(filterByTypeJobs(), "jobs Available");
    dispatch(filteredjobs(filterByTypeJobs()));
  };

  return (
    <div className="searchbar">
      <div className="search">
        <div>
          <SearchIcon style={{ color: "blue" }} fontSize="small" />
        </div>
        <input
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="searchfield"
          placeholder="Filter by title, companies, expertise..."
        />
      </div>

      <div className="search_location">
        <div>
          <LocationOnIcon style={{ color: "blue" }} fontSize="small" />
        </div>
        <input
          value={searchLocation}
          onChange={handleSearchLocationChange}
          className="searchfield"
          placeholder="Filter by location..."
        />
      </div>

      <div className="checkbox">
        <div>
          <input onClick={handleCheckType} value={checkType} type="checkbox" />
        </div>
        <div className="checkbox-text">
          <p>Full Time Only</p>
        </div>
      </div>
      <div onClick={handleFilteredJobs} className="button">
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default Searchbar;
