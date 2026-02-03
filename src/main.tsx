import { h, render } from "preact";
import "./style.css";

function App() {
  return (
    <div id="title">
      <svg id="title-svg" viewBox="0 0 500 100" preserveAspectRatio="none">
        <text
          x="0"
          y="60"
          textLength="500"
          textAnchor="middle"
          lengthAdjust="spacingAndGlyphs"
          fontFamily="Courier, monospace"
          letter-spacing="0px"
          style="font-family: sans-serif; font-size: 40px; font-weight: bold;"
          fill="currentColor"
        >
          [wyd]
        </text>
      </svg>
    </div>
  );
}

render(<App />, document.querySelector("#app")!);
