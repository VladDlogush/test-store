import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as sessionOperations from "../redux/session/sessionOperations";
import AppBar from "./AppBar";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import Products from "../pages/Products";
import Product from "../pages/Product";
import LoginPage from "../pages/Login";
import SignupPage from "../pages/SignUp";

class App extends Component {
  componentDidMount() {
    this.props.refreshUser();
  }

  render() {
    return (
      <div>
        <AppBar />
        <Switch>
          <ProtectedRoute
            exact
            path="/"
            component={HomePage}
            redirectTo="/login"
          />
          <Route path="/about" component={AboutPage} />
          <ProtectedRoute
            path="/products/:id"
            component={Product}
            redirectTo="/login"
          />
          <ProtectedRoute
            path="/products"
            component={Products}
            redirectTo="/login"
          />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Redirect to="/about" />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = {
  refreshUser: sessionOperations.refreshUser
};

export default connect(null, mapDispatchToProps)(App);
