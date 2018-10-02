import { Sprite, Stage } from "@inlet/react-pixi";
import * as React from "react";

class Board extends React.Component {
  public render() {
    return (
      <Stage>
        <Sprite
          image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
          x={100}
          y={100}
        />
      </Stage>
    );
  }
}
export default Board;
