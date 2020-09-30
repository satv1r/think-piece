import React, { Component } from "react";
import { firestore, auth, createUserProfileDocument } from "../firebase";
import { collectIdsAndDocs } from "../utilities";
import Authentication from "./Authentication";

import Posts from "./Posts";

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
        <h1>Think Piece</h1>
        <Authentication />
        <Posts />
      </main>
    );
  }
}

export default Application;
