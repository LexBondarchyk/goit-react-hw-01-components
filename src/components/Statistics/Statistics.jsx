import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistical.module.css';

const createColor = () => {
  const color =
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    0.5 +
    ')';

  return color;
};

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>

    <ul className={styles.stat_list}>
      {stats.map(stat => (
        <li 
        className={styles.item} 
        key={stat.id}
        style={{ backgroundColor: createColor() }}
        >
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
export default Statistics;
