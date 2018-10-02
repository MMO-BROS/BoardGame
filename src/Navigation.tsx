import * as React from "react";
import "./App.css";

class Navigation extends React.Component {
  public render() {
    return (
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <a className="nav-link" href="">
            Link1
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">
            Link2
          </a>
        </li>
      </ul>
    );
  }
}
export default Navigation;
