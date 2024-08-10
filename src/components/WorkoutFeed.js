import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, ListGroup } from "react-bootstrap";

const WorkoutFeed = () => {
  const [workoutPrograms, setWorkoutPrograms] = useState([]);

  useEffect(() => {
    const fetchWorkoutPrograms = async () => {
      try {
        const { data } = await axios.get("/api/workoutprograms/");
        setWorkoutPrograms(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchWorkoutPrograms();
  }, []);

  return (
    <div>
      <h2>Workout Feed</h2>
      {workoutPrograms.map((program) => (
        <Card key={program.id} className="mb-3">
          <Card.Body>
            <Card.Title>{program.name}</Card.Title>
            <Card.Text>{program.description}</Card.Text>
            <Card.Text>
              <small className="text-muted">Created by: {program.owner}</small>
            </Card.Text>
            <ListGroup variant="flush">
              {program.sessions.map((session) => (
                <ListGroup.Item key={session.id}>
                  {session.name} - {session.duration} on {session.date}
                </ListGroup.Item>
              ))}
            </ListGroup>
            <Button variant="primary" className="mt-3">
              View Program
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default WorkoutFeed;
