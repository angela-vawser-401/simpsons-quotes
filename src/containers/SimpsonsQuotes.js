import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Quote from '../components/Quote';
import More from '../components/More';
import { setQuote, setQuotePromise } from '../actions/quoteActions';
import { getQuote } from '../selectors/quoteSelectors';

export default function DisplayQuote() {
  const quote = useSelector(getQuote);
  const dispatch = useDispatch();

  const moreQuotesThunk = () => dispatch(setQuote());
  const moreQuotes = () => dispatch(setQuotePromise());

  useEffect(() => {
    moreQuotes();
  }, []);

  return (
    <>
      <Quote quote={quote} />
      <More more={moreQuotesThunk} />
    </>
  );
}
