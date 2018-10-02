import * as React from "react";

class Header extends React.Component {
  public render() {
    return (
      <header className="header">
        <div
          className="navigation-trigger hidden-xl-up"
          data-sa-action="aside-open"
          data-sa-target=".sidebar"
        >
          <i className="zmdi zmdi-menu" />
        </div>

        <div className="logo hidden-sm-down">
          <h1>
            <a href="/">BoardGame</a>
          </h1>
        </div>
      </header>
    );
  }
}
export default Header;
