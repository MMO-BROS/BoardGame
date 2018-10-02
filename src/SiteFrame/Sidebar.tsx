import * as React from "react";

class Sidebar extends React.Component {
  public render() {
    return (
      <aside className="sidebar">
        <div className="scrollbar-inner">
          <a href="/">Test content</a>
        </div>
      </aside>
    );
  }
}
export default Sidebar;
