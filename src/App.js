import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import WorkoutProgramCreateForm from "./pages/workout-programs/WorkoutProgramCreateForm";
import WorkoutProgramPage from "./pages/workout-programs/WorkoutProgramPage";
import WorkoutProgramsPage from "./pages/workout-programs/WorkoutProgramsPage";
import WorkoutProgramEditForm from "./pages/workout-programs/WorkoutProgramEditForm";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <WorkoutProgramsPage message="No workout programs found. Adjust the search keyword." />
            )}
          />

          {/* Workout Program Routes */}
          <Route
            exact
            path="/workoutprograms"
            render={() => (
              <WorkoutProgramsPage message="No workout programs found. Adjust the search keyword." />
            )}
          />
          <Route
            exact
            path="/workoutprograms/create"
            render={() => <WorkoutProgramCreateForm />}
          />
          <Route
            exact
            path="/workoutprograms/:id"
            render={() => <WorkoutProgramPage />}
          />
          <Route
            exact
            path="/workoutprograms/:id/edit"
            render={() => <WorkoutProgramEditForm />}
          />

          {/* Authentication and Profile Management */}
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />

          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
