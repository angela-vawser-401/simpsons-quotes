/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quote.css';

const Quote = ({ quote }) => (
  <figure className={styles.Quote}>
    <div>
      <img src={quote.img} alt={quote.name} />
    </div>
    <div className={styles.copy}>
      <figcaption>{quote.name}</figcaption>
      <p>"{quote.text}"</p>
    </div>
  </figure>
);

Quote.propTypes = {
  quote: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

export default Quote;
