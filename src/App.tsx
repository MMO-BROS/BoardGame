import { Sprite, Stage } from "@inlet/react-pixi";
import * as React from "react";
import "./App.css";

class App extends React.Component {
  public render() {
    return (
      <div>
        <p>Hello world</p>
        <Stage>
          <Sprite
           image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
            x={100}
            y={100}
          />
        </Stage>
      </div>
    );
  }
}

export default App;
