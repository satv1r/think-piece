import React, { Component } from "react";
import { firestore, auth, createUserProfileDocument } from "../firebase";
import { collectIdsAndDocs } from "../utilities";
import Authentication from "./Authentication";
import UserProfile from "../components/UserProfile";
import PostPage from "../components/PostPage";

import Posts from "./Posts";

import { Switch, Route, Link } from "react-router-dom";

class Application extends Component {
  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      const user = await createUserProfileDocument(userAuth);
      console.log(user);
      this.setState({ user });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
  };

  render() {
    return (
      <main className="Application">
        <Link to="/">
          <h1>Think Piece</h1>
        </Link>
        <Authentication />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/posts/:id" component={PostPage} />
        </Switch>
      </main>
    );
  }
}

export default Application;
