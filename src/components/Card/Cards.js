import React, { useEffect } from "react";
import "./Card.css";
import { jobs } from "../../Api/api.js";
import CardItem from "./CardItem";
import { useDispatch, useSelector } from "react-redux";
import { loadJobs } from "../../store/store";

const Cards = () => {
  const dispatch = useDispatch();
  const jobsList = useSelector((state) => state.jobs.jobList);
  const filteredList = useSelector((state) => state.jobs.filteredList);

  useEffect(() => {
    dispatch(loadJobs(jobs));
  }, []);
  return (
    <div className="card">
      {filteredList.length > 0
        ? filteredList.map((item) => <CardItem key={item.id} item={item} />)
        : jobsList.map((item) => <CardItem key={item.id} item={item} />)}
    </div>
  );
};

export default Cards;
