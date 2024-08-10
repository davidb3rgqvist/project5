import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import Profile from "../components/Profile.js";
import WorkoutFeed from "../components/WorkoutFeed";
import ProfilesToFollow from "../components/ProfilesToFollow";
import { CurrentUserContext } from "../App";
import styles from "../styles/DashboardLayout.module.css";

const Dashboard = () => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <Row className={styles.DashboardLayout}>
      <Col md={3}>
        <Profile />
      </Col>
      <Col md={6}>
        <WorkoutFeed />
      </Col>
      <Col md={3}>
        <ProfilesToFollow currentUser={currentUser} />
      </Col>
    </Row>
  );
};

export default Dashboard;
