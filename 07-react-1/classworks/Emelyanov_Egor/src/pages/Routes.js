import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import useRedditApi from 'hooks/useRedditApi';

import Login from 'pages/login';
import Callback from 'pages/callback';
import Home from 'pages/home';

function Routes({ inputValue }) {
  const [,,isLoggedIn] = useRedditApi();

  if (isLoggedIn) {
    return (
      <Switch>
        <Route path="/" exact component={() => <Home inputValue={inputValue} />} />
        <Route path="/subreddit/:subredditUrl" component={(props) => <Home {...props} />} />
        <Redirect to="/" />
      </Switch>
    );
  }


  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/callback" exact component={Callback} />
      <Redirect to="/login" />
    </Switch>
  );
}

export default Routes;
