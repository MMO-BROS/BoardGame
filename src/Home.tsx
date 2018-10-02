import * as React from "react";
import "./App.css";
import Board from "./Board/Board";
import SiteFrame from "./SiteFrame/SiteFrame";

class Home extends React.Component {
  public render() {
    return (
      <SiteFrame>
        <header className="content__title">
          <h1>Main heading</h1>
          <small>Sub heading contents</small>
        </header>
        <Board />
        <footer className="footer" />
      </SiteFrame>
    );
  }
}
export default Home;
