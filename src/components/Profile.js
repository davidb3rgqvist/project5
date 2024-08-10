import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Card, Image, Alert } from "react-bootstrap";
import { CurrentUserContext } from "../App";
import styles from "../styles/Profile.module.css";

const Profile = () => {
  const currentUser = useContext(CurrentUserContext);
  const [profileData, setProfileData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      if (currentUser) {
        try {
          const { data } = await axios.get(`/profiles/${currentUser.pk}/`);
          setProfileData(data);
        } catch (err) {
          setError("Failed to load profile information.");
        }
      }
    };

    fetchProfileData();
  }, [currentUser]);

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  if (!profileData.name) {
    return <p>Loading profile...</p>;
  }

  return (
    <Card className={styles.ProfileCard}>
      <Card.Body>
        <div className={styles.ProfileHeader}>
          <Image
            src={profileData.image || "/default-profile.png"}
            roundedCircle
            className={styles.ProfileImage}
          />
          <h3>{profileData.name}</h3>
        </div>
        <Card.Text>{profileData.content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Profile;
