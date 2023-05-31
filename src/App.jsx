import React, { Fragment, useContext } from "react";
import "./app.scss";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
// import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  // const user = true;
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
        {user && (
          <Fragment>
            <Route path="/movies">
              <Home type="movie" />
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
          </Fragment>
        )}
      </Switch>
    </Router>
  );
};

export default App;
