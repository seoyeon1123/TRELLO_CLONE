// Router.tsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import App from './App';
import { auth } from './Login/firebase'; // Import auth from firebase

import { onAuthStateChanged } from 'firebase/auth';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoadingText = styled.p`
  font-size: 50px;
  font-weight: bold;
  color: #333;
`;

const Router = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <LoadingContainer>
        <LoadingText>Loading...</LoadingText>
      </LoadingContainer>
    );
  }

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
