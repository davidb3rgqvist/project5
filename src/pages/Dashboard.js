import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import styles from "../styles/Dashboard.module.css";
import WorkoutFeed from "../components/WorkoutFeed.js";
// import EditProfile from "./EditProfile";
// import FollowedPrograms from "./FollowedPrograms";
// import CreateProgram from "./CreateProgram";
import { Route, Switch, NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        {/* <Col md={3} className={styles.Sidebar}>
          <Nav className="flex-column">
            <NavLink
              exact
              className={`${styles.NavLink} nav-link`}
              activeClassName={styles.Active}
              to="/dashboard"
            >
              Workout Feed
            </NavLink>
            <NavLink
              className={`${styles.NavLink} nav-link`}
              activeClassName={styles.Active}
              to="/dashboard/edit-profile"
            >
              Edit Profile
            </NavLink>
            <NavLink
              className={`${styles.NavLink} nav-link`}
              activeClassName={styles.Active}
              to="/dashboard/followed-programs"
            >
              Followed Programs
            </NavLink>
            <NavLink
              className={`${styles.NavLink} nav-link`}
              activeClassName={styles.Active}
              to="/dashboard/create-program"
            >
              Create Program
            </NavLink>
          </Nav>
        </Col> */}
        <Col md={9} className={styles.Content}>
          <Switch>
            <Route exact path="/dashboard" component={WorkoutFeed} />
            {/* <Route path="/dashboard/edit-profile" component={EditProfile} />
            <Route
              path="/dashboard/followed-programs"
              component={FollowedPrograms}
            />
            <Route path="/dashboard/create-program" component={CreateProgram} /> */}
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
