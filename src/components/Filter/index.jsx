import React from "react";
import styles from "./Filter.module.scss";

import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const changeFilter = (e) => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <div className={styles.filter}>
      <label htmlFor="filter">Find contact</label>
      <input type="text" id="filter" onChange={changeFilter} name="filter" />
    </div>
  );
};



export default Filter;
