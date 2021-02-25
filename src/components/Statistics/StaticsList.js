import React from 'react';
import Statistics from './Statistics';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const StatisticsList = ({ items, title }) => (
  <section className={s.statistics}>
    {title && <h2 className="title">{title}</h2>}
    <ul className={s.list}>
      {items.map(({ id, percentage, label }) => (
        <Statistics key={id} percentage={percentage} label={label} />
      ))}
    </ul>
  </section>
);
StatisticsList.defaultProps = {
  title: '',
};
StatisticsList.propTypes = {
  title: PropTypes.string,
};
export default StatisticsList;
