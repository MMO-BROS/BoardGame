import * as React from "react";
import "./App.css";
import Navigation from "./Navigation";

class Home extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Navigation />
        <div>
          <h1>Welcome to our website!</h1>
          <p>Some text</p>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
