import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListGroup, Image, Button } from "react-bootstrap";
import styles from "../styles/ProfilesToFollow.module.css";

const ProfilesToFollow = ({ currentUser }) => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const { data } = await axios.get("/profiles/");
        const profilesToFollow = data.filter(profile => profile.owner !== currentUser.pk);
        setProfiles(profilesToFollow);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProfiles();
  }, [currentUser]);

  return (
    <div className={styles.ProfilesToFollowSidebar}>
      <h4>Profiles to Follow</h4>
      <ListGroup>
        {profiles.map(profile => (
          <ListGroup.Item key={profile.id} className={styles.ProfileItem}>
            <Image src={profile.image} roundedCircle width={40} height={40} className="mr-3" />
            <div className={styles.ProfileDetails}>
              <h6>{profile.name}</h6>
              <Button size="sm" variant="primary">Follow</Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ProfilesToFollow;
