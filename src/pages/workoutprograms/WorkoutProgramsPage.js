import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import WorkoutProgram from "./WorkoutProgram";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import styles from "../../styles/WorkoutProgramsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";

function WorkoutProgramsPage({ message, filter = "" }) {
  const [workoutPrograms, setWorkoutPrograms] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchWorkoutPrograms = async () => {
      try {
        const { data } = await axiosReq.get(`/workoutprograms/?${filter}search=${query}`);
        setWorkoutPrograms(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchWorkoutPrograms();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search workout programs"
          />
        </Form>

        {hasLoaded ? (
          <>
            {workoutPrograms.results.length ? (
              <InfiniteScroll
                children={workoutPrograms.results.map((program) => (
                  <WorkoutProgram key={program.id} {...program} setWorkoutPrograms={setWorkoutPrograms} />
                ))}
                dataLength={workoutPrograms.results.length}
                loader={<Asset spinner />}
                hasMore={!!workoutPrograms.next}
                next={() => fetchMoreData(workoutPrograms, setWorkoutPrograms)}
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default WorkoutProgramsPage;
