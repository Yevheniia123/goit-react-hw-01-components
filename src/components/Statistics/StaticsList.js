import React from "react";
import Statistics from "./Statistics";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const StatisticsList = ({ items }) => (
  <section className={s.statistics}>
    <h2 className="title">Upload stats</h2>
    <ul className={s.list}>
      {items.map(({ percentage, id, label }) => (
        <li key={id} className={s.item}>
          <Statistics percentage={percentage} label={label} />
        </li>
      ))}
    </ul>
  </section>
);
StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

export default StatisticsList;
