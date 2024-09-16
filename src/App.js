import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const Statistics = ({ title, stats }) => {
  return (
    <div className='statistics'>
      <h2 className='title'>{title}</h2>
      <div className='items-container'>
        {stats.map(({ id, label, percentage }) => (
          <div key={id} className='item' style={{ backgroundColor: getRandomColor() }}>
            <span className='label'>{label}</span>
            <span className='percentage'>{percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default Statistics;