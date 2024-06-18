import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import App from './App';
import { authService } from './Login/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Router = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authService, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/TRELLO_CLONE/SignUp">
          {loggedIn ? <Redirect to="/TRELLO_CLONE/Login" /> : <SignUp />}
        </Route>
        <Route exact path="/TRELLO_CLONE/Login">
          {loggedIn ? <Redirect to="/TRELLO_CLONE/ToDoBoard" /> : <Login />}
        </Route>
        <Route exact path="/TRELLO_CLONE/ToDoBoard">
          {loggedIn ? <App /> : <Redirect to="/TRELLO_CLONE/Login" />}
        </Route>
        <Route exact path="/TRELLO_CLONE">
          <Redirect to="/TRELLO_CLONE/Login" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
