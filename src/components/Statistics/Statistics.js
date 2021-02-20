import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Statistics = ({ percentage, label }) => (
  <>
    <span className={s.label}>{label}</span>
    <span className={s.percentage}>{percentage}</span>
  </>
);
Statistics.propTypes = {
  percentage: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};
export default Statistics;
