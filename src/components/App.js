import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import SimpsonsQuotes from '../containers/SimpsonsQuotes';
import Header from '../components/Header';

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={SimpsonsQuotes} />
        </Switch>
      </>
    </Router>
  );
}
