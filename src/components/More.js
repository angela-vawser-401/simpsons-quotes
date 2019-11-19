import React from 'react';
import PropTypes from 'prop-types';
import styles from './More.css';

const More = ({ more }) => (
  <div className={styles.More}>
    <button onClick={more}>next quote</button>
  </div>
);

More.propTypes = {
  more: PropTypes.func.isRequired
};

export default More;
