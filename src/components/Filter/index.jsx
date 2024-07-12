import React from "react";
import styles from "./Filter.module.scss";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { filterContacts } from "../../redux/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const changeFilter = (e) => {
    const value = e.target.value.toLowerCase();
    dispatch(filterContacts(value));
  };

  return (
    <div className={styles.filter}>
      <label htmlFor="filter">Find contact</label>
      <input type="text" id="filter" onChange={changeFilter} name="filter" />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};

export default Filter;
