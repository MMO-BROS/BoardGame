import * as React from "react";
import Header from "./Header";
import Loader from "./Loader";
import Sidebar from "./Sidebar";

class SiteFrame extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Loader />
        <Header />
        <Sidebar />
        <section className="content">
          <div className="content__inner">{this.props.children}</div>
        </section>
      </React.Fragment>
    );
  }
}
export default SiteFrame;
