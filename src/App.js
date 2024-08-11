// src/App.js
import React from "react";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import Dashboard from "./pages/Dashboard";
import WorkoutFeed from "./components/WorkoutFeed";
import ProfilesToFollow from "./components/ProfilesToFollow";
import Profile from "./components/ProfileDataContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import ErrorBoundary from "./components/ErrorBoundary";

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try {
      const { data } = await axios.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route exact path="/" render={() => <h1>Home page</h1>} />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <ErrorBoundary>
                <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                <ProtectedRoute exact path="/workout-feed" component={WorkoutFeed} />
                <ProtectedRoute exact path="/profiles" component={Profile} />
                <ProtectedRoute exact path="/profiles-to-follow" component={ProfilesToFollow} />
              </ErrorBoundary>
              <Route render={() => <p>Page not found!</p>} />
            </Switch>
          </Container>
        </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
