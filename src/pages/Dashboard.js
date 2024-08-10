import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import Profile from "../components/Profile";
import WorkoutFeed from "../components/WorkoutFeed";
import ProfilesToFollow from "../components/ProfilesToFollow";
import { CurrentUserContext } from "../App";
import styles from "../styles/DashboardLayout.module.css";

const Dashboard = () => {
  const currentUser = useContext(CurrentUserContext);

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <Row className={styles.DashboardLayout}>
      <Col md={3}>
        <Profile currentUser={currentUser} />
      </Col>
      <Col md={6}>
        <WorkoutFeed currentUser={currentUser} />
      </Col>
      <Col md={3}>
        <ProfilesToFollow currentUser={currentUser} />
      </Col>
    </Row>
  );
};

export default Dashboard;
