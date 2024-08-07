import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <NavBar />
        <Container className={styles.Main}>
          <Switch>
            <Route exact path="/" component={() => <h1>Landing page</h1>} />
            <Route exact path="/login" component={() => <h1>Login</h1>} />
            <Route exact path="/register" component={() => <h1>Register</h1>} />
            <Route component={() => <p>404 Page not found!</p>} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
